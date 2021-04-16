import { BigQuery } from "@google-cloud/bigquery";
type Options = {
  datasetId: string;
  tableId: string;
};
const options: Options = {
  datasetId: "",
  tableId: "",
};

export const stream = async (metric: unknown) => {
  const bigquery = new BigQuery();

  await bigquery
    .dataset(options.datasetId)
    .table(options.tableId)
    .insert(metric);
};

export const init = ({ datasetId, tableId }: Options) => {
  options.datasetId = datasetId;
  options.tableId = tableId;
};
