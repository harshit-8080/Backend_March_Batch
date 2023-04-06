function download(a) {
  // a will be called as callback function
  console.log("inside download function");

  setTimeout(() => {
    a();
  }, 2000);
}

download(function fun() {
  console.log("this is fun function");
  console.log("dhjkdh");
});
