export interface DaySchedule {
  day: string;
  hours: string;
}

export const schedule: DaySchedule[] = [
  { day: "Segunda-feira", hours: "08:30 - 18:00" },
  { day: "Terça-feira", hours: "08:30 - 18:00" },
  { day: "Quarta-feira", hours: "08:30 - 18:00" },
  { day: "Quinta-feira", hours: "08:30 - 18:00" },
  { day: "Sexta-feira", hours: "08:30 - 18:00" },
  { day: "Sábado", hours: "09:00 - 14:00" },
  { day: "Domingo", hours: "Fechado" },
];

export const shortSchedule = "Seg a Sex: 08:30 - 18:00 | Sáb: 09:00 - 14:00";
