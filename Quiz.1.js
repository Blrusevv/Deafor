function solve(arr) {

    const startHour = Number(arr[0]);
    const endHour = Number(arr[1]);
    const hourlyRate = Number(arr[2]);
    const overtimePay = Number(arr[3]);

    const normalHours = Math.min(endHour, 17) - Math.max(startHour, 9);
    const overtimehours = Math.max(endHour, 17) - Math.max(startHour, 17);

    const regularWage = normalHours * hourlyRate;
    const overtimeWage = overtimehours * hourlyRate * overtimePay;

    console.log((regularWage + overtimeWage).toFixed(2));
}

solve()