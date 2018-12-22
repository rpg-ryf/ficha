angular.module('ryf', [])
  .controller('ryfController', ryfController);

function ryfController() {
  var vm = this;

  vm.edittingAttributes = false;
  vm.edittingSkills = false;

  vm.update = update;
  vm.addAttribute = addAttribute;
  vm.toggleAttributeEdditing = toggleAttributeEdditing;
  vm.removeAttribute = removeAttribute;
  vm.addSkill = addSkill;
  vm.toggleSkillEdditing = toggleSkillEdditing;
  vm.removeSkill = removeSkill;
  vm.attrAndSkill = attrAndSkill;
  vm.addEquipment = addEquipment;
  vm.removeEquipment = removeEquipment;
  vm.addSpell = addSpell;
  vm.removeSpell = removeSpell;
  vm.spellAndInt = spellAndInt;

  init();

  function init() {
    var character = JSON.parse(localStorage.getItem('ryf.currentCharacter'));
    if (character) {
      vm.character = character;
    } else {
      vm.character = {
        attributes: [
          {name: 'Físico', value: 0},
          {name: 'Destreza', value: 0},
          {name: 'Inteligencia', value: 0},
          {name: 'Percepción', value: 0}],
        skills: [
          {name: 'Advertir/Notar', stat: 'Percepción', value: 0},
          {name: 'Armas CC', stat: 'Físico', value: 0},
          {name: 'Atletismo', stat: 'Físico', value: 0},
          {name: 'Buscar', stat: 'Percepción', value: 0},
          {name: 'Cabalgar', stat: 'Destreza', value: 0},
          {name: 'Callejeo', stat: 'Inteligencia', value: 0},
          {name: 'Comercio', stat: 'Inteligencia', value: 0},
          {name: 'Disfraz', stat: 'Percepción', value: 0},
          {name: 'Escalar', stat: 'Destreza', value: 0},
          {name: 'Etiqueta', stat: 'Percepción', value: 0},
          {name: 'Esquivar', stat: 'Destreza', value: 0},
          {name: 'Fauna', stat: 'Inteligencia', value: 0},
          {name: 'Leyes', stat: 'Inteligencia', value: 0},
          {name: 'Música', stat: 'Percepción', value: 0},
          {name: 'Navegar', stat: 'Inteligencia', value: 0},
          {name: 'Nadar', stat: 'Destreza', value: 0},
          {name: 'Ocultismo', stat: 'Inteligencia', value: 0},
          {name: 'Rastrear', stat: 'Percepción', value: 0},
          {name: 'Reflejos', stat: 'Percepción', value: 0},
          {name: 'Robar bolsillos', stat: 'Destreza', value: 0},
          {name: 'Religión', stat: 'Inteligencia', value: 0},
          {name: 'Rumores', stat: 'Percepción', value: 0},
          {name: 'Sanación/Hierbas', stat: 'Inteligencia', value: 0},
          {name: 'Sigilo', stat: 'Destreza', value: 0},
          {name: 'Supervivencia/Cazar', stat: 'Inteligencia', value: 0},
          {name: 'Tradición/Historia', stat: 'Inteligencia', value: 0},
          {name: 'Trampas/Cerraduras', stat: 'Destreza', value: 0}
        ],
        equipment: [],
        spells: []
      };
    }
  }

  function update() {
    localStorage.setItem('ryf.currentCharacter', JSON.stringify(vm.character));
  }

  function addAttribute() {
    vm.character.attributes.push({
      name: vm.attribute.new,
      value: 0
    });
    vm.attribute.new = '';
  }

  function toggleAttributeEdditing(toggle) {
    vm.edittingAttributes = toggle;
  }

  function removeAttribute(index) {
    vm.character.attributes.splice(index, 1);
  }

  function addSkill() {
    vm.character.skills.push({
      name: vm.skill.new.name,
      stat: vm.skill.new.stat,
      value: 0
    });

    vm.skill.new.name = '';
    vm.skill.new.stat = '';
  }

  function toggleSkillEdditing(toggle) {
    vm.edittingSkills = toggle;
  }

  function removeSkill(index) {
    vm.character.skills.splice(index, 1);
  }

  function attrAndSkill(skill) {
    return skill.value + vm.character.attributes.filter(function(item) { return item.name === skill.stat})[0].value
  }

  function addEquipment() {
    vm.character.equipment.push({
      name: vm.newEquipment.name,
      description: vm.newEquipment.description
    });
    
    vm.newEquipment.name = '';
    vm.newEquipment.description = '';
  }

  function removeEquipment(index) {
    vm.character.equipment.splice(index, 1);
  }

  function addSpell() {
    vm.character.spells.push({
      name: vm.newSpell.name
    });
    
    vm.newSpell.name = '';
  }

  function removeSpell(index) {
    vm.character.spells.splice(index, 1);
  }

  function spellAndInt(spell) {
    return vm.character.attributes.filter(function(item) {
      return item.name === 'Inteligencia';
    })[0].value + spell;
  }
}
