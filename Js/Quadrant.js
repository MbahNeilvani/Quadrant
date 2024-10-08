// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

function quadrant(a,b){

}

// Solution

function quadrant(x, y) {
    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
}

// Another way

function quadrant(x, y) {
    if (x > 0) {
      if (y > 0) {
        return 1;
      } else {
        return 4;
      }
    } else {
      if (y > 0) {
        return 2;
      } else {
        return 3;
      }
    }
}

// Another

function quadrant(x, y) {
    const firstQuadrant = x > 0 && y > 0;
    const secondQuadrant = x < 0 && y > 0;
    const thirdQuadrant = x < 0 && y < 0;
    const fourthQuadrant = x > 0 && y < 0;
    
    if (firstQuadrant) {
      return 1;
    } else if (secondQuadrant) {
      return 2;
    } else if (thirdQuadrant) {
      return 3;
    } else if (fourthQuadrant) {
      return 4;
    }
}