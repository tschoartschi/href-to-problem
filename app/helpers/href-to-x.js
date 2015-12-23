import Ember from 'ember';
import { hrefTo } from 'ember-href-to/helpers/href-to';

export function hrefToX(params/*, hash*/) {
    var url = hrefTo(params);
    var baseURL = HrefToProblemENV.baseURL.replace(/\/$/, '');
    url = url.replace(baseURL, '');
    return url;
}

export default Ember.Helper.helper(hrefToX);