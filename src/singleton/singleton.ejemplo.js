class WeekDays {
  daysEs = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ]
  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  constructor(lang) {
    this.lang = lang

    if (!WeekDays.instance) WeekDays.instance = this
    return WeekDays.instance
  }

  getDays() {
    return this.lang === 'es' ? this.daysEs : this.daysEn
  }
}

const weekDays = new WeekDays('es')
// const weekDays2 = new WeekDays()

console.log(weekDays.getDays())
// console.log(weekDays2.getDays())
