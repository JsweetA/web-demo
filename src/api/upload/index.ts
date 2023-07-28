import Fly from 'flyio/dist/npm/fly';

const fly = new Fly();

export default function request(url: string, data: Blob) {
  return fly
    .request(url, data, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
        accept: '*/*',
      },
    })
    .then((d: any) => {
      console.log('request result:', d);
    })
    .catch((e: any) => {
      console.log('error', e);
    });
}
