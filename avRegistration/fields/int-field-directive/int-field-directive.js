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
    'avrIntField',
    function($state, $location)
    {
      function link(scope, element, attrs)
      {
        if (angular.isUndefined(scope.field.regex))
        {
          scope.re = new RegExp("");
        } else
        {
          scope.re = new RegExp(scope.field.regex);
        }

        if (scope.field.allow_url_get_param_prefill &&
          $location.search()[scope.field.name])
        {
          var val = $location.search()[scope.field.name];
          if (val.match(scope.re)) {
            scope.field.value = $location.search()[scope.field.name];
          }
        }

        // returns true if regex matches or if there's no regex
        scope.getRe = function(value)
        {
          return scope.re;
        };
      }
      return {
        restrict: 'AE',
        link: link,
        scope: true,
        templateUrl: 'avRegistration/fields/int-field-directive/int-field-directive.html'
      };
    }
  );
