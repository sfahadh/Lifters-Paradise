# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bench_press = Exercise.create({
    name: 'Bench Press',
    plane_of_motion: 'Tranverse Plane',
    joint_action: 'Shoulder Horizontal Adduction & Elbow Extension',
    muscles_involved: 'Pectoralis Major, Front Deltoid, & Triceps Brachii',
    start_image: '',
    end_image: '',
    type_of_exercise: 'Free Weight'
})

squat = Exercise.create({
    name: 'Squat',
    plane_of_motion: 'Sagittal Plane',
    joint_action: 'Hip Extension, Knee Extension, & Plantarflexion',
    muscles_involved: 'Quadriceps, Gluteus Maximus, Soleus, & Gastrocnemius',
    start_image: 'https://i.imgur.com/X3N9QvR.jpg',
    end_image: 'https://i.imgur.com/X3N9QvR.jpg',
    type_of_exercise: 'Free Weight'
})

lat_pulldown = Exercise.create({
    name: 'Lat Pulldown',
    plane_of_motion: 'Frontal Plane',
    joint_action: 'Shoulder Adduction & Elbow Flexion',
    muscles_involved: 'Latissimus Dorsi, Biceps Brachii',
    start_image: '',
    end_image: '',
    type_of_exercise: 'Machine'
})

first_routine = Routine.create({
    name: 'My First Program'
})
