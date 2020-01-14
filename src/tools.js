Array.prototype.delayedForEach = function(callback, timeout, thisArg){
    var i = 0,
      l = this.length,
      self = this,
      caller = function(){
        callback.call(thisArg || self, self[i], i, self);
        (++i < l) && setTimeout(caller, timeout);
      };
    caller();
  };