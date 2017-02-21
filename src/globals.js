module.exports = {

  apiProviders:
  [
      {
        id:1,
        name:'TomTom Sports Cloud',
        desc:'',
        url:'',
        active:false,
        token:'',
        scope:[
          { name:'activities',  api:'',     active:true, route:''},
          { name:'heart_rate',  api:'',     active:true, route:''},
          { name:'tracking',    api:'',     active:true, route:''},
          { name:'physiology',  api:'',     active:true, route:''}
        ]
      },
      {
        id:2,
        name:'Fit Bit',
        desc:'Fitbit motivates you to reach your health and fitness goals by tracking your activity, exercise, sleep, weight and more.',
        url:'http://www.fitbit.com/home',
        active:true,
        token:'',
        scope:[
          {name:'activity', api:'https://api.fitbit.com/1/user/[user-id]/activities.json', active:true, route:'home.providers.fitbit-activities'},
          {name:'sleep',    api:'',     active:true, route:''},
          {name:'heartrate',api:'',     active:false, route:''},
          {name:'location', api:'',     active:false, route:''},
          {name:'nutrition',api:'',     active:true, route:''},
          {name:'profile',  api:'https://api.fitbit.com/1/user/[user-id]/profile.json', active:true, route:''},
          {name:'setting',  api:'',     active:false, route:''},
          {name:'social',   api:'',     active:false, route:''},
          {name:'weight',   api:'',     active:false, route:''}
        ]
      }
  ]

}
