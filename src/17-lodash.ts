import _ from 'lodash';

const data = [
  {
    username: 'Sergio',
    role: 'admin',
  },
  {
    username: 'Andrés',
    role: 'customer'
  },
  {
    username: 'Andrea',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => item.role);
console.log("🚀 ~ file: 17-lodash.ts ~ line 19 ~ rta", rta)
