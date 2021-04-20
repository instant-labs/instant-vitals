[![Cover logo](./assets/cover.svg)](https://vitals.dev)

# [Instant Vitals](https://vitals.dev): Simple tools to track and improve your Web Vitals scores

[![npm (tag)](https://img.shields.io/npm/v/@instantdomain/vitals-client/latest?label=%40instantdomain%2Fvitals-client)](https://www.npmjs.com/package/@instantdomain/vitals-client)
[![npm (tag)](https://img.shields.io/npm/v/@instantdomain/vitals-server/latest?label=%40instantdomain%2Fvitals-server)](https://www.npmjs.com/package/@instantdomain/vitals-server)
[![GitHub](https://img.shields.io/github/license/instantdomainsearch/instant-vitals)](https://github.com/InstantDomainSearch/instant-vitals/blob/main/LICENSE)

Instant Vitals is a tool for collecting Web Vitals metrics and storing them in [Google BigQuery](https://cloud.google.com/bigquery). The library has both a client and a server component. The client is responsible for collecting the metrics using [web-vitals](https://github.com/GoogleChrome/web-vitals), which is maintained by the Google Chrome team, and sending the metrics to the endpoint of your choice. In addition to this, the client converts HTML elements into XPath query strings so that you can easily track down where your problems are later.

The server component is used to then take these metrics and send them to BigQuery. Once the metrics are in BigQuery, you can more easily query for the information you need to improve your Web Vitals scores.

For now we'll assume you're using `npm` and that you have some sort of build system in place for the client. While the server component is only available for NodeJS at the moment, this library is more of a pattern than a prescription so it shouldn't be too hard to implement this yourself in your language of choice.

## Prerequisites

Instant Vitals relies on Google BigQuery to store and process data. You should create an account before getting started. Be aware that the paid tier is required to use this library; however, even with a large number of users, the cost should still be very low.

Once you have created an account, you will need to create a service account. The service account will need permission to create datasets and tables as well as insert records into the database. Create a key for this service account and keep it handy.

## Client Installation

To get started, install the client library in your project:

```sh
npm i @instantdomain/vitals-client
```

Then, you can initialize the library in your browser code like so:

```typescript
import { init } from "@instantdomain/vitals-client";

init({ endpoint: "/api/web-vitals" });
```

Here I'm using `"/api/web-vitals"` as the endpoint. You'll want to change this to an endpoint of your choice on a server that you control.

## Server Installation

First, install the server library in your NodeJS project:

```sh
npm i @instantdomain/vitals-server
```

Then, you can initialize the server component. Here is an example request handler for the endpoint `/api/web-vitals`

```typescript
import fs from "fs";

import { init, streamVitals } from "@instantdomain/vitals-server";

// Google libraries require service key as path to file
const GOOGLE_SERVICE_KEY = process.env.GOOGLE_SERVICE_KEY;
process.env.GOOGLE_APPLICATION_CREDENTIALS = "/tmp/goog_creds";
fs.writeFileSync(
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  GOOGLE_SERVICE_KEY
);

const DATASET_ID = "web_vitals";
init({ datasetId: DATASET_ID }).then().catch(console.error);

// Request handler
export default async (req, res) => {
  const body = JSON.parse(req.body);
  await streamVitals(body, body.name);
  res.status(200).end();
};
```

Note that here we are storing our Google Cloud service key as a string in `GOOGLE_SERVICE_KEY`. We then need to write the key to a temporary file before instructing the BigQuery library to read from that file.

## Running

Once you start your server, you should see the requisite dataset and tables created in BigQuery. Once you have some visitors on your site, you should start seeing your Web Vitals metrics data in these tables:

![BigQuery screenshot](./assets/bigquery.png)

## Identifying opportunities for improvement

Now you're ready to identify some elements on your page that are causing issues. For example, you can query for CLS violations like so:

```sql
SELECT
  `vitalsdev.web_vitals.CLS`.Value,
  Node
FROM
  `vitalsdev.web_vitals.CLS`
JOIN
  UNNEST(Entries) AS Entry
JOIN
  UNNEST(Entry.Sources)
WHERE
  Node != ""
ORDER BY
  value
LIMIT
  10
```

This gives us the following result:

| Value                 | Node                                                     |
| --------------------- | -------------------------------------------------------- |
| 4.6045324800736724E-4 | /html/body/div[1]/main/div/div/div[2]/div/div/blockquote |
| 7.183070668914928E-4  | /html/body/div[1]/header/div/div/header/div              |
| 0.031002668277977697  | /html/body/div[1]/footer                                 |
| 0.035830703317463526  | /html/body/div[1]/main/div/div/div[2]                    |
| 0.035830703317463526  | /html/body/div[1]/footer                                 |
| 0.035830703317463526  | /html/body/div[1]/main/div/div/div[2]                    |
| 0.035830703317463526  | /html/body/div[1]/main/div/div/div[2]                    |
| 0.035830703317463526  | /html/body/div[1]/footer                                 |
| 0.035830703317463526  | /html/body/div[1]/footer                                 |
| 0.03988482067913317   | /html/body/div[1]/footer                                 |

Now, you can browse to your website in Google Chrome and find the offending elements using the following code:

```javascript
$x("/html/body/div[1]/main/div/div/div[2]/div/div/blockquote");
```

![Page query example](./assets/page_example.png)

As you can see, you can identify which elements on the page are degrading your CLS scores. Now you can use this information to improve your users' experiences and your Web Vitals scores!
