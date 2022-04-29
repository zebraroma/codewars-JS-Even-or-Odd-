class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    
    for (let i = 1; i < args.length; i++) {
  min = (args[i] < min) ? args[i] : min;
}
   
    return min;
  }
}