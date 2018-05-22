/**
 * CCCS
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cccs);
  }
}(this, function(expect, Cccs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cccs.Submission();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Submission', function() {
    it('should create an instance of Submission', function() {
      // uncomment below and update the code to test Submission
      //var instane = new Cccs.Submission();
      //expect(instance).to.be.a(Cccs.Submission);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Cccs.Submission();
      //expect(instance).to.be();
    });

    it('should have the property taskId (base name: "task_id")', function() {
      // uncomment below and update the code to test the property taskId
      //var instane = new Cccs.Submission();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Cccs.Submission();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new Cccs.Submission();
      //expect(instance).to.be();
    });

  });

}));
