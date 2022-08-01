function a() {
  console.log(arguments);

  for (const element in arguments) {
    console.log(arguments[element]);
  }
}

a(1, 2, 3);
