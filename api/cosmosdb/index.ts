import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  
  context.bindings.testdocument = JSON.stringify([
    {
      name: req.body?.message
    },
  ]);
};

export default httpTrigger;
