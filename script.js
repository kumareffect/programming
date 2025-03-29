function swapString(a, b) {
    a = a + b;
    b = a.slice(0, b.length);    // 0 to b.length = World
    a = a.slice(a.length - b.length); // Hello World - World = Hello
    console.log(a);
    console.log(b);

}

swapString("Hello", "World");