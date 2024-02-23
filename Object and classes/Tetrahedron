class Tetrahedron {
  constructor(length, sideb, height, sinphi) {
    this.length = length;
    this.sideb = sideb;
    this.height = height;
    this.sinphi = sinphi;
  }
  
  get volume() {
    return this.calculatevolume();
  }
   
  calculatevolume() {
    return (this.length * this.sideb * this.height * this.sinphi)/6;
  }
  
  *getSides() {
    yield this.length;
    yield this.sideb;
    yield this.height;
    yield this.sinphi;
  }
}

const tetrahedron = new Tetrahedron(5, 6, 12, 0.3);

console.log(tetrahedron.volume); 
console.log([...tetrahedron.getSides()]);
