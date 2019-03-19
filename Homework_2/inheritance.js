const rectangle = function(height, width = height){
    
    this.height = height;
    this.width = width;

    this.toString = function(){
        document.write('height:' + this.height + ' ' );
        document.write('width:' + this.width + ' ');
    }
    
    this.getArea = function() { 
        return this.height * this.width;
    }
}

const square = function(length){

    rectangle.call(this,length);

}

let sq = new square(4);
sq.toString();
document.write(sq.getArea());
