import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-uplode-test-pemav"
});
const chart1 = sdk.createChart({ chartId: "636a600d-019d-4f8c-86a4-2dbf47ce4388" });

chart1.render(document.getElementById('chart1'));