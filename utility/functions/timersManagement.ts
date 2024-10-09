export function getTimeRemaining(daily: boolean) {
  const now = new Date();

  if (daily) {
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    );
    const timeDiff = endOfDay.getTime() - now.getTime();

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  } else {
    const dayOfWeek = now.getDay();
    const daysRemaining = 6 - dayOfWeek;

    const endOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysRemaining,
      23,
      59,
      59,
      999
    );
    const timeDiff = endOfWeek.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
}

export function padZero(unit: number) {
  return unit < 10 ? `0${unit}` : unit.toString();
}
