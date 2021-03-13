

export const responseOnNoData = (data, resp) => {
  const noData = data.status === 404;

  if (noData) {
    resp.setHeader('Content-Type', 'application/json');
    resp.statusCode = 404;
    resp.send({ error: 'uri did not resolve as expected, please check the request path' })
  }

  return noData;
}