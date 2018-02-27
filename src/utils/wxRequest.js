import tip from './tip'

export async function  wxRequest(params = {}, url) {
    tip.loading();
    let res = await this.Request(params,url);
    console.log(res)
    tip.loaded();
    return res;
};

export function Request(params={},url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: params.method || 'GET',
        success: function (res) {
          if (res.data) {
            resolve(res.data)
          } else {
            console.log('网络异常' + res.errMsg)
          }
        }
      });
    })
  }
