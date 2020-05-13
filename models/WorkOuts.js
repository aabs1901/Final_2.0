module.exports = (sequelize, DataTypes) => {

    let WorkOuts = sequelize.define('WorkOuts', {
        when: {
            type: DataTypes.STRING,
        },

        howLong: {
            type: DataTypes.STRING,
        },
            
        type: {
            type: DataTypes.STRING,
        
        },
        sets: {
            type: DataTypes.STRING,
        },
        reps: {
            type: DataTypes.STRING,
        },
        
    
        Weightbodyweight: {
            type: DataTypes.BOOLEAN,
        }


     })
     WorkOuts.sync({ force: true }).then(  () =>{
         console.log('Synced student table')
     })
     return WorkOuts
}
