import { getCLS, getFID, getLCP, Metric } from "web-vitals";
import { getXPath, isElement, isNode } from "./util";

type options = {
  endpoint: string;
};

const report = async (metric: Metric, options: options) => {
  const cleanedMetric = convertNodesToXPath(
    (metric as unknown) as Record<string, unknown>
  );
  await fetch(options.endpoint, {
    body: JSON.stringify(cleanedMetric),
    method: "POST",
  });
};

function convertNodesToXPath(obj: Record<string, unknown>): string {
  const getOmittedReplacer = () => {
    return (_: string, value: unknown) => {
      if (isElement(value) || isNode(value)) {
        return getXPath(value as Element);
      }
      return value;
    };
  };

  return JSON.parse(JSON.stringify(obj, getOmittedReplacer()));
}

export const init = ({ endpoint }: options) => {
  const start = (metric: Metric) => {
    report(metric, { endpoint });
  };

  getCLS(start);
  getFID(start);
  getLCP(start);
};
