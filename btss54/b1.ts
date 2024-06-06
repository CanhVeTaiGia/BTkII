function calculateBMI(weight: any, height: any): number | string{
    try{
        if(typeof weight !== 'number' || typeof height !== 'number'){
            throw new Error('Cân nặng và chiều cao phải là số')
        }
        if(weight <= 0 || height <= 0){
            throw new Error('Cân nặng và chiều cao phải lớn hơn 0')
        }
    }catch (error) {
        return (error as Error).message
    }
    const bMi = weight / (height ** 2);
    return bMi;
}
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(70, '1.75'));
console.log(calculateBMI(70, -1.75));

