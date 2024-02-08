// In this example, the outerLoop label is used to specify which loop to break out of. The break outerLoop statement will break out of the outer loop when the inner loop index (j) is equal to 1.

outerLoop: for (let i = 0; i < 3; i++) {
    console.log(`Outer loop iteration ${i}`);

    innerLoop: for (let j = 0; j < 3; j++) {
        console.log(`Inner loop iteration ${j}`);

        if (j === 1) {
            break outerLoop; // Breaks out of the outer loop when inner loop index is 1
        }
    }
}+


OuterLoop:
for(var i = 0;i<10;i++){
    console.log(`i = ${i}`);;
    InnerLoop:
    for(var j=0;j<5;j++){
        console.log(`j = ${j}`);
        suploop:
        for(var k=0;k<2;k++){
            if(k===1){
                break InnerLoop;
            }console.log(`k = ${k}`);
        }

    }
}