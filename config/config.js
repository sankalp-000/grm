const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || "bAZM5SkRkOT0vvLFW07Z3vigrEkCbDSE",
    mongoUri : 'mongodb+srv://Sankalp123:iampwswrd@cluster0.j3wb9cn.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://localhost:27017/tour-place', 
    stripe_connect_test_client_id: 'ca_LsE6a3eJjIr74zt57Az9rUHdPKhI5jgC',
    stripe_test_secret_key: 'sk_test_51LATV0SHUe5biTb01IszV5xkuhD1Wkfj6U5py4JAchK1nKvND503jlBANE0MWwHuggCU2Vq7YYfpxSf28EhuQxSn00QR5iVgOA',
    stripe_test_api_key: 'pk_test_51LATV0SHUe5biTb0ocVb1Rb0bu6SkMY9i3baixxiSo0mxDMHTEPYlaXBYneeFUPNdKoPTbUemFR9vFeTnT56IoDa00RuLCZc3d' 
  }
  
  export default config
  
  
  // mernproject
  
  // ca_LsE6a3eJjIr74zt57Az9rUHdPKhI5jgC
  
  // sk_test_51LATV0SHUe5biTb01IszV5xkuhD1Wkfj6U5py4JAchK1nKvND503jlBANE0MWwHuggCU2Vq7YYfpxSf28EhuQxSn00QR5iVgOA
  
  // pk_test_51LATV0SHUe5biTb0ocVb1Rb0bu6SkMY9i3baixxiSo0mxDMHTEPYlaXBYneeFUPNdKoPTbUemFR9vFeTnT56IoDa00RuLCZc3d
  
  // mongodb+srv://Sankalp123:<password>@cluster0.j3wb9cn.mongodb.net/?retryWrites=true&w=majority
  
  
  // 'mongodb://' + (process.env.IP || 'localhost') + ':' +
      // (process.env.MONGO_PORT || '27017') +
      // '/tour-place'