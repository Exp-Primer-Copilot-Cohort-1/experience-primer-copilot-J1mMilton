function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'components/skills/member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMember',
    bindToController: true,
    scope: {
      member: '='
    }
  };
} 
