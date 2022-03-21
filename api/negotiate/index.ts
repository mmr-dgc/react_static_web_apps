import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, connectionInfo: any): Promise<void> {
    context.res = {
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials":true,
            "Access-Control-Expose-Headers": "x-signalr-user-agent",
            "Access-Control-Allow-Headers": "x-requested-with, x-signalr-user-agent"
        },
        body: connectionInfo
    };
};

export default httpTrigger;