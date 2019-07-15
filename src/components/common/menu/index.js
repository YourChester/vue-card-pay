export default {
  name: 'NavMenu',
  data:() => ({
    msg: 'menu',
    listMenu: [
      {
        id: 'FA81A83B125C4C3F9C5BCB50C7A34070',
        title: 'Личный кабинет',
        href: 'cabinet',
      },
      {
        id: '37AEC461868A45CC9906F2E60001D448',
        title: 'Платежи',
        href: 'pay',
      },
      {
        id: '839CA72AA8904E34AAAB72DC154EEE00',
        title: 'История платежей',
        href: 'histori-pay',
      },
    ],
    optionalMenu: [
      {
        id: 'E914B62843214D11AED19C16D03D6E4C',
        title: 'Настройки',
        href: 'options',
      },
      {
        id: 'D7B03821E17E44999FF261E7DF54B99A',
        title: 'Выход',
        href: 'exit',
      },
    ],
    toolbarMenu: false,
  }),
  methods: {
    shomMenu() {
      this.toolbarMenu = !this.toolbarMenu
    }
  }
}