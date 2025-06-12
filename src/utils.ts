

export function measureRunTime(functionName: string) {
  const startDate = new Date();
  return () => {
    const endDate = new Date();
    const seconds = Math.floor((endDate.valueOf() - startDate.valueOf()) / 1000);
    return `'${functionName}' ran in ${seconds} seconds`
  }
}