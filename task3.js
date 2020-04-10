const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent

function isEquivalent(a, b){
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    
    if (aProps.length != bProps.length) {
        return false;
    }
    
    for(let aProp in a){
        if(a[aProp] !== b[aProp]){
            return false;
        };
    }
    return true;
}
console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false