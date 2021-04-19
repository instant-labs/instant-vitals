import { schemas } from "./schemas";
import { BigQuery } from "@google-cloud/bigquery";

interface Options {
  datasetId: string;
}

const options: Options = {
  datasetId: "",
};

export const streamVitals = async (metric: unknown, table: string) => {
  const bigquery = new BigQuery();
  try {
    await bigquery.dataset(options.datasetId).table(table).insert([metric]);
  } catch (e) {
    console.error(e);
  }
};

export const init = async ({ datasetId }: Options) => {
  options.datasetId = datasetId;

  const bigquery = new BigQuery();

  const [datasets] = await bigquery.getDatasets();
  if (!datasets.map((set) => set.id).includes(datasetId)) {
    await bigquery.createDataset(datasetId);
  }

  for (const [metricName, schema] of Object.entries(schemas)) {
    try {
      await bigquery
        .dataset(options.datasetId)
        .createTable(metricName, { schema: schema });
    } catch (e) {}
  }
};
