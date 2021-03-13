import getConfig from 'next/config';
import { responseOnNoData } from '../../../util/responseUtils';


export default async (req, res) => {
  const { serverRuntimeConfig } = getConfig();
  const regData = await fetch(serverRuntimeConfig.WALLET_REGISTRY_URI);

  const error = responseOnNoData(regData, res);

  if (!error) {
    const data = await regData.json();
    res.statusCode = 200;
    res.json(data);
  }
}
