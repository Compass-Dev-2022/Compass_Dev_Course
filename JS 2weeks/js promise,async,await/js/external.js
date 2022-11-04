function shopStatus() {
  return new Promise((resolve, reject) => {
    let is_shop_status = true;
    if (is_shop_status) {
      resolve("The shop is opened.");
    } else {
      reject("The shop is closed.");
    }
  });
}
// shopStatus()
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

async function shopStatusResult() {
  let result = await shopStatus();

  console.log(result);
}

shopStatusResult();
