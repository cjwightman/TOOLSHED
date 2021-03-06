owner1 = Owner.create(name: 'Bill Murray')
owner2 = Owner.create(name: 'Chevy Chase')
owner3 = Owner.create(name: 'Conan Obrian')
owner4 = Owner.create(name: 'Jimmy Fallon')
owner5 = Owner.create(name: 'Chris Farley')
owner6 = Owner.create(name: 'Dave Chappelle')
owner7 = Owner.create(name: 'Chris Rock')

tool1 = Tool.create(name: 'Saws-all', owner: owner1, category: 'power tool', conditions: '$5', availability: true)
tool2 = Tool.create(name: 'Pressure Washer', owner: owner2, category: 'power tool', conditions: '6 Pack', availability: true)
tool3 = Tool.create(name: 'Hammer', owner: owner3, category: 'hand tool', conditions: 'Replace if lost or broken', availability: true)
tool4 = Tool.create(name: '2 inch socket', owner: owner4, category: 'hand tool', conditions: 'Replace if lost or broken', availability: true)
tool5 = Tool.create(name: 'Rotor Tiller', owner: owner5, category: 'power tool', conditions: 'Fill Gas', availability: true)
tool6 = Tool.create(name: 'Circular Saw', owner: owner6, category: 'power tool', conditions: 'Replace Blades', availability: true)
tool7 = Tool.create(name: 'Vice Grips', owner: owner7, category: 'hand tool', conditions: '$2', availability: true)
tool8 = Tool.create(name: 'Hedge Trimmer', owner: owner1, category: 'power tool', conditions: '$5', availability: true)
tool9 = Tool.create(name: 'Air Compressor', owner: owner2, category: 'power tool', conditions: 'Replace if broken', availability: true)
tool10 = Tool.create(name: 'Torque Wrench', owner: owner3, category: 'hand tool', conditions: '$3', availability: true)
tool11 = Tool.create(name: 'Drywall Knife', owner: owner4, category: 'hand tool', conditions: 'Replace blade', availability: true)
