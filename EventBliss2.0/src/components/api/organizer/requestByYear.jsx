export const requestByYear = (organizerData,num=0) => {
    // REQUESTS BY MONTH 
    const requestsByMonth = {};
    const year = new Date().getFullYear() - num;

    for (let i = 0; i < 12; i++) {
    const monthName = new Date(year, i).toLocaleString('en-US', { month: 'long' });
    requestsByMonth[monthName] = 0;
    }

    const request = organizerData.filter((request) => {
    const requestYear = new Date(request.created).getFullYear();
    return requestYear === year;
    });

    // Count of the request
    request.forEach((request) => {
        const requestMonth = new Date(request.created).getMonth();
        const monthName = new Date(year, requestMonth).toLocaleString('en-US', { month: 'long' });
        requestsByMonth[monthName]++;
      });

    const requestsByMonthArray = Object.entries(requestsByMonth).map(([month, request]) => ({
    month,
    request
    }));

    return requestsByMonthArray
}