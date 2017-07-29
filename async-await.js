async function getShops() {
    var shops = [];

    await axios({
      method: 'get',
      url: '/assets/data/hotpepper.json'
    })
      .then(function(res) {
        shops = res.data.results.shop;
      });

    return shops
  }