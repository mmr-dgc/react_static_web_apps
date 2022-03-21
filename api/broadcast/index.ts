import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const cosmosDBTrigger: AzureFunction = async function (context: Context): Promise<void> {
    context.log('First document Id modified : ', context.bindings.documents[0].id);
    
    context.bindings.documents.map((document)=>{document.name})
    
    context.bindings.signalRMessages = [{
        "target": "newMessage",//RPCのメソッド
        "arguments": ['こんにちは']
    }]
    context.done();
};

export default cosmosDBTrigger;