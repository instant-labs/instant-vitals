export const schemas = {
  cls: {
    fields: [
      {
        mode: "REQUIRED",
        name: "Name",
        type: "STRING",
      },
      {
        mode: "REQUIRED",
        name: "Value",
        type: "FLOAT",
      },
      {
        mode: "REQUIRED",
        name: "Delta",
        type: "FLOAT",
      },
      {
        fields: [
          {
            mode: "REQUIRED",
            name: "Name",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "EntryType",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "StartTime",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "Duration",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "Value",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "HadRecentInput",
            type: "BOOLEAN",
          },
          {
            mode: "REQUIRED",
            name: "LastInputTime",
            type: "FLOAT",
          },
          {
            fields: [
              {
                mode: "REQUIRED",
                name: "Node",
                type: "STRING",
              },
              {
                fields: [
                  {
                    mode: "REQUIRED",
                    name: "X",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Y",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Width",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Height",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Top",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Right",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Bottom",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Left",
                    type: "INTEGER",
                  },
                ],
                mode: "REQUIRED",
                name: "PreviousRect",
                type: "RECORD",
              },
              {
                fields: [
                  {
                    mode: "REQUIRED",
                    name: "X",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Y",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Width",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Height",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Top",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Right",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Bottom",
                    type: "INTEGER",
                  },
                  {
                    mode: "REQUIRED",
                    name: "Left",
                    type: "INTEGER",
                  },
                ],
                mode: "REQUIRED",
                name: "CurrentRect",
                type: "RECORD",
              },
            ],
            mode: "REPEATED",
            name: "Sources",
            type: "RECORD",
          },
        ],
        mode: "REPEATED",
        name: "Entries",
        type: "RECORD",
      },
      {
        mode: "REQUIRED",
        name: "ID",
        type: "STRING",
      },
    ],
  },
  fid: {
    fields: [
      {
        mode: "REQUIRED",
        name: "Name",
        type: "STRING",
      },
      {
        mode: "REQUIRED",
        name: "Value",
        type: "FLOAT",
      },
      {
        mode: "REQUIRED",
        name: "Delta",
        type: "FLOAT",
      },
      {
        fields: [
          {
            mode: "REQUIRED",
            name: "Name",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "EntryType",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "StartTime",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "Duration",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "ProcessingStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "ProcessingEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "Cancelable",
            type: "BOOLEAN",
          },
        ],
        mode: "REPEATED",
        name: "Entries",
        type: "RECORD",
      },
      {
        mode: "REQUIRED",
        name: "ID",
        type: "STRING",
      },
    ],
  },
  fcp: {
    fields: [
      {
        mode: "REQUIRED",
        name: "Name",
        type: "STRING",
      },
      {
        mode: "REQUIRED",
        name: "Value",
        type: "FLOAT",
      },
      {
        mode: "REQUIRED",
        name: "Delta",
        type: "FLOAT",
      },
      {
        fields: [
          {
            mode: "REQUIRED",
            name: "Name",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "EntryType",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "StartTime",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "Duration",
            type: "INTEGER",
          },
        ],
        mode: "REPEATED",
        name: "Entries",
        type: "RECORD",
      },
      {
        mode: "REQUIRED",
        name: "ID",
        type: "STRING",
      },
    ],
  },
  lcp: {
    fields: [
      {
        mode: "REQUIRED",
        name: "Name",
        type: "STRING",
      },
      {
        mode: "REQUIRED",
        name: "Value",
        type: "FLOAT",
      },
      {
        mode: "REQUIRED",
        name: "Delta",
        type: "FLOAT",
      },
      {
        fields: [
          {
            mode: "REQUIRED",
            name: "Name",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "EntryType",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "StartTime",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "Duration",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "Size",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "RenderTime",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "LoadTime",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "ID",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "URL",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "Element",
            type: "STRING",
          },
        ],
        mode: "REPEATED",
        name: "Entries",
        type: "RECORD",
      },
      {
        mode: "REQUIRED",
        name: "ID",
        type: "STRING",
      },
    ],
  },
  ttfb: {
    fields: [
      {
        mode: "REQUIRED",
        name: "Name",
        type: "STRING",
      },
      {
        mode: "REQUIRED",
        name: "Value",
        type: "FLOAT",
      },
      {
        mode: "REQUIRED",
        name: "Delta",
        type: "FLOAT",
      },
      {
        fields: [
          {
            mode: "REQUIRED",
            name: "Name",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "EntryType",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "StartTime",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "Duration",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "InitiatorType",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "NextHopProtocol",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "WorkerStart",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "RedirectStart",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "RedirectEnd",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "FetchStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "DomainLookupStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "DomainLookupEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "ConnectStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "ConnectEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "SecureConnectionStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "RequestStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "ResponseStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "ResponseEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "TransferSize",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "EncodedBodySize",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "DecodedBodySize",
            type: "INTEGER",
          },
          {
            mode: "REQUIRED",
            name: "UnloadEventStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "UnloadEventEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "DomInteractive",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "DomContentLoadedEventStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "DomContentLoadedEventEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "DomComplete",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "LoadEventStart",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "LoadEventEnd",
            type: "FLOAT",
          },
          {
            mode: "REQUIRED",
            name: "Type",
            type: "STRING",
          },
          {
            mode: "REQUIRED",
            name: "RedirectCount",
            type: "INTEGER",
          },
        ],
        mode: "REPEATED",
        name: "Entries",
        type: "RECORD",
      },
      {
        mode: "REQUIRED",
        name: "ID",
        type: "STRING",
      },
    ],
  },
};
