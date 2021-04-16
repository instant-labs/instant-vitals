import { schemas } from "./schemas";
import { BigQuery } from "@google-cloud/bigquery";

const bigquery = new BigQuery();

interface Options {
  datasetId: string;
}

const options: Options = {
  datasetId: "",
};

export const streamVitals = async (metric: unknown, table: string) => {
  try {
    await bigquery.dataset(options.datasetId).table(table).insert(metric);
  } catch (e) {}
};

export const init = async ({ datasetId }: Options) => {
  options.datasetId = datasetId;

  const [datasets] = await bigquery.getDatasets();
  if (!datasets.map((set) => set.id).includes(datasetId)) {
    await bigquery.createDataset(datasetId);
  }

  for (const [metricName, schema] of Object.entries(schemas)) {
    try {
      await bigquery
        .dataset(options.datasetId)
        .createTable(metricName, { schema: schema, location: "US" });
    } catch (e) {}
  }
};
