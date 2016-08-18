/**
 * This file is part of agora-gui-common.
 * Copyright (C) 2015-2016  Agora Voting SL <agora@agoravoting.com>

 * agora-gui-common is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License.

 * agora-gui-common  is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with agora-gui-common.  If not, see <http://www.gnu.org/licenses/>.
**/

angular
  .module('avRegistration')
  .directive(
    'avrEmailField',
    function($state, $location, Patterns)
    {
      function link(scope, element, attrs)
      {
        scope.patterns = function(name)
        {
          return Patterns.get(name);
        };

        if (scope.field.allow_url_get_param_prefill &&
          $location.search()[scope.field.name])
        {
          scope.field.value = $location.search()[scope.field.name];
        }
      }
      return {
        restrict: 'AE',
        link: link,
        scope: true,
        templateUrl: 'avRegistration/fields/email-field-directive/email-field-directive.html'
      };
    }
  );
