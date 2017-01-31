(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("threejs", function(server, options) {
    return {
      defs : {
  "!name": "threejs",
  "THREE": {
    "AnimationAction": {
      "!url": "http://threejs.org/docs/#Reference/animation/AnimationAction",
      "prototype": {
        "time": "number",
        "timeScale": "number",
        "weight": "number",
        "loop": "number",
        "repetitions": "number",
        "paused": "bool",
        "enabled": "bool",
        "clampWhenFinished": "bool",
        "zeroSlopeAtStart": "bool",
        "zeroSlopeAtEnd": "bool",
        "play": "fn() -> +THREE.AnimationAction",
        "stop": "fn() -> +THREE.AnimationAction",
        "reset": "fn() -> +THREE.AnimationAction",
        "isRunning": "fn() -> bool",
        "isScheduled": "fn() -> bool",
        "startAt": "fn() -> +THREE.AnimationAction",
        "setLoop": "fn(mode: number, repetitions: number) -> +THREE.AnimationAction",
        "setEffectiveWeight": "fn(weight: number) -> +THREE.AnimationAction",
        "getEffectiveWeight": "fn() -> number",
        "fadeIn": "fn(duration: number) -> +THREE.AnimationAction",
        "fadeOut": "fn(duration: number) -> +THREE.AnimationAction",
        "crossFadeFrom": "fn(fadeOutAction: +THREE.AnimationAction, duration: number, warp: bool) -> +THREE.AnimationAction",
        "crossFadeTo": "fn(fadeInAction: +THREE.AnimationAction, duration: number, warp: bool) -> +THREE.AnimationAction",
        "stopFading": "fn() -> +THREE.AnimationAction",
        "setEffectiveTimeScale": "fn(timeScale: number) -> +THREE.AnimationAction",
        "getEffectiveTimeScale": "fn() -> number",
        "setDuration": "fn(duration: number) -> +THREE.AnimationAction",
        "syncWith": "fn(action: +THREE.AnimationAction) -> +THREE.AnimationAction",
        "halt": "fn(duration: number) -> +THREE.AnimationAction",
        "warp": "fn(startTimeScale: number, endTimeScale: number, duration: number) -> +THREE.AnimationAction",
        "stopWarping": "fn() -> +THREE.AnimationAction",
        "getMixer": "fn() -> +THREE.AnimationMixer",
        "getClip": "fn() -> +THREE.AnimationClip",
        "getRoot": "fn() -> +THREE.Object3D",
        "parse": {
          "!type": "fn(json: object) -> +THREE.AnimationClip",
          "!doc": "json -- JSON object"
        },
        "toJSON": {
          "!type": "fn(clip: +THREE.AnimationClip) -> object",
          "!doc": "clip -- AnimationClip"
        },
        "CreateFromMorphTargetSequence": {
          "!type": "fn(name: string, morphTargetSequence: [], fps: number, noLoop: bool) -> +THREE.AnimationClip",
          "!doc": "name -- Name for the new clip <br>\n    morphTargetSequence -- Array of morph targets <br>\n    fps -- Number of frames per second <br>\n    noLoop -- Whether looping occurs automatically."
        },
        "parseAnimation": {
          "!type": "fn(animation: object, bones: []) -> +THREE.AnimationClip",
          "!doc": "Parses the animation.hierarchy format and returns an AnimationClip."
        }
      },
      "!doc": "An AnimationAction schedules clip playback on specific objects.",
      "!type": "fn(mixer: +THREE.AnimationMixer, clip: +THREE.AnimationClip, localRoot: +THREE.Object3D)"
    },
    "AnimationClip": {
      "!url": "http://threejs.org/docs/#Reference/animation/AnimationClip",
      "prototype": {
        "uuid": "string",
        "name": "string",
        "duration": "number",
        "resetDuration": {
          "!type": "fn()",
          "!doc": "Resets duration by scanning all tracks in the clip."
        },
        "trim": {
          "!type": "fn() -> +THREE.AnimationClip",
          "!doc": "Trims all tracks to the clip's duration."
        },
        "optimize": {
          "!type": "fn() -> +THREE.AnimationClip",
          "!doc": "Optimizes each track."
        },
        "parse": {
          "!type": "fn(json: object) -> +THREE.AnimationClip",
          "!doc": "json -- JSON object"
        },
        "toJSON": {
          "!type": "fn(clip: +THREE.AnimationClip) -> object",
          "!doc": "clip -- AnimationClip"
        },
        "CreateFromMorphTargetSequence": {
          "!type": "fn(name: string, morphTargetSequence: [], fps: number, noLoop: bool) -> +THREE.AnimationClip",
          "!doc": "name -- Name for the new clip <br>\n    morphTargetSequence -- Array of morph targets <br>\n    fps -- Number of frames per second <br>\n    noLoop -- Whether looping occurs automatically."
        },
        "parseAnimation": {
          "!type": "fn(animation: object, bones: []) -> +THREE.AnimationClip",
          "!doc": "Parses the animation.hierarchy format and returns an AnimationClip."
        }
      },
      "!doc": "An AnimationClip is a reusable set of Tracks that represent an animation.",
      "!type": "fn(name: string, duration: number, tracks)"
    },
    "AnimationMixer": {
      "!url": "http://threejs.org/docs/#Reference/animation/AnimationMixer",
      "prototype": {
        "time": "number",
        "timeScale": "number",
        "clipAction": {
          "!type": "fn(clip: +THREE.AnimationClip, optionalRoot: +THREE.Object3D) -> +THREE.AnimationAction",
          "!doc": "Return an action for a clip, optionally using a custom root target object."
        },
        "existingAction": {
          "!type": "fn(clip: +THREE.AnimationClip, optionalRoot: +THREE.Object3D) -> +THREE.AnimationAction",
          "!doc": "Return an existing action."
        },
        "stopAllAction": {
          "!type": "fn() -> +THREE.AnimationMixer",
          "!doc": "Deactivates all scheduled actions."
        },
        "update": {
          "!type": "fn(deltaTimeMS: number) -> +THREE.AnimationMixer",
          "!doc": "Updates the animation with deltaTimeMS."
        },
        "getRoot": {
          "!type": "fn() -> +THREE.Object3D",
          "!doc": "Return this mixer's root target object."
        },
        "uncacheClip": {
          "!type": "fn(clip: +THREE.AnimationClip)",
          "!doc": "Free all resources for a clip."
        },
        "uncacheRoot": {
          "!type": "fn(root: +THREE.Object3D)",
          "!doc": "Free all resources for a root target object."
        },
        "uncacheAction": {
          "!type": "fn(clip: +THREE.AnimationClip, optionalRoot: +THREE.Object3D)",
          "!doc": "Free all resources for an action."
        }
      },
      "!doc": "The AnimationMixer is a player for AnimationClip objects.",
      "!type": "fn(root: +THREE.Object3D)"
    },
    "AnimationObjectGroup": {
      "!url": "http://threejs.org/docs/#Reference/animation/AnimationObjectGroup",
      "prototype": {
        "stats": "object",
        "timeScale": "number"
      },
      "!doc": "A group of objects that receives a shared animation state."
    },
    "AnimationUtils": {
      "!url": "http://threejs.org/docs/#Reference/animation/AnimationUtils",
      "prototype": {
        "arraySlice": {
          "!type": "fn(array, from, to) -> []",
          "!doc": "This is the same as  Array.prototype.slice, but also works on typed arrays."
        },
        "convertArray": {
          "!type": "fn(array, type, forceClone) -> []",
          "!doc": "Convert an array to a specific type."
        },
        "isTypedArray": {
          "!type": "fn(object) -> bool",
          "!doc": "Return *true* if the object is a typed array."
        },
        "getKeyframeOrder": {
          "!type": "fn(times) -> []",
          "!doc": "Returns an array by which times and values can be sorted."
        },
        "sortedArray": {
          "!type": "fn(values, stride, order) -> []",
          "!doc": "Sort the array previously returned by [page:AnimationUtils.getKeyframeOrder getKeyframeOrder]."
        },
        "flattenJSON": {
          "!type": "fn(jsonKeys, times, values, valuePropertyName) -> []",
          "!doc": "Used for parsing AOS keyframe formats"
        }
      },
      "!doc": "An object with various functions to assist with animations."
    },
    "KeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/KeyframeTrack",
      "prototype": {
        "name": {
          "!type": "string",
          "!doc": "The name given to the KeyframeTrack in the constructor."
        },
        "times": {
          "!type": "Float32Array",
          "!doc": "[link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array Float32Array]\n    of keyframe times."
        },
        "values": {
          "!type": "Float32Array",
          "!doc": "[link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array Float32Array]\n    of keyframe values, corresponding to the [page:KeyframeTrack.times times]."
        },
        "DefaultInterpolation": {
          "!type": "Constant",
          "!doc": "The default tnterpolation type to use, [page:Animation InterpolateLinear]."
        },
        "createInterpolant ": {
          "!type": "fn()",
          "!doc": "Create a [page:LinearInterpolant LinearInterpolant], [page:CubicInterpolant CubicInterpolant]\n      or [page:DiscreteInterpolant DiscreteInterpolant], depending on the value of the interpolation parameter\n      passed in the constructor."
        },
        "getInterpolation ": {
          "!type": "fn()",
          "!doc": "Get the interpolation type."
        },
        "getValueSize ": {
          "!type": "fn() -> number",
          "!doc": "The the size of each value (length of the values array divied by length of times array)."
        },
        "InterpolantFactoryMethodDiscrete ": {
          "!type": "fn(result) -> +THREE.DiscreteInterpolant",
          "!doc": "Create a new [page:DiscreteInterpolant DiscreteInterpolant] from the [page:KeyframeTrack.times times]\n      and [page:KeyframeTrack.times values]."
        },
        "InterpolantFactoryMethodLinear ": {
          "!type": "fn()",
          "!doc": "Create a new [page:LinearInterpolant LinearInterpolant] from the [page:KeyframeTrack.times times]\n      and [page:KeyframeTrack.times values]."
        },
        "InterpolantFactoryMethodSmooth ": {
          "!type": "fn()",
          "!doc": "Create a new [page:CubicInterpolant CubicInterpolant] from the [page:KeyframeTrack.times times]\n      and [page:KeyframeTrack.times values]."
        },
        "optimize ": {
          "!type": "fn()",
          "!doc": "Remove equivalent sequential keys, which are common in morph target sequences. <br>\n  \t  Called automatically by the constructor."
        },
        "parse": {
          "!type": "fn(json: JSON) -> +THREE.KeyframeTrack",
          "!doc": "Parse json and return new keyframe track of the correct type."
        },
        "scale ": {
          "!type": "fn()",
          "!doc": "Scale all keyframe times by a factor (useful for frame &lt;-&gt; seconds conversions)."
        },
        "setInterpolation ": {
          "!type": "fn(interpolation: Constant)",
          "!doc": "Set the interpolation type. See [page:Animation animation constants] for choices."
        },
        "shift ": {
          "!type": "fn(timeOffset: number)",
          "!doc": "Move all keyframes either forwards or backwards in time."
        },
        "TimeBufferType ": {
          "!type": "fn()",
          "!doc": "[link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array Float32Array],\n      used to convert the times array passed in the constructor to a Float32Array."
        },
        "toJSON": {
          "!type": "fn(track: +THREE.KeyframeTrack) -> JSON",
          "!doc": "Convert the track to JSON."
        },
        "trim ": {
          "!type": "fn(startTime: number, endTime: number)",
          "!doc": "Removes keyframes before [page:Number startTime] and after [page:Number endTime]\n      without changing any values within the range [[page:Number startTime], [page:Number endTime]]."
        },
        "validate ": {
          "!type": "fn()",
          "!doc": "Perform minimal validation on the tracks. Called automatically by the constructor."
        },
        "ValueBufferType ": {
          "!type": "fn()",
          "!doc": "[link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array Float32Array],\n      used to convert the values array passed in the constructor to a Float32Array."
        }
      },
      "!doc": "A timed sequence of [link:https://en.wikipedia.org/wiki/Key_frame keyframes] for animating\n    a specific property of an object.",
      "!type": "fn(name: string, times: [], values: [], interpolation: Constant)"
    },
    "PropertyBinding": {
      "!url": "http://threejs.org/docs/#Reference/animation/PropertyBinding",
      "prototype": {
        "path": "number",
        "parsedPath": "number",
        "node": "number",
        "rootNode": "number",
        "BindingType": "object",
        "Versioning": "object",
        "GetterByBindingType": "[]",
        "SetterByBindingTypeAndVersioning": "[]",
        "getValue": "fn(targetArray: [], offset: number)",
        "setValue": "fn(sourceArray: [], offset: number)",
        "bind": {
          "!type": "fn()",
          "!doc": "Create getter / setter pair for a property in the scene graph. Used internally by\n      [page:PropertyBinding.getValue getValue] and [page:PropertyBinding.setValue setValue]."
        },
        "unbind": {
          "!type": "fn()",
          "!doc": "Unbind getter / setter pair for a property in the scene graph."
        },
        "Composite": {
          "!type": "fn(targetGroup, path, optionalParsedPath) -> Constructor",
          "!doc": "Create a new Composite PropertyBinding."
        },
        "create": {
          "!type": "fn(root, path, parsedPath) -> Constructor",
          "!doc": "Create a new Composite PropertyBinding (if root is an [page:AnimationObjectGroup]) or PropertyBinding."
        },
        "parseTrackName": {
          "!type": "fn(trackName) -> Constructor",
          "!doc": "Matches strings in the following forms:<br>\n      -- nodeName.property<br>\n      -- nodeName.property[accessor]<br>\n      -- nodeName.material.property[accessor]<br>\n      -- uuid.property[accessor]<br>\n      -- uuid.objectName[objectIndex].propertyName[propertyIndex]<br>\n      -- parentName/nodeName.property<br>\n      -- parentName/parentName/nodeName.property[index]<br>\n      -- .bone[Armature.DEF_cog].position<br>\n      -- scene:helium_balloon_model:helium_balloon_model.position"
        },
        "findNode": {
          "!type": "fn(root, nodeName) -> Constructor",
          "!doc": "Find a node in a node tree or [page:Skeleton Skeleton]."
        }
      },
      "!doc": "This holds a reference to a real property in the scene graph.",
      "!type": "fn(rootNode: +THREE.Object3D, path, parsedPath)"
    },
    "PropertyMixer": {
      "!url": "http://threejs.org/docs/#Reference/animation/PropertyMixer",
      "prototype": {
        "binding": "number",
        "buffer": {
          "!type": "number",
          "!doc": "Buffer with size [page:PropertyMixer valueSize] * 4. <br><br>\n      This has the layout: [ incoming | accu0 | accu1 | orig ]<br><br>\n      Interpolators can use .buffer as their .result and the data then goes to 'incoming'.<br>\n      'accu0' and 'accu1' are used frame-interleaved for the cumulative result and\n      are compared to detect changes.<br>\n      'orig' stores the original state of the property.<br>"
        },
        "cumulativeWeight": {
          "!type": "number",
          "!doc": "Default is *0*."
        },
        "valueSize": "number",
        "referenceCount": {
          "!type": "number",
          "!doc": "Default is *0*."
        },
        "useCount": {
          "!type": "number",
          "!doc": "Default is *0*."
        },
        "accumulate": {
          "!type": "fn(accuIndex, weight)",
          "!doc": "Accumulate data in [page:PropertyMixer.buffer buffer][accuIndex] 'incoming' region into 'accu[i]'.<br>\n\n      If weight is *0* this does nothing."
        },
        "apply": {
          "!type": "fn(accuIndex)",
          "!doc": "Apply the state of [page:PropertyMixer.buffer buffer] 'accu[i]' to the binding when accus differ."
        },
        "saveOriginalState": {
          "!type": "fn()",
          "!doc": "Remember the state of the bound property and copy it to both accus."
        },
        "restoreOriginalState": {
          "!type": "fn()",
          "!doc": "Apply the state previously taken via 'saveOriginalState' to the binding."
        }
      },
      "!doc": "Buffered scene graph property that allows weighted accumulation.",
      "!type": "fn(binding, typeName, valueSize)"
    },
    "BooleanKeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/tracks/BooleanKeyframeTrack",
      "prototype": {
        "!proto": "THREE.KeyframeTrack.prototype",
        "ValueTypeName": {
          "!type": "string",
          "!doc": "String 'bool'."
        },
        "DefaultInterpolation": {
          "!type": "Constant",
          "!doc": "The default interpolation type to use, [page:Animation InterpolateDiscrete]."
        },
        "InterpolantFactoryMethodLinear ": {
          "!type": "fn()",
          "!doc": "The value of this method here is 'undefined', as it does not make sense for discrete properties."
        },
        "InterpolantFactoryMethodSmooth ": {
          "!type": "fn()",
          "!doc": "The value of this method here is 'undefined', as it does not make sense for discrete properties."
        },
        "ValueBufferType ": {
          "!type": "fn()",
          "!doc": "Used to convert the values array passed in the constructor to an Array.\n\t\t\tNote: In this case this does nothing, other Track types may convert the array to a Typed Array."
        }
      },
      "!doc": "A Track of Boolean keyframe values.",
      "!type": "fn(name: string, times: [], values: [])"
    },
    "ColorKeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/tracks/ColorKeyframeTrack",
      "prototype": {
        "!proto": "THREE.KeyframeTrack.prototype",
        "ValueTypeName": {
          "!type": "string",
          "!doc": "String 'color'."
        }
      },
      "!doc": "A Track of keyframe values that represent color.",
      "!type": "fn(name: string, times: [], values: [])"
    },
    "NumberKeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/tracks/NumberKeyframeTrack",
      "prototype": {
        "!proto": "THREE.KeyframeTrack.prototype",
        "ValueTypeName": {
          "!type": "string",
          "!doc": "String 'number'."
        }
      },
      "!doc": "A Track of numeric keyframe values.",
      "!type": "fn(name: string, times: [], values: [])"
    },
    "QuaternionKeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/tracks/QuaternionKeyframeTrack",
      "prototype": {
        "!proto": "THREE.KeyframeTrack.prototype",
        "ValueTypeName": {
          "!type": "string",
          "!doc": "String 'quaternion'."
        },
        "DefaultInterpolation": {
          "!type": "Constant",
          "!doc": "The default interpolation type to use, [page:Animation InterpolateLinear]."
        },
        "getValueSize ": {
          "!type": "fn() -> number",
          "!doc": "The the size of each value (length of the values array divied by length of times array)."
        },
        "InterpolantFactoryMethodLinear ": {
          "!type": "fn()",
          "!doc": "Returns a new [page:QuaternionLinearInterpolant QuaternionLinearInterpolant] based on the [page:KeyframeTrack.values values],\n\t\t\t[page:KeyframeTrack.times times] and [page:KeyframeTrack.valueSize valueSize] of the keyframes."
        }
      },
      "!doc": "A Track of quaternion keyframe values.",
      "!type": "fn(name: string, times: [], values: [])"
    },
    "StringKeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/tracks/StringKeyframeTrack",
      "prototype": {
        "!proto": "THREE.KeyframeTrack.prototype",
        "ValueTypeName": {
          "!type": "string",
          "!doc": "String 'string'."
        },
        "DefaultInterpolation": {
          "!type": "Constant",
          "!doc": "The default interpolation type to use, [page:Animation InterpolateDiscrete]."
        },
        "InterpolantFactoryMethodLinear ": {
          "!type": "fn()",
          "!doc": "The value of this method here is 'undefined', as it does not make sense for discrete properties."
        },
        "InterpolantFactoryMethodSmooth ": {
          "!type": "fn()",
          "!doc": "The value of this method here is 'undefined', as it does not make sense for discrete properties."
        },
        "ValueBufferType ": {
          "!type": "fn()",
          "!doc": "Used to convert the values array passed in the constructor to an Array.\n\t\t\tNote: In this case this does nothing, other Track types may convert the array to a Typed Array."
        }
      },
      "!doc": "A Track of String keyframe values.",
      "!type": "fn(name: string, times: [], values: [])"
    },
    "VectorKeyframeTrack": {
      "!url": "http://threejs.org/docs/#Reference/animation/tracks/VectorKeyframeTrack",
      "prototype": {
        "!proto": "THREE.KeyframeTrack.prototype",
        "ValueTypeName": {
          "!type": "string",
          "!doc": "String 'vector'."
        }
      },
      "!doc": "A Track of Vector keyframe values.",
      "!type": "fn(name: string, times: [], values: [])"
    },
    "Audio": {
      "!url": "http://threejs.org/docs/#Reference/audio/Audio",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "autoplay": {
          "!type": "bool",
          "!doc": "Whether to start playback automatically. Default is *false*."
        },
        "context": {
          "!type": "+THREE.AudioContext",
          "!doc": "The [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext AudioContext] of the [page:AudioListener listener] given in the constructor."
        },
        "filters": {
          "!type": "[]",
          "!doc": "Whether the audio is currently playing. Default is empty array."
        },
        "gain": {
          "!type": "GainNode",
          "!doc": "A [link:https://developer.mozilla.org/en-US/docs/Web/API/GainNode GainNode] created\n\t\tusing [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain AudioContext.createGain]()."
        },
        "hasPlaybackControl": {
          "!type": "bool",
          "!doc": "Whether playback can be controlled using the [page:Audio.play play](),\n\t\t\t[page:Audio.pause pause]() etc. methods. Default is *true*."
        },
        "playbackRate": {
          "!type": "number",
          "!doc": "Speed of playback. Default is *1*."
        },
        "isPlaying": {
          "!type": "bool",
          "!doc": "Whether the audio is currently playing."
        },
        "startTime": {
          "!type": "number",
          "!doc": "Point at which to start playback. Default is *0*."
        },
        "source": {
          "!type": "string",
          "!doc": "An [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode AudioBufferSourceNode] created\n\t\tusing [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBufferSource AudioContext.createBufferSource]()."
        },
        "sourceType": {
          "!type": "string",
          "!doc": "Type of the audio source. Default is string 'empty'."
        },
        "type": {
          "!type": "string",
          "!doc": "String denoting the type, set to 'Audio'."
        },
        "connect": {
          "!type": "fn()",
          "!doc": "Connect to the [page:Audio.source]. This is used internally on initialisation and when\n\t\tsetting / removing filters."
        },
        "disconnect": {
          "!type": "fn()",
          "!doc": "Disconnect from the [page:Audio.source]. This is used internally when\n\t\tsetting / removing filters."
        },
        "getFilter": {
          "!type": "fn() -> []",
          "!doc": "Returns the first element of the [page:Audio.filters filters] array."
        },
        "getFilters": {
          "!type": "fn()",
          "!doc": "Returns the [page:Audio.filters filters] array."
        },
        "getLoop": {
          "!type": "fn() -> bool",
          "!doc": "Return the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop source.loop]\n\t\t (whether playback should loop)."
        },
        "getOutput": {
          "!type": "fn() -> GainNode",
          "!doc": "Return the [page:Audio.gain gainNode]."
        },
        "getPlaybackRate": {
          "!type": "fn() -> number",
          "!doc": "Return the value of [page:Audio.playbackRate playbackRate]."
        },
        "getVolume": {
          "!type": "fn(value) -> number",
          "!doc": "Return the current volume."
        },
        "play": {
          "!type": "fn()",
          "!doc": "If [page:Audio.hasPlaybackControl hasPlaybackControl] is true, starts playback."
        },
        "pause": {
          "!type": "fn()",
          "!doc": "If [page:Audio.hasPlaybackControl hasPlaybackControl] is true, pauses playback."
        },
        "onEnded": {
          "!type": "fn()",
          "!doc": "Called automatically when playback finished. Sets If [page:Audio.isPlaying isPlaying] to false."
        },
        "setBuffer": {
          "!type": "fn(audioBuffer) -> +THREE.Audio",
          "!doc": "Setup the [page:Audio.source source] to the audioBuffer, and sets [page:Audio.sourceType sourceType] to 'buffer'.<br>\n\t\tIf [page:Audio.autoplay autoplay], also starts playback."
        },
        "setFilter": {
          "!type": "fn(filter)",
          "!doc": "Add the filter to the [page:Audio.filters filters] array."
        },
        "setFilters": {
          "!type": "fn(value: []) -> +THREE.Audio",
          "!doc": "value - arrays of filters.<br>\n\t\tSet the [page:Audio.filters filters] array to *value*."
        },
        "setLoop": {
          "!type": "fn(value: bool)",
          "!doc": "Set [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop source.loop] to *value*\n\t\t(whether playback should loop)."
        },
        "setNodeSource": {
          "!type": "fn(audioNode)",
          "!doc": "Setup the [page:Audio.source source] to the audioBuffer, and sets [page:Audio.sourceType sourceType] to 'audioNode'.<br>\n\t\tAlso sets [page:Audio.hasPlaybackControl hasPlaybackControl] to false."
        },
        "setPlaybackRate": {
          "!type": "fn(value: number)",
          "!doc": "If [page:Audio.hasPlaybackControl hasPlaybackControl] is enabled, set the [page:Audio.playbackRate playbackRate] to *value*."
        },
        "setVolume": {
          "!type": "fn(value: number)",
          "!doc": "Set the volume."
        },
        "stop": {
          "!type": "fn()",
          "!doc": "If [page:Audio.hasPlaybackControl hasPlaybackControl] is enabled, stops playback,\n\t\tresets [page:Audio.startTime startTime] to *0* and sets [page:Audio.isPlaying isPlaying] to false."
        }
      },
      "!doc": "Create a non-positional ( global ) audio object.<br><br>\n\n\t\t\tThis uses the [link:https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Web Audio API].",
      "!type": "fn(listener: +THREE.AudioListener)"
    },
    "AudioAnalyser": {
      "!url": "http://threejs.org/docs/#Reference/audio/AudioAnalyser",
      "prototype": {
        "analyser": {
          "!type": "AnalyserNode",
          "!doc": "An [link:https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode AnalyserNode] used to analyze audio."
        },
        "fftSize": {
          "!type": "number",
          "!doc": "A non-zero power of two up to 2048, representing the size of the FFT (Fast Fourier Transform) to be used to determine the frequency domain.<br>\n\t\tSee [link:https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize this page] for details."
        },
        "data": {
          "!type": "Uint8Array",
          "!doc": "A Uint8Array with size determined by [link:https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount analyser.frequencyBinCount]\n\t\tused to hold analysis data."
        },
        "getFrequencyData": {
          "!type": "fn() -> Uint8Array",
          "!doc": "Uses the Web Audio's [link:https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData getByteFrequencyData] method.\n\t\tSee that page."
        },
        "getAverageFrequency": {
          "!type": "fn() -> number",
          "!doc": "Get the average of the frequencies returned by the [page:AudioAnalyser.getFrequencyData getFrequencyData] method."
        }
      },
      "!doc": "Create a AudioAnalyser object, which uses an [link:https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode AnalyserNode]\n\t\t\tto analyse audio data.<br><br>\n\n\t\t\tThis uses the [link:https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Web Audio API]."
    },
    "AudioContext": {
      "!url": "http://threejs.org/docs/#Reference/audio/AudioContext",
      "prototype": {
        "getContext": {
          "!type": "fn() -> +THREE.AudioContext",
          "!doc": "Return the value of the variable *context* in the outer scope, if defined,\n\t\totherwise set it to a new [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext AudioContext]."
        },
        "setContext": {
          "!type": "fn(value: AudioConetxt) -> +THREE.AudioContext",
          "!doc": "Set the variable *context* in the outer scope to *value*."
        }
      },
      "!doc": "This contains methods for setting up an [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext AudioContext].<br><br>\n\n\t\tUsed internally by the [page:AudioListener AudioListener] and [page:AudioLoader AudioLoader] classes.<br><br>\n\n\t\tThis uses the [link:https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Web Audio API]."
    },
    "AudioListener": {
      "!url": "http://threejs.org/docs/#Reference/audio/AudioListener",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "context": {
          "!type": "+THREE.AudioContext",
          "!doc": "The [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext AudioContext] of the [page:AudioListener listener] given in the constructor."
        },
        "gain": {
          "!type": "GainNode",
          "!doc": "A [link:https://developer.mozilla.org/en-US/docs/Web/API/GainNode GainNode] created\n\t\tusing [link:https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain AudioContext.createGain]()."
        },
        "filter": {
          "!type": "AudioNode",
          "!doc": "Default is *null*."
        },
        "getInput": {
          "!type": "fn() -> GainNode",
          "!doc": "Return the [page:AudioListener.gain gainNode]."
        },
        "removeFilter": {
          "!type": "fn()",
          "!doc": "Set the [page:AudioListener.filter filter] property to *null*."
        },
        "getFilter": {
          "!type": "fn() -> AudioNode",
          "!doc": "Returns the value of the [page:AudioListener.filter filter] property."
        },
        "setFilter": {
          "!type": "fn(value: AudioNode)",
          "!doc": "Set the [page:AudioListener.filter filter] property to *value*."
        },
        "getMasterVolume": {
          "!type": "fn(value: number)",
          "!doc": "Set the volume."
        }
      },
      "!doc": "Create a non-positional ( global ) audio object.<br><br>\n\n\t\t\tThis uses the [link:https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Web Audio API].",
      "!type": "fn()"
    },
    "PositionalAudio": {
      "!url": "http://threejs.org/docs/#Reference/audio/PositionalAudio",
      "prototype": {
        "!proto": "THREE.Audio.prototype",
        "panner": {
          "!type": "PannerNode",
          "!doc": "The PositionalAudio's [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode PannerNode]."
        },
        "getOutput": {
          "!type": "fn() -> PannerNode",
          "!doc": "Returns the [page:PositionalAudio.panner panner]."
        },
        "getRefDistance": {
          "!type": "fn() -> number",
          "!doc": "Returns the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance panner.refDistance]."
        },
        "setRefDistance": {
          "!type": "fn(value: number) -> PannerNode",
          "!doc": "Sets the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance panner.refDistance]."
        },
        "getRolloffFactor": {
          "!type": "fn() -> PannerNode",
          "!doc": "Returns the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor panner.rolloffFactor]."
        },
        "setRolloffFactor": {
          "!type": "fn(value: number) -> PannerNode",
          "!doc": "Sets the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor panner.rolloffFactor]."
        },
        "getDistanceModel": {
          "!type": "fn() -> string",
          "!doc": "Returns the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel panner.distanceModel]."
        },
        "setDistanceModel": {
          "!type": "fn(value: string) -> string",
          "!doc": "Sets the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel panner.distanceModel]."
        },
        "getMaxDistance": {
          "!type": "fn() -> PannerNode",
          "!doc": "Returns the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance panner.distanceModel]."
        },
        "setMaxDistance": {
          "!type": "fn(value: number) -> PannerNode",
          "!doc": "Sets the value of [link:https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance panner.distanceModel]."
        }
      },
      "!doc": "Create a positional audio object.<br><br>\n\n\t\t\tThis uses the [link:https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Web Audio API].",
      "!type": "fn(listener: +THREE.AudioListener)"
    },
    "Camera": {
      "!url": "http://threejs.org/docs/#Reference/cameras/Camera",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "isCamera": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are cameras. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally by the renderer for optimisation."
        },
        "layers": {
          "!type": "+THREE.Layers",
          "!doc": "The [page:Layers layers] that the camera is a member of. This is an inherited\n\t\tproperty from [page:Object3D].<br><br>\n\n\t\tObjects must share at least one layer with the camera to be seen\n\t\twhen the camera's viewpoint is rendered."
        },
        "matrixWorldInverse": {
          "!type": "+THREE.Matrix4",
          "!doc": "This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has\n\t\t\tthe world transform of the Camera."
        },
        "projectionMatrix": {
          "!type": "+THREE.Matrix4",
          "!doc": "This is the matrix which contains the projection."
        },
        "clone": {
          "!type": "fn() -> +THREE.Camera",
          "!doc": "Return a new camera with the same properties as this one."
        },
        "copy": {
          "!type": "fn(source: +THREE.Camera) -> +THREE.Camera",
          "!doc": "Copy the properties from the source camera into this one."
        },
        "getWorldDirection": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Returns a vector representing the direction in which the camera is looking,\n\t\tin world space. If the [page:Vector3 optionalTarget] is set, returns a vector representing the direction\n\t\tfrom the camera's position to the [page:Vector3 optionalTarget]."
        },
        "lookAt": {
          "!type": "fn(target: +THREE.Vector3)",
          "!doc": "target — position in 3D space for the camera to point towards<br><br>\n\n\t\tThis makes the camera look at the vector position in the global space as long as\n\t\tthe parent of this camera is the scene or at position (0,0,0)."
        }
      },
      "!doc": "Abstract base class for cameras. This class should always be inherited when you build a new camera.",
      "!type": "fn()"
    },
    "CubeCamera": {
      "!url": "http://threejs.org/docs/#Reference/cameras/CubeCamera",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "renderTarget": {
          "!type": "+THREE.WebGLRenderTargetCube",
          "!doc": "The cube texture that gets generated."
        },
        "updateCubeMap": {
          "!type": "fn(renderer: +THREE.WebGLRenderer, scene: +THREE.Scene)",
          "!doc": "Call this to update the [page:CubeCamera.renderTarget renderTarget]."
        }
      },
      "!doc": "Creates 6 cameras that render to a [page:WebGLRenderTargetCube].",
      "!type": "fn(near: number, far: number, cubeResolution: number)"
    },
    "OrthographicCamera": {
      "!url": "http://threejs.org/docs/#Reference/cameras/OrthographicCamera",
      "prototype": {
        "!proto": "THREE.Camera.prototype",
        "bottom": {
          "!type": "number",
          "!doc": "Camera frustum bottom plane."
        },
        "far": {
          "!type": "number",
          "!doc": "Camera frustum far plane. Default is *2000*.<br><br>\n\n\t\tThe valid range is between the current value of the [page:.near near] plane and infinity."
        },
        "isOrthographicCamera": {
          "!type": "bool",
          "!doc": "Used to test whether this or derived classes are OrthographicCameras. Default is *true*.<br><br>\n\n\t\t\tThis should not be changed as it is used internally by the renderer for optimisation."
        },
        "left": {
          "!type": "number",
          "!doc": "Camera frustum left plane."
        },
        "near": {
          "!type": "number",
          "!doc": "Camera frustum near plane. Default is *0.1*.<br><br>\n\n\t\t\tThe valid range is between 0 and the current value of the [page:.far far] plane.\n\t\t\tNote that, unlike for the [page:PerspectiveCamera], *0* is a valid value for an\n\t\t\tOrthographicCamera's near plane."
        },
        "right": {
          "!type": "number",
          "!doc": "Camera frustum right plane."
        },
        "top": {
          "!type": "number",
          "!doc": "Camera frustum top plane."
        },
        "view": {
          "!type": "object",
          "!doc": "Set by [page:OrthographicCamera.setViewOffset setViewOffset]. Default is *null*."
        },
        "zoom": {
          "!type": "number",
          "!doc": "Gets or sets the zoom factor of the camera. Default is *1*."
        },
        "setViewOffset": {
          "!type": "fn(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number)",
          "!doc": "fullWidth — full width of multiview setup<br>\n\t\tfullHeight — full height of multiview setup<br>\n\t\tx — horizontal offset of subcamera<br>\n\t\ty — vertical offset of subcamera<br>\n\t\twidth — width of subcamera<br>\n\t\theight — height of subcamera<br><br>\n\n\t\t\tSets an offset in a larger [link:https://en.wikipedia.org/wiki/Viewing_frustum viewing frustum].\n\t\t\tThis is useful for multi-window or multi-monitor/multi-machine setups.\n\t\t\tFor an example on how to use it see [page:PerspectiveCamera.setViewOffset PerspectiveCamera]."
        },
        "clearViewOffset": {
          "!type": "fn()",
          "!doc": "Removes any offset set by the .setViewOffset method."
        },
        "updateProjectionMatrix": {
          "!type": "fn()",
          "!doc": "Updates the camera projection matrix. Must be called after any change of parameters."
        },
        "toJSON": {
          "!type": "fn() -> JSON",
          "!doc": "Return the camera's data in JSON format."
        }
      },
      "!doc": "Camera that uses [link:https://en.wikipedia.org/wiki/Orthographic_projection orthographic projection].<br><br>\n\n\t\t\tIn this projection mode, an object's size in the rendered image stays constant\n\t\t\tregardless of its distance from the camera.<br><br>\n\n\t\t\tThis can be useful for rendering 2D scenes and UI elements, amongst other things.",
      "!type": "fn(left: number, right: number, top: number, bottom: number, near: number, far: number)"
    },
    "PerspectiveCamera": {
      "!url": "http://threejs.org/docs/#Reference/cameras/PerspectiveCamera",
      "prototype": {
        "!proto": "THREE.Camera.prototype",
        "aspect": {
          "!type": "number",
          "!doc": "Camera frustum aspect ratio, usually the canvas width / canvas height. Default is *1* (square canvas)."
        },
        "far": {
          "!type": "number",
          "!doc": "Camera frustum far plane. Default is *2000*.<br><br>\n\n\t\t\tThe valid range is between the current value of the [page:.near near] plane and infinity."
        },
        "filmGauge": {
          "!type": "number",
          "!doc": "Film size used for the larger axis. Default is 35 (millimeters). This parameter does not influence the projection matrix unless .filmOffset is set to a nonzero value."
        },
        "filmOffset": {
          "!type": "number",
          "!doc": "Horizontal off-center offset in the same unit as .filmGauge. Default is *0*."
        },
        "focus": {
          "!type": "number",
          "!doc": "Object distance used for stereoscopy and depth-of-field effects.\n\t\t\tThis parameter does not influence the projection matrix unless a [page:StereoCamera] is being used.\n\t\t\tDefault is *10*."
        },
        "fov": {
          "!type": "number",
          "!doc": "Camera frustum vertical field of view, from bottom to top of view, in degrees. Default is *50*."
        },
        "isPerspectiveCamera": {
          "!type": "bool",
          "!doc": "Used to test whether this or derived classes are PerspectiveCameras. Default is *true*.<br><br>\n\n\t\t\tThis should not be changed as it is used internally by the renderer for optimisation."
        },
        "near": {
          "!type": "number",
          "!doc": "Camera frustum near plane. Default is *0.1*.<br><br>\n\n\t\t\tThe valid range is greater than 0 and less than the current value of the [page:.far far] plane.\n\t\t\tNote that, unlike for the [page:OrthographicCamera], *0* is <em>not</em> a valid value\n\t\t\tfor a PerspectiveCamera's near plane."
        },
        "view": {
          "!type": "object",
          "!doc": "Frustum window specification or null.\n\t\t\tThis is set using the [page:PerspectiveCamera.setViewOffset .setViewOffset] method\n\t\t\tand cleared using [page:PerspectiveCamera.clearViewOffset .clearViewOffset]."
        },
        "zoom": {
          "!type": "number",
          "!doc": "Gets or sets the zoom factor of the camera. Default is *1*."
        },
        "clearViewOffset": {
          "!type": "fn()",
          "!doc": "Removes any offset set by the [page:PerspectiveCamera.setViewOffset .setViewOffset] method."
        },
        "getEffectiveFOV": {
          "!type": "fn() -> number",
          "!doc": "Returns the current vertical field of view angle in degrees considering .zoom."
        },
        "getFilmHeight": {
          "!type": "fn() -> number",
          "!doc": "Returns the height of the image on the film. If .aspect is less than or equal to one\n\t\t(portrait format), the result equals .filmGauge."
        },
        "getFilmWidth": {
          "!type": "fn() -> number",
          "!doc": "Returns the width of the image on the film. If .aspect is greater than or equal to one\n\t\t(landscape format), the result equals .filmGauge."
        },
        "getFocalLength": {
          "!type": "fn() -> number",
          "!doc": "Returns the focal length of the current .fov in respect to .filmGauge."
        },
        "setFocalLength": {
          "!type": "fn(focalLength: number)",
          "!doc": "Sets the FOV by focal length in respect to the current [page:PerspectiveCamera.filmGauge .filmGauge].<br><br>\n\n\t\tBy default, the focal length is specified for a 35mm (full frame) camera."
        },
        "setViewOffset": {
          "!type": "fn(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number)",
          "!doc": "For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:<br>\n\n\t\t<pre>+---+---+---+\n| A | B | C |\n+---+---+---+\n| D | E | F |\n+---+---+---+\n\t\t</pre>\n\n\t\tthen for each monitor you would call it like this:<br>\n\n\t\t<code>var w = 1920;\nvar h = 1080;\nvar fullWidth = w * 3;\nvar fullHeight = h * 2;\n\n// A\ncamera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );\n// B\ncamera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );\n// C\ncamera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );\n// D\ncamera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );\n// E\ncamera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );\n// F\ncamera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );\n</code>\n\n\t\tNote there is no reason monitors have to be the same size or in a grid."
        },
        "updateProjectionMatrix": {
          "!type": "fn()",
          "!doc": "Updates the camera projection matrix. Must be called after any change of parameters."
        },
        "toJSON": {
          "!type": "fn() -> JSON",
          "!doc": "Return camera data in JSON format."
        }
      },
      "!doc": "Camera that uses [link:https://en.wikipedia.org/wiki/Perspective_(graphical) perspective projection].<br><br>\n\n\t\t\tThis projection mode is designed to mimic the way the human eye sees. It is the most\n\t\t\tcommon projection mode used for rendering a 3D scene.",
      "!type": "fn(fov: number, aspect: number, near: number, far: number)"
    },
    "StereoCamera": {
      "!url": "http://threejs.org/docs/#Reference/cameras/StereoCamera",
      "prototype": {
        "aspect": {
          "!type": "number",
          "!doc": "Default is *1*."
        },
        "eyeSep": {
          "!type": "number",
          "!doc": "Default is *0.064*."
        },
        "cameraL": {
          "!type": "+THREE.PerspectiveCamera",
          "!doc": "Left camera. This is added to [page:Layers layer 1] - objects to be rendered\n\t\tby the left camera must also be added to this layer."
        },
        "cameraR": {
          "!type": "+THREE.PerspectiveCamera",
          "!doc": "Right camera.This is added to [page:Layers layer 2] - objects to be rendered\n\t\tby the left camera must also be added to this layer."
        },
        "update": {
          "!type": "fn(camera)",
          "!doc": "Update the stereo cameras based on the camera passed in."
        }
      },
      "!doc": "Dual [page:PerspectiveCamera PerspectiveCamera]s used for effects such as\n\t\t[link:https://en.wikipedia.org/wiki/Anaglyph_3D 3D Anaglyph] or [link:https://en.wikipedia.org/wiki/parallax_barrier Parallax Barrier].",
      "!type": "fn()"
    },
    "Animation": {
      "!url": "http://threejs.org/docs/#Reference/constants/Animation",
      "prototype": {}
    },
    "Core": {
      "!url": "http://threejs.org/docs/#Reference/constants/Core",
      "prototype": {}
    },
    "CustomBlendingEquations": {
      "!url": "http://threejs.org/docs/#Reference/constants/CustomBlendingEquations",
      "prototype": {}
    },
    "DrawModes": {
      "!url": "http://threejs.org/docs/#Reference/constants/DrawModes",
      "prototype": {},
      "!doc": "These are valid values for [page:Mesh.drawMode], and control how the list of vertices is interpeted once sent to the GPU.<br><br>\n\n\t\t\tNote that these only work when [page:Mesh.geometry] is a [page:BufferGeometry]. Changing this\n\t\t\twhen [page:Mesh.geometry] is a [page:Geometry] will have no effect.<br><br>"
    },
    "Materials": {
      "!url": "http://threejs.org/docs/#Reference/constants/Materials",
      "prototype": {},
      "!doc": "These constants define properties common to all material types,\n\t\twith the exception of Texture Combine Operations which only apply to [page:MeshBasicMaterial.combine MeshBasicMaterial], [page:MeshLambertMaterial.combine MeshLambertMaterial] and [page:MeshPhongMaterial.combine MeshPhongMaterial].<br>"
    },
    "Renderer": {
      "!url": "http://threejs.org/docs/#Reference/constants/Renderer",
      "prototype": {}
    },
    "Textures": {
      "!url": "http://threejs.org/docs/#Reference/constants/Textures",
      "prototype": {}
    },
    "BufferAttribute": {
      "!url": "http://threejs.org/docs/#Reference/core/BufferAttribute",
      "prototype": {
        "array": {
          "!type": "TypedArray",
          "!doc": "The [page:TypedArray array] holding data stored in the buffer."
        },
        "count": {
          "!type": "number",
          "!doc": "Stores the [page:BufferAttribute.array array]'s length divided by the [page:BufferAttribute.itemSize itemSize].<br><br>\n\n\t\tIf the buffer is storing a 3-component vector (such as a position, normal, or color),\n\t\tthen this will count the number of such vectors stored."
        },
        "dynamic": {
          "!type": "bool",
          "!doc": "Whether the buffer is dynamic or not. Default is *false*.<br>\n\n\t\t\tIf false, the GPU is informed that contents of the buffer are likely to be used often and not change often.\n\t\t\tThis corresponds to the  [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData gl.STATIC_DRAW] flag.<br>\n\t\t\tif true, the GPU is informed that contents of the buffer are likely to be used often and change often.\n\t\t\tThis corresponds to the  [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData gl.DYNAMIC_DRAW] flag."
        },
        "isBufferAttribute": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are BufferAttributes. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "itemSize": {
          "!type": "number",
          "!doc": "The length of vectors that are being stored in the [page:BufferAttribute.array array]."
        },
        "needsUpdate": {
          "!type": "bool",
          "!doc": "Flag to indicate that this attribute has changed and should be re-sent to the GPU.\n\t\tSet this to true when you modify the value of the array.<br><br>\n\n\t\tSetting this to true also increments the [page:BufferAttribute.version version]."
        },
        "normalized": {
          "!type": "bool",
          "!doc": "Indicates how the underlying data in the buffer maps to the values in the GLSL shader code.\n\t\tSee the constructor above for details."
        },
        "onUploadCallback": {
          "!type": "function",
          "!doc": "A callback function that is executed after the Renderer has transfered the attribute array data to the GPU."
        },
        "updateRange": {
          "!type": "object",
          "!doc": "Object containing:<br>\n\t\t\t[page:Integer offset]: Default is *0*. Position at whcih to start update.<br>\n\t\t\t[page:Integer count]: Default is *-1*, which means don't use update ranges. <br><br>\n\n\t\t\tThis can be used to only update some components of stored vectors (for example, just the component\n\t\t\trelated to color)."
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this object instance.\n\t\tThis gets automatically assigned and this shouldn't be edited."
        },
        "version": {
          "!type": "number",
          "!doc": "A version number, incremented every time the [page:BufferAttribute.needsUpdate needsUpdate] property is set to true."
        },
        "clone": {
          "!type": "fn() -> +THREE.BufferAttribute",
          "!doc": "Return a copy of this bufferAttribute."
        },
        "copyArray": {
          "!type": "fn(array) -> +THREE.BufferAttribute",
          "!doc": "Copy the array given here (which can be a normal array or TypedArray) into\n\t\t\t[page:BufferAttribute.array array].<br><br>\n\n\t\t\tSee [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set TypedArray.set]\n\t\t\tfor notes on requirements if copying a TypedArray."
        },
        "copyColorsArray": {
          "!type": "fn(colors) -> +THREE.BufferAttribute",
          "!doc": "Copy an array representing RGB color values into [page:BufferAttribute.array array]."
        },
        "copyIndicesArray": {
          "!type": "fn(indices) -> +THREE.BufferAttribute",
          "!doc": "Copy an array representing [page:Face3] indices into [page:BufferAttribute.array array]."
        },
        "copyVector2sArray": {
          "!type": "fn(vectors) -> +THREE.BufferAttribute",
          "!doc": "Copy an array representing [page:Vector2]s into [page:BufferAttribute.array array]."
        },
        "copyVector3sArray": {
          "!type": "fn(vectors) -> +THREE.BufferAttribute",
          "!doc": "Copy an array representing [page:Vector3]s into [page:BufferAttribute.array array]."
        },
        "copyVector4sArray": {
          "!type": "fn(vectors) -> +THREE.BufferAttribute",
          "!doc": "Copy an array representing [page:Vector4]s into [page:BufferAttribute.array array]."
        },
        "getX": {
          "!type": "fn(index) -> number",
          "!doc": "Returns the x component of the vector at the given index."
        },
        "getY": {
          "!type": "fn(index) -> number",
          "!doc": "Returns the y component of the vector at the given index."
        },
        "getZ": {
          "!type": "fn(index) -> number",
          "!doc": "Returns the z component of the vector at the given index."
        },
        "getW": {
          "!type": "fn(index) -> number",
          "!doc": "Returns the w component of the vector at the given index."
        },
        "onUpload": {
          "!type": "fn(callback: function)",
          "!doc": "Sets the value of the onUploadCallback property.<br><br>\n\n\t\tIn the [example:webgl_buffergeometry WebGL / Buffergeometry] this is used to free memory\n\t\tafter the buffer has been\ttransfered to the GPU."
        },
        "setX": {
          "!type": "fn(index, x)",
          "!doc": "Sets the x component of the vector at the given index."
        },
        "setY": {
          "!type": "fn(index, y)",
          "!doc": "Sets the y component of the vector at the given index."
        },
        "setZ": {
          "!type": "fn(index, z)",
          "!doc": "Sets the z component of the vector at the given index."
        },
        "setW": {
          "!type": "fn(index, w)",
          "!doc": "Sets the w component of the vector at the given index."
        },
        "setXY": {
          "!type": "fn(index, x, y)",
          "!doc": "Sets the x and y components of the vector at the given index."
        },
        "setXYZ": {
          "!type": "fn(index, x, y, z)",
          "!doc": "Sets the x, y and z components of the vector at the given index."
        },
        "setXYZW": {
          "!type": "fn(index, x, y, z, w)",
          "!doc": "Sets the x, y, z and w components of the vector at the given index."
        }
      },
      "!doc": "This class stores data for an attribute (such as vertex positions, face indices, normals,\n\t\tcolors, UVs, and any custom attributes ) associated with a [page:BufferGeometry], which allows\n\t\tfor more efficient passing of data to the GPU. See that page for details and a usage example.<br><br>\n\n\t\tData is stored as vectors of any length (defined by [page:BufferAttribute.itemSize itemSize]),\n\t\tand in general in the methods outlined below if passing in an index, this is automatically\n\t\tmultiplied by the vector length.",
      "!type": "fn(array: TypedArray, itemSize: number, normalized: bool)"
    },
    "BufferAttributeTypes": {
      "!url": "http://threejs.org/docs/#Reference/core/bufferAttributeTypes/BufferAttributeTypes",
      "prototype": {
        "!proto": "THREE.BufferAttribute.prototype"
      },
      "!doc": "There are nine types of [page:BufferAttribute] available in three.js. These correspond to the JavaScript\n\t\t[link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax Typed Arrays]."
    },
    "BufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/core/BufferGeometry",
      "prototype": {
        "attributes": {
          "!type": "Hashmap",
          "!doc": "This hashmap has as id the name of the attribute to be set and as value the [page:BufferAttribute buffer] to set it to.\n\t\tRather than accessing this property directly, use addAttribute and getAttribute to access attributes of this geometry."
        },
        "boundingBox": {
          "!type": "+THREE.Box3",
          "!doc": "Bounding box for the bufferGeometry, which can be calculated with\n\t\t\t[page:.computeBoundingBox](). Default is *null*."
        },
        "boundingSphere": {
          "!type": "+THREE.Sphere",
          "!doc": "Bounding sphere for the bufferGeometry, which can be calculated with\n\t\t\t[page:.computeBoundingSphere](). Default is *null*."
        },
        "drawRange": {
          "!type": "object",
          "!doc": "Used to determine what part of the geometry should be rendered. This should not\n\t\t\tbe set directly, instead use [page:.setDrawRange].<br>\n\t\t\tDefault is\n\t\t\t<code>\n\t\t\t\t{ start: 0, count: Infinity }\n\t\t\t</code>"
        },
        "groups": {
          "!type": "[]",
          "!doc": "Split the geometry into groups, each of which will be rendered in a separate WebGL draw call.\n\t\t\tThis allows a [page:MultiMaterial] to be used with the bufferGeometry.<br><br>\n\n\t\t\tEach group is an object of the form:\n\t\t\t<code>{ start: Integer, count: Integer, materialIndex: Integer }</code>\n\t\t\twhere start specifies the index of the first vertex in this draw call, count specifies\n\t\t\thow many vertices are included, and materialIndex specifies the [page:MultiMaterial] index to use.<br><br>\n\n\t\t\tUse [page:.addGroup] to add groups, rather than modifying this array directly."
        },
        "id": {
          "!type": "number",
          "!doc": "Unique number for this bufferGeometry instance."
        },
        "index": {
          "!type": "+THREE.BufferAttribute",
          "!doc": "See \"Accessing Attributes\" section above for a description of this property.\n\t\t\tDefault is *null*."
        },
        "isBufferGeometry": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are BufferGeometries. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "MaxIndex": {
          "!type": "number",
          "!doc": "Maximum number of vertices allowed, set to *65535*."
        },
        "morphAttributes": {
          "!type": "object",
          "!doc": "Hashmap of [page:BufferAttribute]s holding details of the geometry's [page:Geometry.morphTargets morphTargets]."
        },
        "name": {
          "!type": "string",
          "!doc": "Optional name for this bufferGeometry instance. Default is an empty string."
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this object instance.\n\t\tThis gets automatically assigned and shouldn't be edited."
        },
        "addAttribute": {
          "!type": "null",
          "!doc": "Adds an attribute to this geometry. Use this rather than the attributes property,\n\t\tbecause an internal hashmap of [page:.attributes] is maintained to speed up iterating over\n\t\tattributes."
        },
        "addGroup": {
          "!type": "fn(start: number, count: number, materialIndex: number)",
          "!doc": "Adds a group to this geometry; see the [page:BufferGeometry.groups groups]\n\t\t\tproperty for details."
        },
        "applyMatrix": {
          "!type": "fn(matrix: +THREE.Matrix4)",
          "!doc": "Bakes matrix transform directly into vertex coordinates."
        },
        "clone": {
          "!type": "fn() -> +THREE.BufferGeometry",
          "!doc": "Creates a clone of this BufferGeometry."
        },
        "copy": {
          "!type": "fn(bufferGeometry: +THREE.BufferGeometry) -> +THREE.BufferGeometry",
          "!doc": "Copies another BufferGeometry to this BufferGeometry."
        },
        "clearGroups": {
          "!type": "fn()",
          "!doc": "Clears all groups."
        },
        "computeBoundingBox": {
          "!type": "fn()",
          "!doc": "Computes bounding box of the geometry, updating [page:.boundingBox] attribute.<br>\n\t\tBounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are *null*."
        },
        "computeBoundingSphere": {
          "!type": "fn()",
          "!doc": "Computes bounding sphere of the geometry, updating [page:.boundingSphere] attribute.<br>\n\t\tBounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are *null*."
        },
        "computeVertexNormals": {
          "!type": "fn()",
          "!doc": "Computes vertex normals by averaging face normals."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Disposes the object from memory. <br>\n\t\tYou need to call this when you want the bufferGeometry removed while the application is running."
        },
        "fromDirectGeometry": {
          "!type": "fn() -> +THREE.BufferGeometry",
          "!doc": "Populates this BufferGeometry with data from a [page:DirectGeometry] object.<br><br>\n\n\t\t\tNote: [page:DirectGeometry] is mainly used as an intermediary object for converting between [page:Geometry]\n\t\t\tand BufferGeometry."
        },
        "fromGeometry": {
          "!type": "fn() -> +THREE.BufferGeometry",
          "!doc": "Populates this BufferGeometry with data from a [page:Geometry] object."
        },
        "getAttribute": {
          "!type": "fn(name: string) -> +THREE.BufferAttribute",
          "!doc": "Returns the [page:BufferAttribute attribute] with the specified name."
        },
        "merge": {
          "!type": "fn(bufferGeometry: +THREE.BufferGeometry, offset: number)",
          "!doc": "Merge in another BufferGeometry with an optional offset of where to start merging in."
        },
        "normalizeNormals": {
          "!type": "fn()",
          "!doc": "Every normal vector in a geometry will have a magnitude of 1.\n\t\tThis will correct lighting on the geometry surfaces."
        },
        "removeAttribute": {
          "!type": "fn(name: string) -> +THREE.BufferAttribute",
          "!doc": "Removes the [page:BufferAttribute attribute] with the specified name."
        },
        "toJSON": {
          "!type": "fn() -> object",
          "!doc": "Returns a JSON object representation of the BufferGeometry."
        },
        "toNonIndexed": {
          "!type": "fn() -> +THREE.BufferGeometry",
          "!doc": "Return a non-index version of an indexed BufferGeometry."
        }
      },
      "!doc": "<p>\n\t\tThis class is an efficient alternative to [page:Geometry], because it stores all data, including\n\t\tvertex positions, face indices, normals, colors, UVs, and custom attributes within buffers; this\n\t\treduces the cost of passing all this data to the GPU.<br>\n\t\tThis also makes BufferGeometry harder to work with than [page:Geometry]; rather than accessing\n\t\tposition data as [page:Vector3] objects, color data as [page:Color] objects, and so on, you have to\n\t\taccess the raw data from the appropriate [page:BufferAttribute attribute buffer]. This makes\n\t\tBufferGeometry best-suited for static objects where you don't need to manipulate the geometry much\n\t\tafter instantiating it.\n\t\t</p>\n\n\t\t<h2>Example</h2>\n\t\t<code>\n\t\tvar geometry = new THREE.BufferGeometry();\n\t\t// create a simple square shape. We duplicate the top left and bottom right\n\t\t// vertices because each vertex needs to appear once per triangle.\n\t\tvar vertices = new Float32Array( [\n\t\t\t-1.0, -1.0,  1.0,\n\t\t\t 1.0, -1.0,  1.0,\n\t\t\t 1.0,  1.0,  1.0,\n\n\t\t\t 1.0,  1.0,  1.0,\n\t\t\t-1.0,  1.0,  1.0,\n\t\t\t-1.0, -1.0,  1.0\n\t\t] );\n\n\t\t// itemSize = 3 because there are 3 values (components) per vertex\n\t\tgeometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );\n\t\tvar material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );\n\t\tvar mesh = new THREE.Mesh( geometry, material );\n\t\t</code>\n\t\t<div>\n\t\t\t[example:webgl_buffergeometry Complex mesh with non-indexed faces]<br>\n\t\t\t[example:webgl_buffergeometry_uint Complex mesh with indexed faces]<br>\n\t\t\t[example:webgl_buffergeometry_lines Lines]<br>\n\t\t\t[example:webgl_buffergeometry_lines_indexed Indexed Lines]<br>\n\t\t\t[example:webgl_buffergeometry_custom_attributes_particles Particles]<br>\n\t\t\t[example:webgl_buffergeometry_rawshader Raw Shaders]\n\t\t</div>\n\n\n\t\t<h2>Accessing Attributes</h2>\n\t\t<p>\n\t\tWebGL stores data associated with individual vertices of a geometry in <em>attributes</em>.\n\t\tExamples include the position of the vertex, the normal vector for the vertex, the vertex color,\n\t\tand so on. When using [page:Geometry], the [page:WebGLRenderer renderer] takes care of wrapping\n\t\tup this information into typed array buffers and sending this data to the shader. With\n\t\tBufferGeometry, all of this data is stored in buffers associated with individual attributes.\n\t\tThis means that to get the position data associated with a vertex (for instance), you must call\n\t\t[page:.getAttribute] to access the 'position' [page:BufferAttribute attribute], then access the individual\n\t\tx, y, and z coordinates of the position.\n\t\t</p>\n\t\t<p>\n\t\tThe following attributes are set by various members of this class:\n\t\t</p>\n\t\t<h3>[page:BufferAttribute position] (itemSize: 3)</h3>\n\t\t<div>\n\t\tStores the x, y, and z coordinates of each vertex in this geometry. Set by [page:.fromGeometry]().\n\t\t</div>\n\n\t\t<h3>[page:BufferAttribute normal] (itemSize: 3)</h3>\n\t\t<div>\n\t\tStores the x, y, and z components of the face or vertex normal vector of each vertex in this geometry.\n\t\tSet by [page:.fromGeometry]().\n\t\t</div>\n\n\t\t<h3>[page:BufferAttribute color] (itemSize: 3)</h3>\n\t\t<div>\n\t\tStores the red, green, and blue channels of vertex color of each vertex in this geometry.\n\t\tSet by [page:.fromGeometry]().\n\t\t</div>\n\n\t\t<h3>[page:BufferAttribute index] (itemSize: 1)</h3>\n\t\tAllows for vertices to be re-used across multiple triangles; this is called using \"indexed triangles\" and\n\t\tworks much the same as it does in [page:Geometry]: each triangle is associated with the indices of three vertices.\n\t\tThis attribute therefore stores the index of each vertex for each triangular face.\n\n\t\tIf this attribute is not set, the [page:WebGLRenderer renderer] assumes that each three contiguous\n\t\tpositions represent a single triangle.",
      "!type": "fn()"
    },
    "Clock": {
      "!url": "http://threejs.org/docs/#Reference/core/Clock",
      "prototype": {
        "autoStart": {
          "!type": "bool",
          "!doc": "If set, starts the clock automatically when the first update is called. Default is true."
        },
        "startTime": {
          "!type": "number",
          "!doc": "Holds the time at which the clock's [page:Clock.start start] method was last called."
        },
        "oldTime": {
          "!type": "number",
          "!doc": "Holds the time at which the clock's [page:Clock.start start], [page:Clock.getElapsedTime getElapsedTime] or [page:Clock.getDelta getDelta]\n\t\tmethods were last called."
        },
        "elapsedTime": {
          "!type": "number",
          "!doc": "Keeps track of the total time that the clock has been running."
        },
        "running": {
          "!type": "bool",
          "!doc": "Whether the clock is running or not."
        },
        "start": {
          "!type": "fn()",
          "!doc": "Starts clock. Also sets the [page:Clock.startTime startTime] and [page:Clock.oldTime oldTime]\n\t\tto the current time, sets [page:Clock.elapsedTime elapsedTime] to *0* and [page:Clock.running running] to *true*."
        },
        "stop": {
          "!type": "fn()",
          "!doc": "Stops clock and sets [page:Clock.oldTime oldTime] to the current time."
        },
        "getElapsedTime": {
          "!type": "fn() -> number",
          "!doc": "Get the seconds passed since the clock started and sets [page:Clock.oldTime oldTime] to the current time.<br>\n\t\tIf [page:Clock.autoStart autoStart] is *true* and the clock is not running, also starts the clock."
        },
        "getDelta": {
          "!type": "fn() -> number",
          "!doc": "Get the seconds passed since the time [page:Clock.oldTime oldTime] was set and sets [page:Clock.oldTime oldTime] to the current time.<br>\n\t\tIf [page:Clock.autoStart autoStart] is *true* and the clock is not running, also starts the clock."
        }
      },
      "!doc": "Object for keeping track of time. This uses <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Performance/now\">performance.now()</a>\n\t\tif it is available, otherwise it reverts to the less accurate <a href=\"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now\">Date.now()</a>.",
      "!type": "fn(autoStart: bool)"
    },
    "DirectGeometry": {
      "!url": "http://threejs.org/docs/#Reference/core/DirectGeometry",
      "prototype": {
        "id": {
          "!type": "number",
          "!doc": "Unique number for this [name] instance."
        },
        "name": {
          "!type": "string",
          "!doc": "Optional name. Default is the empty string."
        },
        "type": {
          "!type": "[]",
          "!doc": "String 'DirectGeometry'."
        },
        "indices": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "vertices": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "normals": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "colors": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "uvs": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "uvs2": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "groups": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "morphTargets": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "skinWeights": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "skinIndices": {
          "!type": "[]",
          "!doc": "Initialiased as an empty array, this is populated by [page:.fromGeometry]()."
        },
        "boundingBox": {
          "!type": "+THREE.Box3",
          "!doc": "Bounding box for the bufferGeometry, which can be calculated with\n\t\t\t[page:.computeBoundingBox](). Default is *null*."
        },
        "boundingSphere": {
          "!type": "+THREE.Sphere",
          "!doc": "Bounding sphere for the bufferGeometry, which can be calculated with\n\t\t\t[page:.computeBoundingSphere](). Default is *null*."
        },
        "verticesNeedUpdate": {
          "!type": "bool",
          "!doc": "Default is false."
        },
        "normalsNeedUpdate": {
          "!type": "bool",
          "!doc": "Default is false."
        },
        "colorsNeedUpdate": {
          "!type": "bool",
          "!doc": "Default is false."
        },
        "uvsNeedUpdate": {
          "!type": "bool",
          "!doc": "Default is false."
        },
        "groupsNeedUpdate": {
          "!type": "bool",
          "!doc": "Default is false."
        },
        "computeBoundingBox": {
          "!type": "null",
          "!doc": "See [page:Geometry.computeBoundingBox]."
        },
        "computeBoundingSphere": {
          "!type": "null",
          "!doc": "See [page:Geometry.computeBoundingSphere]."
        },
        "computeGroups": {
          "!type": "null",
          "!doc": "Compute the parts of the geometry that have different materialIndex.\n\t\t\tSee [page:BufferGeometry.groups]."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Disposes the object from memory. <br>\n\t\tYou need to call this when you want the directGeometry removed while the application is running."
        },
        "fromGeometry": {
          "!type": "null",
          "!doc": "Pass in a [page:Geometry] instance for conversion."
        }
      },
      "!doc": "This class is used internally to convert from [page:Geometry] to [page:BufferGeometry].",
      "!type": "fn()"
    },
    "EventDispatcher": {
      "!url": "http://threejs.org/docs/#Reference/core/EventDispatcher",
      "prototype": {
        "addEventListener": {
          "!type": "fn(type: string, listener: function)",
          "!doc": "Adds a listener to an event type."
        },
        "hasEventListener": {
          "!type": "fn(type: string, listener: function) -> bool",
          "!doc": "Checks if listener is added to an event type."
        },
        "removeEventListener": {
          "!type": "fn(type: string, listener: function)",
          "!doc": "Removes a listener from an event type."
        },
        "dispatchEvent": {
          "!type": "fn(event: object)",
          "!doc": "Fire an event type."
        }
      },
      "!doc": "JavaScript events for custom objects.<br>\n\t\t\t[link:https://github.com/mrdoob/eventdispatcher.js Eventdispatcher on GitHub]",
      "!type": "fn()"
    },
    "Face3": {
      "!url": "http://threejs.org/docs/#Reference/core/Face3",
      "prototype": {
        "a": {
          "!type": "number",
          "!doc": "Vertex A index."
        },
        "b": {
          "!type": "number",
          "!doc": "Vertex B index."
        },
        "c": {
          "!type": "number",
          "!doc": "Vertex C index."
        },
        "normal": {
          "!type": "+THREE.Vector3",
          "!doc": "Face normal - vector showing the direction of the Face3. If calculated automatically\n\t\t(using [page:Geometry.computeFaceNormals]), this is the normalized cross product of two edges of the\n\t\ttriangle. Default is *(0, 0, 0)*."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "Face color - for this to be used a material's [page:Material.vertexColors vertexColors] property\n\t\tmust be set to [page:Materials THREE.FaceColors]."
        },
        "vertexNormals": {
          "!type": "[]",
          "!doc": "Array of 3 [page:Vector3 vertex normals]."
        },
        "vertexColors": {
          "!type": "[]",
          "!doc": "Array of 3 vertex colors - for these to be used a material's [page:Material.vertexColors vertexColors] property\n\t\tmust be set to [page:Materials THREE.VertexColors]."
        },
        "materialIndex": {
          "!type": "number",
          "!doc": "Material index (points to [page:MultiMaterial MultiMaterial.materials]). Default is *0*."
        },
        "clone": {
          "!type": "fn() -> +THREE.Face3",
          "!doc": "Creates a new clone of the Face3 object."
        },
        "copy": {
          "!type": "fn(face3: +THREE.Face3) -> +THREE.Face3",
          "!doc": "Copy the paramaters of another Face3 into this."
        }
      },
      "!doc": "Triangular face used in [page:Geometry]. These are created automatically for all\n\t\tstandard geometry types, however if you are building a custom geometry you will have to\n\t\tcreate them manually.",
      "!type": "fn(a: number, b: number, c: number, normal: +THREE.Vector3, color: +THREE.Color, materialIndex: number)"
    },
    "Geometry": {
      "!url": "http://threejs.org/docs/#Reference/core/Geometry",
      "prototype": {
        "boundingBox": {
          "!type": "+THREE.Box3",
          "!doc": "Bounding box for the Geometry, which can be calculated with\n\t\t\t[page:.computeBoundingBox](). Default is *null*."
        },
        "boundingSphere": {
          "!type": "+THREE.Sphere",
          "!doc": "Bounding sphere for the Geometry, which can be calculated with\n\t\t\t[page:.computeBoundingSphere](). Default is *null*."
        },
        "colors": {
          "!type": "[]",
          "!doc": "Array of vertex [page:Color colors], matching number and order of vertices.<br><br>\n\n\t\tThis is used by [page:Points] and [page:Line] and any classes derived from those such as [page:LineSegments] and various helpers.\n\t\t[page:Mesh Meshes] use [page:Face3.vertexColors] instead of this.<br><br>\n\n\t\tTo signal an update in this array, [page:Geometry Geometry.colorsNeedUpdate] needs to be set to true."
        },
        "faces": {
          "!type": "[]",
          "!doc": "Array of [page:Face3 faces].<br>\n\t\tThe array of faces describe how each vertex in the model is connected to form faces.\n\t\tAdditionally it holds information about face and vertex normals and colors.<br><br>\n\t\tTo signal an update in this array, [page:Geometry Geometry.elementsNeedUpdate] needs to be set to true."
        },
        "faceVertexUvs": {
          "!type": "[]",
          "!doc": "Array of face [link:https://en.wikipedia.org/wiki/UV_mapping UV] layers, used for mapping textures onto the geometry.<br>\n\t\tEach UV layer is an array of [page:UV]s matching the order and number of vertices in faces.<br><br>\n\t\tTo signal an update in this array, [page:Geometry Geometry.uvsNeedUpdate] needs to be set to true."
        },
        "id": {
          "!type": "number",
          "!doc": "Unique number for this geometry instance."
        },
        "isGeometry": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Geometries. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lineDistances": {
          "!type": "array",
          "!doc": "An array containing distances between vertices for Line geometries.\n\t\tThis is required for [page:LineSegments] / [page:LineDashedMaterial] to render correctly.\n\t\tLine distances can be generated automatically with [page:.computeLineDistances]."
        },
        "morphTargets": {
          "!type": "[]",
          "!doc": "Array of [link:https://en.wikipedia.org/wiki/Morph_target_animation morph targets]. Each morph target is a Javascript object:\n\t\t<code>{ name: \"targetName\", vertices: [ new THREE.Vector3(), ... ] }</code>\n\t\tMorph vertices match number and order of primary vertices."
        },
        "morphNormals": {
          "!type": "[]",
          "!doc": "Array of morph normals. Morph normals have similar structure as morph targets, each normal set is a Javascript object:\n\t\t<code>morphNormal = { name: \"NormalName\", normals: [ new THREE.Vector3(), ... ] }</code>\n\n\t\tSee the [example:webgl_morphnormals WebGL / morphNormals] example."
        },
        "name": {
          "!type": "string",
          "!doc": "Optional name for this geometry. Default is an empty string."
        },
        "skinWeights": {
          "!type": "[]",
          "!doc": "The values of the vector should typically be between 0 and 1. For instance when set to 0 the bone\n\t\ttransformation will have no affect. When set to 0.5 it will have 50% affect. When set to 100%, it will\n\t\thave 100% affect. If there is only 1 bone associated with the vertex then you only need to worry about\n\t\tthe first component of the vector, the rest can be ignored and set to 0."
        },
        "skinIndices": {
          "!type": "[]",
          "!doc": "In code another example could look like this:\n\t\t<code>\n\t\t// e.g.\n\t\tgeometry.skinIndices[15] = new THREE.Vector4(   0,   5,   9, 0 );\n\t\tgeometry.skinWeights[15] = new THREE.Vector4( 0.2, 0.5, 0.3, 0 );\n\n\t\t// corresponds with the following vertex\n\t\tgeometry.vertices[15];\n\n\t\t// these bones will be used like so:\n\t\tskeleton.bones[0]; // weight of 0.2\n\t\tskeleton.bones[5]; // weight of 0.5\n\t\tskeleton.bones[9]; // weight of 0.3\n\t\tskeleton.bones[10]; // weight of 0\n\t\t</code>"
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this object instance.\n\t\tThis gets automatically assigned and shouldn't be edited."
        },
        "vertices": {
          "!type": "[]",
          "!doc": "Array of [page:Vector3 vertices].<br>\n\t\tThe array of vertices holds the position of every vertex in the model.<br>\n\t\tTo signal an update in this array, [page:.verticesNeedUpdate] needs to be set to true."
        },
        "verticesNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if the vertices array has been updated."
        },
        "elementsNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if the faces array has been updated."
        },
        "uvsNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if the uvs array has been updated."
        },
        "normalsNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if the normals array has been updated."
        },
        "colorsNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if the colors array or a face3 color has been updated."
        },
        "groupsNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if a face3 materialIndex has been updated."
        },
        "lineDistancesNeedUpdate": {
          "!type": "bool",
          "!doc": "Set to *true* if the linedistances array has been updated."
        },
        "applyMatrix": {
          "!type": "fn(matrix: +THREE.Matrix4)",
          "!doc": "Bakes matrix transform directly into vertex coordinates."
        },
        "clone": {
          "!type": "fn() -> +THREE.Geometry",
          "!doc": "Creates a new clone of the Geometry.<br><br>\n\n\t\tThis method copies only vertices, faces and uvs. It does not copy any other properties of the geometry."
        },
        "computeBoundingBox": {
          "!type": "fn()",
          "!doc": "Computes bounding box of the geometry, updating [page:Geometry Geometry.boundingBox] attribute."
        },
        "computeBoundingSphere": {
          "!type": "fn()",
          "!doc": "Neither bounding boxes or bounding spheres are computed by default. They need to be explicitly computed,\n\t\t\totherwise they are *null*."
        },
        "computeFaceNormals": {
          "!type": "fn()",
          "!doc": "Computes [page:Face3.normal face normals]."
        },
        "computeFlatVertexNormals": {
          "!type": "fn()",
          "!doc": "Computes flat [page:Face3.vertexNormals vertex normals]. Sets the vertex normal of each vertex of each face to be the same as the face's normal."
        },
        "computeLineDistances": {
          "!type": "fn()",
          "!doc": "Compute [page:.lineDistances]."
        },
        "computeMorphNormals": {
          "!type": "fn()",
          "!doc": "Computes [page:.morphNormals]."
        },
        "computeVertexNormals": {
          "!type": "fn(areaWeighted: bool)",
          "!doc": "areaWeighted - If true the contribution of each face normal to the vertex normal is\n\t\tweighted by the area of the face. Default is true.<br><br>\n\n\t\tComputes vertex normals by averaging face normals."
        },
        "copy": {
          "!type": "fn(geometry: +THREE.Geometry) -> +THREE.Geometry",
          "!doc": "Copies vertices, faces and uvs into this geometry. It does not copy any other properties of the geometry."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Removes The object from memory. <br>\n\t\tDon't forget to call this method when you remove a geometry because it can cause memory leaks."
        },
        "fromBufferGeometry": {
          "!type": "fn(geometry: +THREE.BufferGeometry) -> +THREE.Geometry",
          "!doc": "Convert a [page:BufferGeometry] to a Geometry."
        },
        "merge": {
          "!type": "fn(geometry: +THREE.Geometry, matrix: +THREE.Matrix4, materialIndexOffset: number)",
          "!doc": "Merge two geometries or geometry and geometry from object (using object's transform)"
        },
        "mergeMesh": {
          "!type": "fn(mesh: +THREE.Mesh)",
          "!doc": "Merge the mesh's geometry with this, also applying the mesh's transform."
        },
        "mergeVertices": {
          "!type": "fn()",
          "!doc": "Checks for duplicate vertices using hashmap.<br>\n\t\tDuplicated vertices are removed and faces' vertices are updated."
        },
        "normalize": {
          "!type": "fn()",
          "!doc": "Normalize the geometry. <br>\n\t\tMake the geometry centered and have a bounding sphere of radius *1.0*."
        }
      },
      "!doc": "Base class for all geometries (but not for [page:BufferGeometry BufferGeometries]).<br>\n\t\tThis can also be used directly for building custom geometries.<br><br>\n\n\t\tGeometries are easier to work with than [page:BufferGeometry BufferGeometries] as they store\n\t\tattributes such as vertices, faces, colors and so on directly (rather than in [page:BufferAttribute buffers]),\n\t\thowever they are generally slower.",
      "!type": "fn()"
    },
    "InstancedBufferAttribute": {
      "!url": "http://threejs.org/docs/#Reference/core/InstancedBufferAttribute",
      "prototype": {
        "!proto": "THREE.BufferAttribute.prototype",
        "meshPerAttribute": {
          "!type": "number",
          "!doc": "Default is *1*."
        },
        "isInstancedBufferAttribute": {
          "!type": "bool",
          "!doc": "Default is *true*."
        }
      },
      "!doc": "An instanced version of [page:BufferAttribute].",
      "!type": "fn(array: TypedArray, itemSize: number, meshPerAttribute: number)"
    },
    "InstancedBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/core/InstancedBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype",
        "maxInstancedCount": {
          "!type": "number",
          "!doc": "Default is *undefined*."
        },
        "isInstancedBufferGeometry": {
          "!type": "bool",
          "!doc": "Default is *true*."
        },
        "addGroup": "number"
      },
      "!doc": "An instanced version of [page:BufferGeometry].",
      "!type": "fn()"
    },
    "InstancedInterleavedBuffer": {
      "!url": "http://threejs.org/docs/#Reference/core/InstancedInterleavedBuffer",
      "prototype": {
        "!proto": "THREE.InterleavedBuffer.prototype",
        "meshPerAttribute": {
          "!type": "number",
          "!doc": "Default is *1*."
        },
        "isInstancedInterleavedBuffer": {
          "!type": "bool",
          "!doc": "Default is *true*."
        }
      },
      "!doc": "An instanced version of [page:InterleavedBuffer].",
      "!type": "fn(array: TypedArray, itemSize: number, meshPerAttribute: number)"
    },
    "InterleavedBuffer": {
      "!url": "http://threejs.org/docs/#Reference/core/InterleavedBuffer",
      "prototype": {
        "array": "[]",
        "stride": "number",
        "count": {
          "!type": "number",
          "!doc": "Gives the total number of elements in the array."
        },
        "dynamic": {
          "!type": "bool",
          "!doc": "Default is *false*."
        },
        "updateRange": {
          "!type": "object",
          "!doc": "Object containing offset and count."
        },
        "updateRange.offset": {
          "!type": "number",
          "!doc": "DEfault is *0*."
        },
        "updateRange.count": {
          "!type": "number",
          "!doc": "Default is *-1*."
        },
        "version": {
          "!type": "number",
          "!doc": "A version number, incremented every time the needsUpdate property is set to true."
        },
        "isInterleavedBuffer": {
          "!type": "number",
          "!doc": "Default is *true*."
        },
        "needsUpdate": {
          "!type": "number",
          "!doc": "Default is *false*. Setting this to true increments [page:InterleavedBuffer.version version]."
        },
        "copy": {
          "!type": "fn(source) -> +THREE.InterleavedBuffer",
          "!doc": "Copy the array, count, stride and value of dynamic to this."
        },
        "copyAt": "fn(index1, attribute, index2) -> +THREE.InterleavedBuffer",
        "set": "fn(value, offset) -> +THREE.InterleavedBuffer",
        "clone": "fn(index, x, y) -> +THREE.InterleavedBuffer"
      },
      "!doc": "",
      "!type": "fn(array: TypedArray, stride: number)"
    },
    "InterleavedBufferAttribute": {
      "!url": "http://threejs.org/docs/#Reference/core/InterleavedBufferAttribute",
      "prototype": {
        "data": {
          "!type": "+THREE.InterleavedBuffer",
          "!doc": "The [page:InterleavedBuffer InterleavedBuffer] instance passed in the constructor."
        },
        "itemSize": "number",
        "offset": "number",
        "normalized": {
          "!type": "bool",
          "!doc": "Default is *true*."
        },
        "isInterleavedBufferAttribute": {
          "!type": "bool",
          "!doc": "Default is *true*."
        },
        "count": {
          "!type": "fn() -> number",
          "!doc": "The value of [page:InterleavedBufferAttribute.data data].count."
        },
        "array": {
          "!type": "fn() -> []",
          "!doc": "The value of [page:InterleavedBufferAttribute.data data].array."
        },
        "getX": "fn(index)",
        "getY": "fn(index)",
        "getZ": "fn(index)",
        "getW": "fn(index)",
        "setX": "fn(index, x)",
        "setY": "fn(index, y)",
        "setZ": "fn(index, z)",
        "setXY": "fn(index, x, y)",
        "setXYZ": "fn(index, x, y, z)",
        "setXYZW": "fn(index, x, y, z, w)"
      },
      "!doc": "",
      "!type": "fn(interleavedBuffer: +THREE.InterleavedBuffer, itemSize: number, offset: number, normalized: bool)"
    },
    "Layers": {
      "!url": "http://threejs.org/docs/#Reference/core/Layers",
      "prototype": {
        "mask": {
          "!type": "number",
          "!doc": "Internal layer mask."
        },
        "disable": {
          "!type": "fn(layer: number)",
          "!doc": "layer - an integer from 0 to 31.<br><br>\n\n\t\tRemove *layer* from the mask."
        },
        "enable": {
          "!type": "fn(layer: number)",
          "!doc": "layer - an integer from 0 to 31.<br><br>\n\n\t\tAdd *layer* to the mask."
        },
        "set": {
          "!type": "fn(layer: number)",
          "!doc": "layer - an integer from 0 to 31.<br><br>\n\n\t\tSet the layer mask to the value *layer*."
        },
        "test": {
          "!type": "fn(layers: number) -> bool",
          "!doc": "layers - a 32bit bit mask of layer numbers.<br><br>\n\n\t\tReturns true if *layers* and [page:.mask] have any bits set in common."
        },
        "toggle": {
          "!type": "fn(layer: number)",
          "!doc": "layer - an integer from 0 to 31.<br><br>\n\n\t\tToggle the *layer* value in the mask."
        }
      },
      "!doc": "An object providing a [link:https://en.wikipedia.org/wiki/Mask_(computing) bit mask] and accessor methods\n\t\tused to control an [page:Object3D]'s visibility.\n\t\tA [page:Layers] object assigns an [page:Object3D] to 0 or more of 32 layers numbered 0 to 31.<br><br>\n\n\t\tThis is used to control visibility - an object must share a layer with a [page:Camera camera]\n\t\tto be visible when that camera's view is renderered.<br><br>\n\n\t\tAll classes that inherit from [page:Object3D] have a [property:layers] property which is an instance\n\t\tof this class.",
      "!type": "fn()"
    },
    "Object3D": {
      "!url": "http://threejs.org/docs/#Reference/core/Object3D",
      "prototype": {
        "castShadow": {
          "!type": "bool",
          "!doc": "Whether the object gets rendered into shadow map. Default is *false*."
        },
        "children": {
          "!type": "+THREE.Object3D",
          "!doc": "Array with object's children. See [page:Group] for info on manually grouping objects."
        },
        "frustumCulled": {
          "!type": "bool",
          "!doc": "When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.\n\t\tOtherwise the object gets renderered every frame even if it isn't visible. Default is *true*."
        },
        "id": {
          "!type": "number",
          "!doc": "readonly – Unique number for this object instance."
        },
        "isObject": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Object3Ds. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "layers": {
          "!type": "+THREE.Layers",
          "!doc": "The layer membership of the object. The object is only visible if it has at least one\n\t\tlayer in common with the [page:Camera] in use."
        },
        "matrix": {
          "!type": "+THREE.Matrix4",
          "!doc": "The local transform matrix."
        },
        "matrixAutoUpdate": {
          "!type": "bool",
          "!doc": "When this is set, it calculates the matrix of position, (rotation or quaternion) and\n\t\tscale every frame and also recalculates the matrixWorld property. Default is [page:Object3D.DefaultMatrixAutoUpdate] (true)."
        },
        "matrixWorld": {
          "!type": "+THREE.Matrix4",
          "!doc": "The global transform of the object. If the Object3d has no parent, then it's identical to\n\t\tthe local transform [page:.matrix]."
        },
        "matrixWorldNeedsUpdate": {
          "!type": "bool",
          "!doc": "When this is set, it calculates the matrixWorld in that frame and resets this property\n\t\t to false. Default is *false*."
        },
        "modelViewMatrix": {
          "!type": "+THREE.Matrix4",
          "!doc": "This is passed to the shader and used to calculate the position of the object."
        },
        "name": {
          "!type": "string",
          "!doc": "Optional name of the object (doesn't need to be unique). Default is an empty string."
        },
        "normalMatrix": {
          "!type": "+THREE.Matrix3",
          "!doc": "This is passed to the shader and used to calculate lighting for the object."
        },
        "onAfterRender": {
          "!type": "function",
          "!doc": "An optional callback that is executed immediately after the Object3D is rendered.\n\t\tThis function is called with the following parameters: renderer, scene, camera, geometry,\n\t\tmaterial, group."
        },
        "onBeforeRender": {
          "!type": "function",
          "!doc": "An optional callback that is executed immediately before the Object3D is rendered.\n\t\tThis function is called with the following parameters: renderer, scene, camera, geometry,\n\t\tmaterial, group."
        },
        "parent": {
          "!type": "+THREE.Object3D",
          "!doc": "Object's parent in the [link:https://en.wikipedia.org/wiki/Scene_graph scene graph]."
        },
        "position": {
          "!type": "+THREE.Vector3",
          "!doc": "The object's local position."
        },
        "quaternion": {
          "!type": "+THREE.Quaternion",
          "!doc": "Object's local rotation as a [page:Quaternion Quaternion]."
        },
        "receiveShadow": {
          "!type": "bool",
          "!doc": "Whether the material receives shadows. Default is *false*."
        },
        "renderOrder": {
          "!type": "number",
          "!doc": "This value allows the default rendering order of [link:https://en.wikipedia.org/wiki/Scene_graph scene graph]\n\t\tobjects to be overridden although opaque and transparent objects remain sorted independently.\n\t\tSorting is from lowest to highest renderOrder. Default value is *0*."
        },
        "rotation": {
          "!type": "+THREE.Euler",
          "!doc": "Object's local rotation (see [link:https://en.wikipedia.org/wiki/Euler_angles Euler angles]), in radians."
        },
        "scale": {
          "!type": "+THREE.Vector3",
          "!doc": "The object's local [property:Vector3 scale]. Default is [page:Vector3]( 1, 1, 1 )."
        },
        "up": {
          "!type": "+THREE.Vector3",
          "!doc": "This is used by the [page:.lookAt lookAt] method, for example, to determine the orientation of the result.<br>\n\t\tDefault is [page:Object3D.DefaultUp] - that is, ( 0, 1, 0 )."
        },
        "userData": {
          "!type": "object",
          "!doc": "An object that can be used to store custom data about the Object3d. It should not hold\n\t\treferences to functions as these will not be cloned."
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this object instance.\n\t\tThis gets automatically assigned, so this shouldn't be edited."
        },
        "visible": {
          "!type": "bool",
          "!doc": "Object gets rendered if *true*. Default is *true*."
        },
        "DefaultUp": {
          "!type": "+THREE.Vector3",
          "!doc": "The default [page:.up up] direction for objects, also used as the default position for [page:DirectionalLight],\n\t\t\t[page:HemisphereLight] and [page:Spotlight] (which creates lights shining from the top down).<br>\n\t\t\tSet to (0, 1, 0) by default."
        },
        "DefaultMatrixAutoUpdate": {
          "!type": "+THREE.Vector3",
          "!doc": "The default setting for [page.matrixAutoUpdate matrixAutoUpdate] for newly created Object3Ds.<br>"
        },
        "applyMatrix": {
          "!type": "fn(matrix: +THREE.Matrix4)",
          "!doc": "This updates the position, rotation and scale with the matrix."
        },
        "clone": {
          "!type": "fn(recursive: bool) -> +THREE.Object3D",
          "!doc": "recursive -- if true, descendants of the object are also cloned. Default is true.<br><br>\n\n\t\tReturns a clone of this object and optionaly all descendants."
        },
        "copy": {
          "!type": "fn(object: +THREE.Object3D, recursive: bool) -> +THREE.Object3D",
          "!doc": "recursive -- if true, descendants of the object are also copied. Default is true.<br><br>\n\n\t\tCopy the given object into this object."
        },
        "getObjectById": {
          "!type": "fn(id: number) -> +THREE.Object3D",
          "!doc": "id -- Unique number of the object instance<br><br>\n\n\t\tSearches through the object's children and returns the first with a matching id.<br>\n\t\tNote that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object."
        },
        "getObjectByName": {
          "!type": "fn(name: string) -> +THREE.Object3D",
          "!doc": "name -- String to match to the children's Object3d.name property. <br><br>\n\n\t\tSearches through the object's children and returns the first with a matching name.<br>\n\t\tNote that for most objects the [property:name] is an empty string by default. You will\n\t\thave to set it manually to make use of this method."
        },
        "getObjectByProperty": {
          "!type": "fn(name: string, value: number) -> +THREE.Object3D",
          "!doc": "name -- the property name to search for. <br>\n\t\tvalue -- value of the given property. <br><br>\n\n\t\tSearches through the object's children and returns the first with a property that matches the aclue given."
        },
        "getWorldPosition": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "optionalTarget — (optional) target to set the result. Otherwise, a new [page:Vector3] is instantiated. <br><br>\n\n\t\tReturns a vector representing the position of the object in world space."
        },
        "getWorldQuaternion": {
          "!type": "fn(optionalTarget: +THREE.Quaternion) -> +THREE.Quaternion",
          "!doc": "optionalTarget — (optional) if specified, the result will be copied into this Quaternion,\n\t\totherwise a new Quaternion will be created. <br><br>\n\n\t\tReturns a quaternion representing the rotation of the object in world space."
        },
        "getWorldRotation": {
          "!type": "fn(optionalTarget: +THREE.Euler) -> +THREE.Euler",
          "!doc": "optionalTarget — (optional) if specified, the result will be copied into this Euler,\n\t\totherwise a new Euler will be created. <br><br>\n\n\t\tReturns the euler angles representing the rotation of the object in world space."
        },
        "getWorldScale": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] — (optional) if specified, the result will be copied into this Vector3,\n\t\totherwise a new Vector3 will be created. <br><br>\n\n\t\tReturns a vector of the scaling factors applied to the object for each axis in world space."
        },
        "getWorldDirection": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] — (optional) if specified, the result will be copied into this Vector3,\n\t\totherwise a new Vector3 will be created. <br><br>\n\n\t\tReturns a vector representing the direction of object's positive z-axis in world space."
        },
        "localToWorld": {
          "!type": "fn(vector: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "vector - A vector representing a position in local (object) spave.<br><br>\n\n\t\tConverts the vector from local space to world space."
        },
        "lookAt": {
          "!type": "fn(vector: +THREE.Vector3)",
          "!doc": "vector - A vector representing a position in world space.<br><br>\n\n\t\tRotates the object to face a point in world space."
        },
        "raycast": {
          "!type": "fn(raycaster: +THREE.Raycaster, intersects: []) -> []",
          "!doc": "Abstract (empty) method to get intersections between a casted ray and this object.\n\t\tSubclasses such as [page:Mesh], [page:Line], and [page:Points] implement this method in order\n\t\tto use raycasting."
        },
        "rotateOnAxis": {
          "!type": "fn(axis: +THREE.Vector3, angle: number) -> +THREE.Object3D",
          "!doc": "axis -- A normalized vector in object space. <br>\n\t\tangle -- The angle in radians.<br><br>\n\n\t\tRotate an object along an axis in object space. The axis is assumed to be normalized."
        },
        "rotateX": {
          "!type": "fn(rad: number)",
          "!doc": "rad - the angle to rotate in radians.<br><br>\n\n\t\tRotates the object around x axis in local space."
        },
        "rotateY": {
          "!type": "fn(rad: number)",
          "!doc": "rad - the angle to rotate in radians.<br><br>\n\n\t\tRotates the object around y axis in local space."
        },
        "rotateZ": {
          "!type": "fn(rad: number)",
          "!doc": "rad - the angle to rotate in radians.<br><br>\n\n\t\tRotates the object around z axis in local space."
        },
        "setRotationFromAxisAngle": {
          "!type": "fn(axis: +THREE.Vector3, angle: number)",
          "!doc": "axis -- A normalized vector in object space. <br>\n\t\t\tangle -- angle in radians<br><br>\n\n\t\t\tCalls [page:Quaternion.setFromAxisAngle setFromAxisAngle]( [page:Float axis], [page:Float angle] )\n\t\t\ton the [page:.quaternion]."
        },
        "setRotationFromEuler": {
          "!type": "fn(euler: +THREE.Euler)",
          "!doc": "euler -- Euler angle specifying rotation amount.<br>\n\n\t\t\tCalls [page:Quaternion.setRotationFromEuler setRotationFromEuler]( [page:Euler euler])\n\t\t\ton the [page:.quaternion]."
        },
        "setRotationFromMatrix": {
          "!type": "fn(m: +THREE.Matrix4)",
          "!doc": "m -- rotate the quaternion by the rotation component of the matrix.<br>\n\n\t\t\tCalls [page:Quaternion.setFromRotationMatrix setFromRotationMatrix]( [page:Matrix4 m])\n\t\t\ton the [page:.quaternion].<br><br>\n\n\t\t\tNote that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)."
        },
        "setRotationFromQuaternion": {
          "!type": "fn(q: +THREE.Quaternion)",
          "!doc": "q -- normalized Quaternion.<br><br>\n\n\t\t\tCopy the given quaternion into [page:.quaternion]."
        },
        "toJSON": {
          "!type": "fn(q: +THREE.Quaternion)",
          "!doc": "Convert the object to JSON format."
        },
        "translateOnAxis": {
          "!type": "fn(axis: +THREE.Vector3, distance: number) -> +THREE.Object3D",
          "!doc": "axis -- A normalized vector in object space.<br>\n\t\tdistance -- The distance to translate.<br><br>\n\n\t\tTranslate an object by distance along an axis in object space. The axis is assumed to be normalized."
        },
        "translateX": {
          "!type": "fn(distance: number)",
          "!doc": "Translates object along x axis by *distance* units."
        },
        "translateY": {
          "!type": "fn(distance: number)",
          "!doc": "Translates object along y axis by *distance* units."
        },
        "translateZ": {
          "!type": "fn(distance: number)",
          "!doc": "Translates object along z axis by *distance* units."
        },
        "traverse": {
          "!type": "fn(callback: function)",
          "!doc": "callback - A function with as first argument an object3D object.<br><br>\n\n\t\tExecutes the callback on this object and all descendants."
        },
        "traverseVisible": {
          "!type": "fn(callback: function)",
          "!doc": "callback - A function with as first argument an object3D object.<br><br>\n\n\t\tLike traverse, but the callback will only be executed for visible objects.\n\t\tDescendants of invisible objects are not traversed."
        },
        "traverseAncestors": {
          "!type": "fn(callback: function)",
          "!doc": "callback - A function with as first argument an object3D object.<br><br>\n\n\t\tExecutes the callback on all ancestors."
        },
        "updateMatrix": {
          "!type": "fn()",
          "!doc": "Update the local transform."
        },
        "updateMatrixWorld": {
          "!type": "fn(force: bool)",
          "!doc": "Update the global transform of the object and its children."
        },
        "worldToLocal": {
          "!type": "fn(vector: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "vector - A world vector.<br><br>\n\n\t\tUpdates the vector from world space to local space."
        }
      },
      "!doc": "This is the base class for most objects in three.js and provides a set of properties and methods\n\t\t\tfor manipulating objects in 3D space.<br><br>\n\n\t\t\tNote that this can be used for grouping objects via the [page:.add]( object ) method\n\t\t\twhich adds the object as a child, however it is better to use [page:Group] for this.",
      "!type": "fn()"
    },
    "Raycaster": {
      "!url": "http://threejs.org/docs/#Reference/core/Raycaster",
      "prototype": {
        "far": {
          "!type": "float",
          "!doc": "The far factor of the raycaster. This value indicates which objects can be discarded based on the distance.<br>\n\t\tThis value shouldn't be negative and should be larger than the near property."
        },
        "linePrecision": {
          "!type": "float",
          "!doc": "The precision factor of the raycaster when intersecting [page:Line] objects."
        },
        "near": {
          "!type": "float",
          "!doc": "The near factor of the raycaster. This value indicates which objects can be discarded based on the distance.<br>\n\t\tThis value shouldn't be negative and should be smaller than the far property."
        },
        "params": {
          "!type": "object",
          "!doc": "An object with the following properties:\n\n\t\t\t<code>\n{\n\tMesh: {},\n\tLine: {},\n\tLOD: {},\n\tPoints: { threshold: 1 },\n\tSprite: {}\n}\n\t\t\t</code>"
        },
        "ray": {
          "!type": "+THREE.Ray",
          "!doc": "The [Page:Ray] used for the raycasting."
        },
        "set": {
          "!type": "fn(origin: +THREE.Vector3, direction: +THREE.Vector3)",
          "!doc": "Updates the ray with a new origin and direction."
        },
        "setFromCamera": {
          "!type": "fn(coords: +THREE.Vector2, camera: +THREE.Camera)",
          "!doc": "Updates the ray with a new origin and direction."
        },
        "intersectObject": {
          "!type": "fn(object: +THREE.Object3D, recursive: bool) -> []",
          "!doc": "Checks all intersection between the ray and the object with or without the descendants. Intersections are returned sorted by distance, closest first. An array of intersections is returned...\n        <code>\n            [ { distance, point, face, faceIndex, indices, object }, ... ]\n        </code>\n        <p>\n        [page:Float distance] – distance between the origin of the ray and the intersection<br>\n        [page:Vector3 point] – point of intersection, in world coordinates<br>\n        [page:Face3 face] – intersected face<br>\n        [page:Integer faceIndex] – index of the intersected face<br>\n        [page:Array indices] – indices of vertices comprising the intersected face<br>\n        [page:Object3D object] – the intersected object<br>\n        [page:Vector2 uv] - U,V coordinates at point of intersection\n    \t</p>\n        <p>\n        When intersecting a [page:Mesh] with a [page:BufferGeometry], the *faceIndex* will be *undefined*, and *indices* will be set; when intersecting a [page:Mesh] with a [page:Geometry], *indices* will be *undefined*.\n        </p>\n\t\t<p>\n\t\t*Raycaster* delegates to the [page:Object3D.raycast raycast] method of the passed object, when evaluating whether the ray intersects the object or not. This allows [page:Mesh meshes] to respond differently to ray casting than [page:Line lines] and [page:Points pointclouds].\n\t\t</p>\n\t\t<p>\n\t\t*Note* that for meshes, faces must be pointed towards the origin of the [page:.ray ray] in order to be detected; intersections of the ray passing through the back of a face will not be detected. To raycast against both faces of an object, you'll want to set the [page:Mesh.material material]'s [page:Material.side side] property to *THREE.DoubleSide*.\n\t\t</p>"
        },
        "intersectObjects": {
          "!type": "fn(objects: [], recursive: bool) -> []",
          "!doc": "Checks all intersection between the ray and the objects with or without the descendants. Intersections are returned sorted by distance, closest first. Intersections are of the same form as those returned by [page:.intersectObject]."
        }
      },
      "!doc": "This class is designed to assist with [link:https://en.wikipedia.org/wiki/Ray_casting raycasting].\n\t\tRaycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst\n\t\tother things.",
      "!type": "fn(origin: +THREE.Vector3, direction: +THREE.Vector3, near: number, far: number)"
    },
    "Uniform": {
      "!url": "http://threejs.org/docs/#Reference/core/Uniform",
      "prototype": {
        "value": {
          "!type": "object",
          "!doc": "Current value of the uniform."
        },
        "clone": {
          "!type": "fn() -> +THREE.Uniform",
          "!doc": "Returns a clone of this uniform.<br>\n\t\tIf the uniform's value property is an [page:Object] with a clone() method, this is used, otherwise the value is copied by assigment.\n\t\tArray values are shared between cloned [page:Uniform]s.<br><br>\n\t\tSee [example:webgldeferred_animation WebGL deferred animation] for an example of this method in use."
        }
      },
      "!doc": "Uniforms are global [link:https://www.opengl.org/documentation/glsl/ GLSL] variables. They are passed to shader programs.",
      "!type": "fn(value: object)"
    },
    "DeprecatedList": {
      "!url": "http://threejs.org/docs/#Reference/deprecated/DeprecatedList",
      "prototype": {}
    },
    "Curve": {
      "!url": "http://threejs.org/docs/#Reference/extras/core/Curve",
      "prototype": {
        "getPoint": {
          "!type": "fn(t: number) -> Vector",
          "!doc": "Returns a vector for point t of the curve where t is between 0 and 1. Must be implemented in the extending class."
        },
        "getPointAt": {
          "!type": "fn(u: number) -> Vector",
          "!doc": "Returns a vector for point at a relative position in curve according to arc length.\n\t\t\tu is in the range [0, 1]."
        },
        "getPoints": {
          "!type": "fn(divisions: integer) -> []",
          "!doc": "divisions -- number of pieces to divide the curve into. Default is *5*.<br><br>\n\n\t\t\tReturns a set of divisions + 1 points using getPoint( t )."
        },
        "getSpacedPoints": {
          "!type": "fn(divisions) -> []",
          "!doc": "divisions -- number of pieces to divide the curve into. Default is *5*.<br><br>\n\n\t\t\tReturns a set of divisions + 1 equi-spaced points using getPointAt( u )."
        },
        "getLength": {
          "!type": "fn() -> number",
          "!doc": "Get total curve arc length."
        },
        "getLengths": {
          "!type": "fn(divisions) -> []",
          "!doc": "Get list of cumulative segment lengths."
        },
        "updateArcLengths": {
          "!type": "fn()",
          "!doc": "Update the cumlative segment distance cache."
        },
        "getUtoTmapping": {
          "!type": "fn(u: number, distance) -> number",
          "!doc": "Given u in the range ( 0 .. 1 ), returns [page:Number t] also in the range ( 0 .. 1 ).\n\t\t\tu and t can then be used to give you points which are equidistant from the ends of the curve,\n\t\t\tusing [page:.getPoint]."
        },
        "getTangent": {
          "!type": "fn(t: number) -> Vector",
          "!doc": "Returns a unit vector tangent at t. If the subclassed curve do not implement its\n\t\t\ttangent derivation, 2 points a small delta apart will be used to find its gradient\n\t\t\twhich seems to give a reasonable approximation"
        },
        "getTangentAt": {
          "!type": "fn(u: number) -> Vector",
          "!doc": "Returns tangent at a point which is equidistant to the ends of the curve from the\n\t\t\tpoint given in [page:.getTangent]."
        },
        "computeFrenetFrames": {
          "!type": "fn(segments, closed) -> object",
          "!doc": "Generates the Frenet Frames. Used in geometries like [page:TubeGeometry] or [page:ExtrudeGeometry]."
        }
      },
      "!doc": "An abstract base class for creating a curve object that contains methods for interpolation.\n\t\tFor an array of Curves see [page:CurvePath].",
      "!type": "fn()"
    },
    "CurvePath": {
      "!url": "http://threejs.org/docs/#Reference/extras/core/CurvePath",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "curves": {
          "!type": "array",
          "!doc": "The array of [page:Curve Curves]."
        },
        "autoClose": {
          "!type": "boolean",
          "!doc": "Whether or not to automatically close the path."
        },
        "add": {
          "!type": "fn(curve: +THREE.Curve)",
          "!doc": "Add a curve to the [page:.curves] array."
        },
        "closePath": {
          "!type": "fn()",
          "!doc": "Adds a [page:LineCurve lineCurve] to close the path."
        },
        "createGeometry": {
          "!type": "fn(points: +THREE.Vector3) -> +THREE.Geometry",
          "!doc": "points -- An array of [page:Vector3 Vector3s]<br><br>\n\n\t\tCreates a geometry from points"
        },
        "createPointsGeometry": {
          "!type": "fn(divisions: number) -> +THREE.Geometry",
          "!doc": "divisions -- How many segments to create. Defaults to *12*.<br><br>\n\n\t\tCreates a [page:Geometry] object comprised of [page:Vector3 Vector3s], for example\n\t\tto be used with [page:Line] or [page:Points]. Uses [page:Curve.getPoints]() for the division."
        },
        "createSpacedPointsGeometry": {
          "!type": "fn(divisions: number) -> +THREE.Geometry",
          "!doc": "divisions -- How many segments to create. Defaults to *12*.<br><br>\n\n\t\tCreates a [page:Geometry] object comprised of [page:Vector3]s that are equidistant, for example\n\t\tto be used with [page:Line] or [page:Points].\tUses [page:Curve.getSpacedPoints]() for the division."
        },
        "getCurveLengths": {
          "!type": "fn() -> number",
          "!doc": "Adds together the lengths of the curves in the [page:.curves] array."
        }
      },
      "!doc": "An abstract base class extending [page:Curve]. A CurvePath is simply an array of connected curves,\n\t\tbut retains the api of a curve.",
      "!type": "fn()"
    },
    "Font": {
      "!url": "http://threejs.org/docs/#Reference/extras/core/Font",
      "prototype": {
        "data": {
          "!type": "array",
          "!doc": "The JSON data passed in the constructor."
        },
        "isFont": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are fonts. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally by the renderer for optimisation."
        },
        "generateShapes": {
          "!type": "fn(text: string, size: number, divisions: number)",
          "!doc": "[page:String text] -- string of text.<br>\n\t\t\t[page:Float size] -- (optional) scale for the [page:Shape Shapes]. Default is *100*.<br>\n\t\t\t[page:Integer divisions] -- (optional) fineness of the [page:Shape Shapes]. Default is *5*.<br>\n\n\t\t\tCreates an array of [page:Shape Shapes] representing the text in the font."
        }
      },
      "!doc": "Create a set of [page:Shape Shapes] representing a font loaded in JSON format.<br><br>\n\n\t\tThis is used internally by the [page:FontLoader].",
      "!type": "fn(data)"
    },
    "Path": {
      "!url": "http://threejs.org/docs/#Reference/extras/core/Path",
      "prototype": {
        "!proto": "THREE.CurvePath.prototype",
        "currentPoint": {
          "!type": "array",
          "!doc": "The current offset of the path. Any new [page:Curve] added will start here."
        },
        "absarc": {
          "!type": "fn(x: number, y: number, radius: number, startAngle: number, endAngle: number, clockwise: number)",
          "!doc": "x, y -- The absolute center of the arc.<br>\n\t\t\tradius -- The radius of the arc.<br>\n\t\t\tstartAngle -- The start angle in radians.<br>\n\t\t\tendAngle -- The end angle in radians.<br>\n\t\t\tclockwise -- Sweep the arc clockwise. Defaults to *false*.<br><br>\n\n\t\t\tAdds an absolutely positioned [page:EllipseCurve EllipseCurve] to the path."
        },
        "absellipse": {
          "!type": "fn(x: number, y: number, xRadius: number, yRadius: number, startAngle: number, endAngle: number, clockwise: number, rotation: number)",
          "!doc": "x, y -- The absolute center of the ellipse.<br>\n\t\t\txRadius -- The radius of the ellipse in the x axis.<br>\n\t\t\tyRadius -- The radius of the ellipse in the y axis.<br>\n\t\t\tstartAngle -- The start angle in radians.<br>\n\t\t\tendAngle -- The end angle in radians.<br>\n\t\t\tclockwise -- Sweep the ellipse clockwise. Defaults to false.<br>\n\t\t\trotation -- The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Optional, defaults to 0.<br><br>\n\n\t\t\tAdds an absolutely positioned [page:EllipseCurve EllipseCurve] to the path."
        },
        "arc": {
          "!type": "fn(x: number, y: number, radius: number, startAngle: number, endAngle: number, clockwise: number)",
          "!doc": "x, y -- The center of the arc offset from the last call.<br>\n\t\tradius -- The radius of the arc.<br>\n\t\tstartAngle -- The start angle in radians.<br>\n\t\tendAngle -- The end angle in radians.<br>\n\t\tclockwise -- Sweep the arc clockwise. Defaults to *false*.<br><br>\n\n\t\tAdds an [page:EllipseCurve EllipseCurve] to the path, positioned relative to [page:.currentPoint]."
        },
        "bezierCurveTo": {
          "!type": "fn(cp1X: number, cp1Y: number, cp2X: number, cp2Y: number, x: number, y: number)",
          "!doc": "This creates a bezier curve from [page:.currentPoint] with (cp1X, cp1Y) and (cp2X, cp2Y) as control points and updates [page:.currentPoint] to x and y."
        },
        "fromPoints": {
          "!type": "fn(vector2s: [])",
          "!doc": "points --  array of [page:Vector2 Vector2s].<br><br>\n\n\t\t\tAdds to the from the points. Points\tare added to the [page:CurvePath.curves curves]\n\t\t\tarray as [page:LineCurve LineCurves]."
        },
        "ellipse": {
          "!type": "fn(x: number, y: number, xRadius: number, yRadius: number, startAngle: number, endAngle: number, clockwise: number, rotation: number)",
          "!doc": "x, y -- The center of the ellipse offset from the last call.<br>\n\t\t\txRadius -- The radius of the ellipse in the x axis.<br>\n\t\t\tyRadius -- The radius of the ellipse in the y axis.<br>\n\t\t\tstartAngle -- The start angle in radians.<br>\n\t\t\tendAngle -- The end angle in radians.<br>\n\t\t\tclockwise -- Sweep the ellipse clockwise. Defaults to *false*.<br>\n\t\t\trotation -- The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Optional, defaults to *0*.<br><br>\n\n\t\t\tAdds an [page:EllipseCurve EllipseCurve] to the path, positioned relative to [page:.currentPoint]."
        },
        "lineTo": {
          "!type": "fn(x: number, y: number)",
          "!doc": "Connects a [page:LineCurve] from [page:.currentPoint] to x, y onto the path."
        },
        "moveTo": {
          "!type": "fn(x: number, y: number)",
          "!doc": "Move the [page:.currentPoint] to x, y."
        },
        "quadraticCurveTo": {
          "!type": "fn(cpX: number, cpY: number, x: number, y: number)",
          "!doc": "Creates a quadratic curve from [page:.currentPoint] with cpX and cpY as control point and updates [page:.currentPoint] to x and y."
        }
      },
      "!doc": "A 2d path representation, comprising of points, lines, and cubes, similar to the 2D Canvas API.\n\t\tIt extends [page:CurvePath].",
      "!type": "fn(points: [])"
    },
    "Shape": {
      "!url": "http://threejs.org/docs/#Reference/extras/core/Shape",
      "prototype": {
        "!proto": "THREE.Path.prototype",
        "holes": {
          "!type": "array",
          "!doc": "An array of [page:Path paths] that define the holes in the shape."
        },
        "extractAllPoints": {
          "!type": "fn(divisions: number) -> []",
          "!doc": "divisions -- The fineness of the result.<br><br>\n\n\t\tCall [page:Curve.getPoints getPoints] on the shape and the [page:.holes] array, and return an object of the form:\n\t\t<code>\n{\n\tshape\n\tholes\n}\n\t\t</code>\n\t\twhere shape and holes are arrays of [page:Vector2 Vector2s]."
        },
        "extractPoints": {
          "!type": "fn(divisions: number) -> object",
          "!doc": "This is identical to [page:.extractAllPoints]."
        },
        "getPointsHoles": {
          "!type": "fn(divisions: number) -> []",
          "!doc": "divisions -- The fineness of the result.<br><br>\n\n\t\tGet an array of [page:Vector2 Vector2s] that represent the holes in the shape."
        }
      },
      "!doc": "Defines an arbitrary 2d shape plane using paths with optional holes. It can be used with [page:ExtrudeGeometry],\n\t\t[page:ShapeGeometry], to get points, or to get triangulated faces.",
      "!type": "fn()"
    },
    "ShapePath": {
      "!url": "http://threejs.org/docs/#Reference/extras/core/ShapePath",
      "prototype": {
        "!proto": "THREE.CurvePath.prototype",
        "subPaths": {
          "!type": "array",
          "!doc": "Array of [page:Path]s."
        },
        "currentPath": {
          "!type": "array",
          "!doc": "The current [page:Path] that is being generated."
        },
        "moveTo": {
          "!type": "fn(x: number, y: number)",
          "!doc": "Starts a new [page:Path] and calls [page:Path.moveTo]( x, y ) on that [page:Path].\n\t\tAlso points [page:ShapePath.currentPath currentPath] to that [page:Path]."
        },
        "lineTo": {
          "!type": "fn(x: number, y: number)",
          "!doc": "This creates a line from the [page:ShapePath.currentPath currentPath]'s\n\t\t\toffset to X and Y and updates the offset to X and Y."
        },
        "quadraticCurveTo": {
          "!type": "fn(cpX: number, cpY: number, x: number, y: number)",
          "!doc": "This creates a quadratic curve from the [page:ShapePath.currentPath currentPath]'s\n\t\t\toffset to x and y with cpX and cpY as control point and updates the [page:ShapePath.currentPath currentPath]'s\n\t\t\toffset to x and y."
        },
        "bezierCurveTo": {
          "!type": "fn(cp1X: number, cp1Y: number, cp2X: number, cp2Y: number, x: number, y: number)",
          "!doc": "This creates a bezier curve from the [page:ShapePath.currentPath currentPath]'s\n\t\t\t offset to x and y with cp1X, cp1Y and cp1X, cp1Y as control points and updates the\n\t\t\t [page:ShapePath.currentPath currentPath]'s offset to x and y."
        },
        "toShapes": {
          "!type": "fn(isCCW: bool, noHoles: bool) -> []",
          "!doc": "Converts the [page:ShapePath.subPaths subPaths] array into an array of Shapes. By default solid shapes are defined clockwise (CW) and holes are defined counterclockwise (CCW). If isCCW is set to true,\n\t\tthen those are flipped. If the paramater noHoles is set to true then all paths are set as solid shapes and isCCW is ignored.\n\t\t<br>"
        }
      },
      "!doc": "This is class is used to convert a series of shapes to an array of [page:Path]s, for example an SVG shape to a\n\t\tpath (see the example below). It is used internally by [page:Font] to convert a font in JSON format to a\n\t\tseries of paths.",
      "!type": "fn()"
    },
    "ArcCurve": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/ArcCurve",
      "prototype": {
        "!proto": "THREE.EllipseCurve.prototype"
      },
      "!doc": "Alias for [page:EllipseCurve]"
    },
    "CatmullRomCurve3": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/CatmullRomCurve3",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "points": {
          "!type": "[]",
          "!doc": "The array of array of [page:Vector3] points that define the curve."
        },
        "closed": {
          "!type": "bool",
          "!doc": "The curve will loop back onto itself when this is true. False by default"
        },
        "type": {
          "!type": "string",
          "!doc": "Possible values are `centripetal` (default), `chordal` and `catmullrom`."
        },
        "tension": {
          "!type": "float",
          "!doc": "When [page:.type] is `catmullrom`, defines catmullrom's tension. Defaults is *0.5*."
        }
      },
      "!doc": "Create a smooth 3d spline curve from a series of points using the\n\t\t\t[link:https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline Catmull-Rom] algorithm.",
      "!type": "fn(points: [])"
    },
    "CubicBezierCurve": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/CubicBezierCurve",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "v0": {
          "!type": "+THREE.Vector2",
          "!doc": "The starting point."
        },
        "v1": {
          "!type": "+THREE.Vector2",
          "!doc": "The first control point."
        },
        "v2": {
          "!type": "+THREE.Vector2",
          "!doc": "The second control point."
        },
        "v3": {
          "!type": "+THREE.Vector2",
          "!doc": "The ending point."
        }
      },
      "!doc": "Create a smooth 2d\n\t\t\t<a href=\"http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg\" target=\"_blank\">cubic bezier curve</a>,\n\t\t\tdefined by a start point, endpoint and two control points."
    },
    "CubicBezierCurve3": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/CubicBezierCurve3",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "v0": {
          "!type": "+THREE.Vector2",
          "!doc": "The starting point."
        },
        "v1": {
          "!type": "+THREE.Vector2",
          "!doc": "The first control point."
        },
        "v2": {
          "!type": "+THREE.Vector2",
          "!doc": "The second control point."
        },
        "v3": {
          "!type": "+THREE.Vector2",
          "!doc": "The ending point."
        }
      },
      "!doc": "Create a smooth 3d\n\t\t\t<a href=\"http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg\" target=\"_blank\">cubic bezier curve</a>,\n\t\t\tdefined by a start point, endpoint and two control points.",
      "!type": "fn(v0: +THREE.Vector3, v1: +THREE.Vector3, v2: +THREE.Vector3, v3: +THREE.Vector3)"
    },
    "EllipseCurve": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/EllipseCurve",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "aX": {
          "!type": "number",
          "!doc": "The X center of the ellipse."
        },
        "aY": {
          "!type": "number",
          "!doc": "The Y center of the ellipse."
        },
        "xRadius": {
          "!type": "Radians",
          "!doc": "The radius of the ellipse in the x direction."
        },
        "yRadius": {
          "!type": "Radians",
          "!doc": "The radius of the ellipse in the y direction."
        },
        "aStartAngle": {
          "!type": "number",
          "!doc": "The start angle of the curve in radians starting from the middle right side."
        },
        "aEndAngle": {
          "!type": "number",
          "!doc": "The end angle of the curve in radians starting from the middle right side."
        },
        "aClockwise": {
          "!type": "bool",
          "!doc": "Whether the ellipse is drawn clockwise."
        },
        "aRotation": {
          "!type": "number",
          "!doc": "The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional). Default is *0*."
        },
        "isEllipseCurve": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are ellipses. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        }
      },
      "!doc": "Creates a 2d curve in the shape of an ellipse. Setting the\n\t\t\t[page:Number xRadius] equal to the [page:Number yRadius] will result in a circle.",
      "!type": "fn(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: Radians, aEndAngle: Radians, aClockwise: bool, aRotation: Radians)"
    },
    "LineCurve": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/LineCurve",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "isLineCurve": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are LineCurves. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "v1": {
          "!type": "+THREE.Vector2",
          "!doc": "The start point."
        },
        "v2": {
          "!type": "+THREE.Vector2",
          "!doc": "The end point"
        }
      },
      "!doc": "A curve representing a 2d line segment.",
      "!type": "fn(v1: +THREE.Vector2, v2: +THREE.Vector2)"
    },
    "LineCurve3": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/LineCurve3",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "v1": {
          "!type": "+THREE.Vector3",
          "!doc": "The start point."
        },
        "v2": {
          "!type": "+THREE.Vector3",
          "!doc": "The end point."
        }
      },
      "!doc": "A curve representing a 3d line segment.",
      "!type": "fn(v1: +THREE.Vector3, v2: +THREE.Vector3)"
    },
    "QuadraticBezierCurve": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/QuadraticBezierCurve",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "v0": {
          "!type": "+THREE.Vector2",
          "!doc": "The startpoint."
        },
        "v1": {
          "!type": "+THREE.Vector2",
          "!doc": "The control point."
        },
        "v2": {
          "!type": "+THREE.Vector2",
          "!doc": "The endpoint."
        }
      },
      "!doc": "Create a smooth 2d\n\t\t\t<a href=\"http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif\" target=\"_blank\">quadratic bezier curve</a>,\n\t\t\tdefined by a startpoint, endpoint and a single control point.",
      "!type": "fn(v0: +THREE.Vector2, v1: +THREE.Vector2, v2: +THREE.Vector2)"
    },
    "QuadraticBezierCurve3": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/QuadraticBezierCurve3",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "v0": {
          "!type": "+THREE.Vector3",
          "!doc": "The startpoint."
        },
        "v1": {
          "!type": "+THREE.Vector3",
          "!doc": "The control point."
        },
        "v2": {
          "!type": "+THREE.Vector3",
          "!doc": "The endpoint."
        }
      },
      "!doc": "Create a smooth 3d\n\t\t\t<a href=\"http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif\" target=\"_blank\">quadratic bezier curve</a>,\n\t\t\tdefined by a startpoint, endpoint and a single control point.",
      "!type": "fn(v0: +THREE.Vector3, v1: +THREE.Vector3, v2: +THREE.Vector3)"
    },
    "SplineCurve": {
      "!url": "http://threejs.org/docs/#Reference/extras/curves/SplineCurve",
      "prototype": {
        "!proto": "THREE.Curve.prototype",
        "points": {
          "!type": "[]",
          "!doc": "The array of [page:Vector3] points that define the curve."
        }
      },
      "!doc": "Create a smooth 2d spline curve from a series of points. Internally this uses\n\t\t[page:CurveUtils.interpolate] to create the curve.",
      "!type": "fn(points: [])"
    },
    "CurveUtils": {
      "!url": "http://threejs.org/docs/#Reference/extras/CurveUtils",
      "prototype": {
        "interpolate": {
          "!type": "fn(p0, p1, p2, p3, t) -> number",
          "!doc": "t -- interpolation weight. <br>\n\t\tp0, p1, p2, p4 -- the points defining the spline curve.<br><br>\n\n\t\tUsed internally by [page:SplineCurve SplineCurve]."
        },
        "tangentQuadraticBezier": {
          "!type": "fn(t, p0, p1, p2) -> number",
          "!doc": "t -- the point at which to calculate the tangent. <br>\n\t\tp0, p1, p2 -- the three points defining the quadratic Bézier curve.<br><br>\n\n\t\tCalculate the tangent at the point t on a quadratic Bézier curve given by the three points.<br><br>\n\n\t\tUsed internally by [page:QuadraticBezierCurve QuadraticBezierCurve]."
        },
        "tangentCubicBezier": {
          "!type": "fn(t, p0, p1, p2, p3) -> number",
          "!doc": "t -- the point at which to calculate the tangent. <br>\n\t\tp0, p1, p2, p3 -- the points defining the cubic Bézier curve.<br><br>\n\n\t\tCalculate the tangent at the point t on a cubic Bézier curve given by the four points.<br><br>\n\n\t\tUsed internally by [page:CubicBezierCurve CubicBezierCurve]."
        },
        "tangentSpline": {
          "!type": "fn(t, p0, p1, p2, p3) -> number",
          "!doc": "t -- the point at which to calculate the tangent. <br>\n\t\tp0, p1, p2, p3 -- the points defining the spline curve.<br><br>\n\n\t\tCalculate the tangent at the point t on a spline curve given by the four points."
        }
      },
      "!doc": "A class containing utility functions for curves.<br>\n\n\t\tNote that these are all linear functions so it is neccessary to calculate seperately for\n\t\tx, y (and z, w if present) components of a curve."
    },
    "ImmediateRenderObject": {
      "!url": "http://threejs.org/docs/#Reference/extras/objects/ImmediateRenderObject",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "render": {
          "!type": "fn(renderCallback: function)",
          "!doc": "This function needs to be overridden to start the creation of the object and should call renderCallback when finished."
        }
      },
      "!doc": "base class for immediate rendering objects.",
      "!type": "fn()"
    },
    "MorphBlendMesh": {
      "!url": "http://threejs.org/docs/#Reference/extras/objects/MorphBlendMesh",
      "prototype": {
        "!proto": "THREE.Mesh.prototype",
        "animationsMap": {
          "!type": "object",
          "!doc": "An object of named animations as added by [page:MorphBlendMesh.createAnimation]."
        },
        "animationsList": {
          "!type": "array",
          "!doc": "The list of animations as added by [page:MorphBlendMesh.createAnimation]."
        },
        "setAnimationWeight": {
          "!type": "fn(name: string, weight: number)",
          "!doc": "Set the weight of how much this animation will apply to the overall morph. 0 is off, 1 is full weight."
        },
        "setAnimationFPS": {
          "!type": "fn(name: string, fps: number)",
          "!doc": "A frame is typically 1 morph target."
        },
        "createAnimation": {
          "!type": "fn(name: string, start: number, end: number, fps: number)",
          "!doc": "Creates an animation object that gets added to both the [page:MorphBlendMesh.animationsMap animationsMap] and\n\t\t[page:MorphBlendMesh.animationsList animationsList].<br><br>\n\n\t\tAnimation object:<br><br>\n\t\tstartFrame -- Starting frame<br>\n\t\tendFrame -- Ending frame<br>\n\t\tlength -- The number of frames<br>\n\t\tfps -- The frames per second<br>\n\t\tduration -- The length of the animation in seconds<br>\n\t\tlastFrame -- The previous frame that was played<br>\n\t\tcurrentFrame -- The current frame<br>\n\t\tactive -- Whether or not the animation is being played<br>\n\t\ttime -- The time in seconds of the animation<br>\n\t\tdirection -- Which way to play the animation<br>\n\t\tweight -- The weight of the animation<br>\n\t\tdirectionBackwards -- Is playing backwards<br>\n\t\tmirroredLoop -- Loop back and forth"
        },
        "playAnimation": {
          "!type": "fn(name: string)",
          "!doc": "Sets the animation to active and animation time to 0"
        },
        "update": {
          "!type": "fn(delta: number)",
          "!doc": "Updates and plays the animation"
        },
        "autoCreateAnimations": {
          "!type": "fn(fps: number)",
          "!doc": "Goes through the geometry's morphTargets and generates animations based on the morphTargets' names. Names\n\t\tare of the form \"walk_01\", \"walk_02\", \"walk_03\", etc or \"run001\", \"run002\", \"run003\"."
        },
        "setAnimationDuration": {
          "!type": "fn(name: string, duration: number)",
          "!doc": "Updates the animation object with proper values to update the duration."
        },
        "setAnimationDirectionForward": {
          "!type": "fn(name: string)",
          "!doc": "Sets the animation to play forwards"
        },
        "setAnimationDirectionBackward": {
          "!type": "fn(name: string)",
          "!doc": "Sets the animation to play backwards"
        },
        "getAnimationDuration": {
          "!type": "fn(name: string) -> number",
          "!doc": "Returns the duration in seconds of the animation. Returns -1 if it can't be found."
        },
        "getAnimationTime": {
          "!type": "fn(name: string) -> number",
          "!doc": "Returns the current time position of the animation."
        },
        "setAnimationTime": {
          "!type": "fn(name: string, time: number)",
          "!doc": "Sets the current time position of the animation"
        },
        "stopAnimation": {
          "!type": "fn(name: string)",
          "!doc": "Stops the playback of the animation"
        }
      },
      "!doc": "A mesh that can blend together multiple animated morph targets.",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material)"
    },
    "SceneUtils": {
      "!url": "http://threejs.org/docs/#Reference/extras/SceneUtils",
      "prototype": {
        "createMultiMaterialObject": {
          "!type": "fn(geometry: +THREE.Geometry, materials: []) -> +THREE.Group",
          "!doc": "Creates a new Group that contains a new mesh for each material defined in materials. Beware that this is not the same as MultiMaterial which defines multiple material for 1 mesh.<br>\n\t\tThis is mostly useful for objects that need both a material and a wireframe implementation."
        },
        "attach": {
          "!type": "fn(child: +THREE.Object3D, scene: +THREE.Object3D, parent: +THREE.Object3D)",
          "!doc": "Attaches the object to the parent without the moving the object in the worldspace. Beware that to do this the matrixWorld needs to be updated, this can be done by calling the updateMatrixWorld method on the parent object."
        },
        "detach": {
          "!type": "fn(child: +THREE.Object3D, parent: +THREE.Object3D, scene: +THREE.Object3D)",
          "!doc": "Detaches the object from the parent and adds it back to the scene without moving in worldspace. Beware that to do this the matrixWorld needs to be updated, this can be done by calling the updateMatrixWorld method on the parent object."
        }
      },
      "!doc": "A class containing useful utility functions for scene manipulation."
    },
    "ShapeUtils": {
      "!url": "http://threejs.org/docs/#Reference/extras/ShapeUtils",
      "prototype": {
        "area": {
          "!type": "fn(contour) -> number",
          "!doc": "contour -- 2D polygon.<br><br>\n\n\t\tCalculate area of a ( 2D ) contour polygon.<br><br>"
        },
        "b2": {
          "!type": "fn(t, p0, p1, p2) -> number",
          "!doc": "t -- number<br>\n\t\tp0, p1, p2 -- x, y, z or w components of a quadratic bezier curve.<br><br>\n\n\t\tNote that this is a linear function so it is neccessary to calculate seperately for\n\t\tx, y (and z for 3D curves) components of a curve.<br><br>\n\n\t\tUsed internally by [page:QuadraticBezierCurve QuadraticBezierCurve],\n\t\t[page:QuadraticBezierCurve3 QuadraticBezierCurve3] and [page:Font Font]."
        },
        "b3": {
          "!type": "fn(t, p0, p1, p2, p3) -> number",
          "!doc": "t -- number. <br>\n\t\tp0, p1, p2, p3 -- x, y or z components of a cubic bezier curve..<br><br>\n\n\t\tNote that this is a linear function so it is neccessary to calculate seperately for\n\t\tx, y (and z for 3D curves) components of a curve.<br><br>\n\n\t\tUsed internally by [page:CubicBezierCurve CubicBezierCurve],\n\t\t[page:CubicBezierCurve3 CubicBezierCurve3] and [page:Font Font]."
        },
        "isClockwise": {
          "!type": "fn(pts) -> bool",
          "!doc": "pts -- points defining a 2D polygon<br><br>\n\n\t\tNote that this is a linear function so it is neccessary to calculate seperately for\n\t\tx, y  components of a polygon.<br><br>\n\n\t\tUsed internally by [page:Path Path],\n\t\t[page:ExtrudeGeometry ExtrudeGeometry] and [page:ShapeBufferGeometry ShapeBufferGeometry]."
        },
        "triangulate": {
          "!type": "fn(contour, indices)",
          "!doc": "contour --  2D polygon.<br>\n\t\tindices -- <br><br>\n\n\t\tUsed internally by [page:ExtrudeGeometry ExtrudeGeometry]\n\t\tand [page:ShapeBufferGeometry ShapeBufferGeometry] to calculate faces."
        },
        "triangulateShape": {
          "!type": "fn(contour, holes)",
          "!doc": "contour -- 2D polygon.<br>\n\t\tholes -- array of holes<br><br>\n\n\t\tUsed internally by [page:ExtrudeGeometry ExtrudeGeometry]\n\t\tand [page:ShapeBufferGeometry ShapeBufferGeometry] to calculate faces in shapes with holes."
        }
      },
      "!doc": "A class containing utility functions for shapes.<br>\n\n\t\tNote that these are all linear functions so it is neccessary to calculate seperately for\n\t\tx, y (an z, w if present) components of a vector."
    },
    "BoxBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/BoxBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:BoxGeometry].",
      "!type": "fn(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number)"
    },
    "BoxGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/BoxGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "BoxGeometry is the quadrilateral primitive geometry class. It is typically used for creating a cube or irregular quadrilateral of the dimensions provided with the 'width', 'height', and 'depth' constructor arguments.",
      "!type": "fn(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number)"
    },
    "CircleBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/CircleBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:CircleGeometry].",
      "!type": "fn(radius: number, segments: number, thetaStart: number, thetaLength: number)"
    },
    "CircleGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/CircleGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "CircleGeometry is a simple shape of Euclidean geometry.  It is contructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius.  It is built counter-clockwise from a start angle and a given central angle.  It can also be used to create regular polygons, where the number of segments determines the number of sides.",
      "!type": "fn(radius: number, segments: number, thetaStart: number, thetaLength: number)"
    },
    "ConeBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ConeBufferGeometry",
      "prototype": {
        "!proto": "THREE.CylinderBufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:ConeGeometry].",
      "!type": "fn(radius: number, height: number, radiusSegments: number, heightSegments: number, openEnded: bool, thetaStart: number, thetaLength: number)"
    },
    "ConeGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ConeGeometry",
      "prototype": {
        "!proto": "THREE.CylinderGeometry.prototype"
      },
      "!doc": "A class for generating cone geometries",
      "!type": "fn(radius: number, height: number, radialSegments: number, heightSegments: number, openEnded: bool, thetaStart: number, thetaLength: number)"
    },
    "CylinderBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/CylinderBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:CylinderGeometry].",
      "!type": "fn(radiusTop: number, radiusBottom: number, height: number, radiusSegments: number, heightSegments: number, openEnded: bool, thetaStart: number, thetaLength: number)"
    },
    "CylinderGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/CylinderGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "A class for generating cylinder geometries",
      "!type": "fn(radiusTop: number, radiusBottom: number, height: number, radiusSegments: number, heightSegments: number, openEnded: bool, thetaStart: number, thetaLength: number)"
    },
    "DodecahedronBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/DodecahedronBufferGeometry",
      "prototype": {
        "!proto": "THREE.PolyhedronBufferGeometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating a dodecahedron geometries.",
      "!type": "fn(radius: number, detail: number)"
    },
    "DodecahedronGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/DodecahedronGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating a dodecahedron geometries.",
      "!type": "fn(radius: number, detail: number)"
    },
    "EdgesGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/EdgesGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This can be used as a helper object to view the edges of a [page:Geometry Geometry] object.",
      "!type": "fn(geometry: +THREE.Geometry, thresholdAngle: number)"
    },
    "ExtrudeGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ExtrudeGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "addShapeList": {
          "!type": "fn(shapes: [], options: object)",
          "!doc": "Adds the shapes to the list to extrude."
        },
        "addShape": {
          "!type": "fn(shape: +THREE.Shape, options: object)",
          "!doc": "Add the shape to the list to extrude."
        }
      },
      "!doc": "Creates extruded geometry from a path shape.",
      "!type": "fn(shapes: [], options: object)"
    },
    "IcosahedronBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/IcosahedronBufferGeometry",
      "prototype": {
        "!proto": "THREE.PolyhedronBufferGeometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating an icosahedron geometry.",
      "!type": "fn(radius: number, detail: number)"
    },
    "IcosahedronGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/IcosahedronGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating an icosahedron geometry.",
      "!type": "fn(radius: number, detail: number)"
    },
    "LatheBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/LatheBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:LatheGeometry].",
      "!type": "fn(points: [], segments: number, phiStart: number, phiLength: number)"
    },
    "LatheGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/LatheGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "Class for generating meshes with axial symmetry. Possible uses include donuts, pipes, vases etc. The lathe rotate around the Y axis.",
      "!type": "fn(points: [], segments: number, phiStart: number, phiLength: number)"
    },
    "OctahedronBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/OctahedronBufferGeometry",
      "prototype": {
        "!proto": "THREE.PolyhedronBufferGeometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating an octahedron geometry.",
      "!type": "fn(radius: number, detail: number)"
    },
    "OctahedronGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/OctahedronGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating an octahedron geometry.",
      "!type": "fn(radius: number, detail: number)"
    },
    "ParametricBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ParametricBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "Generate geometry representing a parametric surface.",
      "!type": "fn(func: function, slices: number, stacks: number)"
    },
    "ParametricGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ParametricGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "Generate geometry representing a parametric surface.",
      "!type": "fn(func: function, slices: number, stacks: number)"
    },
    "PlaneBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/PlaneBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:PlaneGeometry].",
      "!type": "fn(width: number, height: number, widthSegments: number, heightSegments: number)"
    },
    "PlaneGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/PlaneGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "A class for generating plane geometries",
      "!type": "fn(width: number, height: number, widthSegments: number, heightSegments: number)"
    },
    "PolyhedronBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/PolyhedronBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A polyhedron is a solid in three dimensions with flat faces. This class will take an array of vertices,\n\t\t\tproject them onto a sphere, and then divide them up to the desired level of detail. This class is used\n\t\t\tby [page:DodecahedronBufferGeometry], [page:IcosahedronBufferGeometry], [page:OctahedronBufferGeometry],\n\t\t\tand [page:TetrahedronBufferGeometry] to generate their respective geometries.",
      "!type": "fn(vertices: [], faces: [], radius: number, detail: number)"
    },
    "PolyhedronGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/PolyhedronGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A polyhedron is a solid in three dimensions with flat faces. This class will take an array of vertices,\n\t\t\tproject them onto a sphere, and then divide them up to the desired level of detail.",
      "!type": "fn(vertices: [], faces: [], radius: number, detail: number)"
    },
    "RingBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/RingBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:RingGeometry].",
      "!type": "fn(innerRadius: number, outerRadius: number, thetaSegments: number, phiSegments: number, thetaStart: number, thetaLength: number)"
    },
    "RingGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/RingGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "A class for generating a two-dimensional ring geometry.",
      "!type": "fn(innerRadius: number, outerRadius: number, thetaSegments: number, phiSegments: number, thetaStart: number, thetaLength: number)"
    },
    "ShapeBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ShapeBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "Creates an one-sided polygonal geometry from one or more path shapes.",
      "!type": "fn(shapes: [], curveSegments: number)"
    },
    "ShapeGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/ShapeGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "Creates an one-sided polygonal geometry from one or more path shapes.",
      "!type": "fn(shapes: [], curveSegments: number)"
    },
    "SphereBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/SphereBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:SphereGeometry].",
      "!type": "fn(radius: number, widthSegments: number, heightSegments: number, phiStart: number, phiLength: number, thetaStart: number, thetaLength: number)"
    },
    "SphereGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/SphereGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "A class for generating sphere geometries",
      "!type": "fn(radius: number, widthSegments: number, heightSegments: number, phiStart: number, phiLength: number, thetaStart: number, thetaLength: number)"
    },
    "TetrahedronBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TetrahedronBufferGeometry",
      "prototype": {
        "!proto": "THREE.PolyhedronBufferGeometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating a tetrahedron geometries.",
      "!type": "fn(radius: number, detail: number)"
    },
    "TetrahedronGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TetrahedronGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        }
      },
      "!doc": "A class for generating a tetrahedron geometries.",
      "!type": "fn(radius: number, detail: number)"
    },
    "TextGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TextGeometry",
      "prototype": {
        "!proto": "THREE.ExtrudeGeometry.prototype"
      },
      "!doc": "This object creates a 3D object of text as a single object.",
      "!type": "fn(text: string, parameters: object)"
    },
    "TorusBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TorusBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:TorusGeometry].",
      "!type": "fn(radius: number, tube: number, radialSegments: number, tubularSegments: number, arc: number)"
    },
    "TorusGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TorusGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "A class for generating torus geometries",
      "!type": "fn(radius: number, tube: number, radialSegments: number, tubularSegments: number, arc: number)"
    },
    "TorusKnotBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TorusKnotBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This is the [page:BufferGeometry] port of [page:TorusKnotGeometry].",
      "!type": "fn(radius: number, tube: number, tubularSegments: number, radialSegments: number, p: number, q: number)"
    },
    "TorusKnotGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TorusKnotGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype"
      },
      "!doc": "Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q.  If p and q are not coprime, the result will be a torus link.",
      "!type": "fn(radius: number, tube: number, tubularSegments: number, radialSegments: number, p: number, q: number)"
    },
    "TubeBufferGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TubeBufferGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        },
        "tangents": {
          "!type": "[]",
          "!doc": "An array of [page:Vector3] tangents"
        },
        "normals": {
          "!type": "[]",
          "!doc": "An array of [page:Vector3] normals"
        },
        "binormals": {
          "!type": "[]",
          "!doc": "An array of [page:Vector3] binormals"
        }
      },
      "!doc": "Creates a tube that extrudes along a 3d curve.",
      "!type": "fn(path: +THREE.Curve, tubularSegments: number, radius: number, radiusSegments: number, closed: bool)"
    },
    "TubeGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/TubeGeometry",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "parameters": {
          "!type": "object",
          "!doc": "An object with all of the parameters that were used to generate the geometry."
        },
        "tangents": {
          "!type": "[]",
          "!doc": "An array of [page:Vector3] tangents"
        },
        "normals": {
          "!type": "[]",
          "!doc": "An array of [page:Vector3] normals"
        },
        "binormals": {
          "!type": "[]",
          "!doc": "An array of [page:Vector3] binormals"
        }
      },
      "!doc": "Creates a tube that extrudes along a 3d curve.",
      "!type": "fn(path: +THREE.Curve, tubularSegments: number, radius: number, radiusSegments: number, closed: bool)"
    },
    "WireframeGeometry": {
      "!url": "http://threejs.org/docs/#Reference/geometries/WireframeGeometry",
      "prototype": {
        "!proto": "THREE.BufferGeometry.prototype"
      },
      "!doc": "This can be used as a helper object to view a [page:Geometry Geometry] object as a wireframe.",
      "!type": "fn(geometry: +THREE.Geometry)"
    },
    "ArrowHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/ArrowHelper",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "line": {
          "!type": "+THREE.Line",
          "!doc": "Contains the line part of the arrowHelper."
        },
        "cone": {
          "!type": "+THREE.Mesh",
          "!doc": "Contains the cone part of the arrowHelper."
        },
        "setColor": {
          "!type": "fn(hex: number)",
          "!doc": "hex -- The hexadicmal value of the color.<br><br>\n\n\t\tSets the color of the arrowHelper."
        },
        "setLength": {
          "!type": "fn(length: number, headLength: number, headWidth: number)",
          "!doc": "length -- The desired length.<br>\n\t\theadLength -- The length of the head of the arrow.<br>\n\t\theadWidth -- The length of the width of the arrow.<br><br>\n\n\t\tSets the length of the arrowhelper."
        },
        "setDirection": {
          "!type": "fn(dir: +THREE.Vector3)",
          "!doc": "dir -- The desired direction. Must be a unit vector.<br><br>\n\n\t\tSets the direction of the arrowhelper."
        }
      },
      "!doc": "An 3D arrow object for visualizing directions.",
      "!type": "fn(dir: +THREE.Vector3, origin: +THREE.Vector3, length: number, hex: number, headLength: number, headWidth: number)"
    },
    "AxisHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/AxisHelper",
      "prototype": {
        "!proto": "THREE.LineSegments.prototype"
      },
      "!doc": "An axis object to visualize the the 3 axes in a simple way. <br>\n\t\t\tThe X axis is red. The Y axis is green. The Z axis is blue.",
      "!type": "fn(size: number)"
    },
    "BoxHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/BoxHelper",
      "prototype": {
        "!proto": "THREE.LineSegments.prototype",
        "update": {
          "!type": "fn(object: +THREE.Object3D)",
          "!doc": "Updates the helper's geometry to match the dimensions of the\n\t\t \tof the passed object, including any children. See [page:Box3.setFromObject]."
        }
      },
      "!doc": "Helper object to show the world-axis-aligned bounding box around an object.\n\n\t\t\tNote that the object must have a [page:Geometry] or [page:BufferGeometry] for this to work,\n\t\t\tso it won't work with [page:Sprite Sprites].",
      "!type": "fn(object: +THREE.Object3D, color: +THREE.Color)"
    },
    "CameraHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/CameraHelper",
      "prototype": {
        "!proto": "THREE.LineSegments.prototype",
        "camera": {
          "!type": "+THREE.Camera",
          "!doc": "The camera being visualized."
        },
        "pointMap": {
          "!type": "object",
          "!doc": "This contains the points used to visualize the camera."
        },
        "matrix": {
          "!type": "object",
          "!doc": "Reference to the [page:Object3D.matrixWorld camera.matrixWorld]."
        },
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\tcamera's [page:Object3D.matrixWorld matrixWorld]."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the helper based on the projectionMatrix of the camera."
        }
      },
      "!doc": "This helps with visualizing what a camera contains in its frustum.<br>\n\t\tIt visualizes the frustum of a camera using a [page:LineSegments].",
      "!type": "fn(camera: +THREE.Camera)"
    },
    "DirectionalLightHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/DirectionalLightHelper",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "lightPlane": {
          "!type": "+THREE.Line",
          "!doc": "Contains the line mesh showing the location of the directional light."
        },
        "light": {
          "!type": "+THREE.DirectionalLight",
          "!doc": "Reference to the [page:DirectionalLight directionalLight] being visualized."
        },
        "matrix": {
          "!type": "object",
          "!doc": "Reference to the light's [page:Object3D.matrixWorld matrixWorld]."
        },
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\tlight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Dispose of the directionalLightHelper."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the helper to match the position and direction of the [page:.light directionalLight] being visualized."
        }
      },
      "!doc": "Helper object to assist with visualizing a [page:DirectionalLight]'s effect on the scene.\n\n\t\t\tThis consists of plane and a line representing the light's position and direction.",
      "!type": "fn(light: +THREE.DirectionalLight, size: number)"
    },
    "FaceNormalsHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/FaceNormalsHelper",
      "prototype": {
        "!proto": "THREE.LineSegments.prototype",
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\tobjects's [page:Object3D.matrixWorld matrixWorld]."
        },
        "object": {
          "!type": "+THREE.Object3D",
          "!doc": "The object for which the face normals are being visualized."
        },
        "size": {
          "!type": "number",
          "!doc": "Length of the arrows. Default is *1*."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the face normal preview based on movement of the object."
        }
      },
      "!doc": "Renders [page:ArrowHelper arrows] to visualize an object's [page:Face3 face] normals.\n\t\t\tRequires  that face normals have been specified on all \t[page:Face3 faces] or calculated with [page:Geometry.computeFaceNormals computeFaceNormals].",
      "!type": "fn(object: +THREE.Object3D, size: number, color: +THREE.Color, linewidth: number)"
    },
    "GridHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/GridHelper",
      "prototype": {
        "!proto": "THREE.Line.prototype"
      },
      "!doc": "The GridHelper is an object to define grids. Grids are two-dimensional arrays of lines.",
      "!type": "fn(size: number, divisions: number, colorCenterLine: +THREE.Color, colorGrid: +THREE.Color)"
    },
    "HemisphereLightHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/HemisphereLightHelper",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "light": {
          "!type": "+THREE.HemisphereLight",
          "!doc": "Reference to the HemisphereLight being visualized."
        },
        "matrix": {
          "!type": "object",
          "!doc": "Reference to the hemisphereLight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\themisphereLight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Dispose of the hemisphereLightHelper."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the helper to match the position and direction of the [page:.light]."
        }
      },
      "!doc": "Creates a visual aid consisting of a spherical [page:Mesh] for a [page:HemisphereLight HemisphereLight].",
      "!type": "fn(light: +THREE.HemisphereLight, sphereSize: number)"
    },
    "PointLightHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/PointLightHelper",
      "prototype": {
        "!proto": "THREE.Mesh.prototype",
        "light": {
          "!type": "+THREE.PointLight",
          "!doc": "The [page:PointLight] that is being visualized."
        },
        "matrix": {
          "!type": "object",
          "!doc": "Reference to the pointLight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\tpointLight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Dispose of the pointLightHelper."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the helper to match the position of the [page:.light]."
        }
      },
      "!doc": "This displays a helper object consisting of a spherical [page:Mesh] for visualizing\n\t\t\t a [page:PointLight].",
      "!type": "fn(light: +THREE.PointLight, sphereSize: number)"
    },
    "PolarGridHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/PolarGridHelper",
      "prototype": {
        "!proto": "THREE.Line.prototype"
      },
      "!doc": "The PolarGridHelper is an object to define polar grids. Grids are two-dimensional arrays of lines.",
      "!type": "fn(radius: number, radials: number, circles: number, divisions: number, color1: +THREE.Color, color2: +THREE.Color)"
    },
    "RectAreaLightHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/RectAreaLightHelper",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "light": {
          "!type": "+THREE.RectAreaLight",
          "!doc": "Reference to the RectAreaLight being visualized."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Dispose of the rectAreaLightHelper."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the helper to match the position and direction of the [page:.light]."
        }
      },
      "!doc": "Creates a visual aid for a [page:RectAreaLight].",
      "!type": "fn(light: +THREE.RectAreaLight)"
    },
    "SkeletonHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/SkeletonHelper",
      "prototype": {
        "!proto": "THREE.LineSegments.prototype",
        "bones": {
          "!type": "[]",
          "!doc": "The list of bones that the helper renders as [page:Line Lines]."
        },
        "root": {
          "!type": "object",
          "!doc": "The object passed in the constructor."
        },
        "getBoneList": {
          "!type": "fn(object) -> []",
          "!doc": "getBoneList -- the object used in the constructor.<br><br>\n\n\t\tThis is called automatically to generate a list of bones from the object passed in the constructor."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Update the helper. Call in the render loop if animating the model."
        }
      },
      "!doc": "A helper object to assist with visualizing a [page:Skeleton Skeleton].\n\t\tThe helper is renderered using a [page:LineBasicMaterial LineBasicMaterial].",
      "!type": "fn(object)"
    },
    "SpotLightHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/SpotLightHelper",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "cone": {
          "!type": "+THREE.LineSegments",
          "!doc": "[page:LineSegments] used to visualize the light."
        },
        "light": {
          "!type": "+THREE.SpotLight",
          "!doc": "Reference to the [page:SpotLight] being visualized."
        },
        "matrix": {
          "!type": "object",
          "!doc": "Reference to the spotLight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\tspotLight's [page:Object3D.matrixWorld matrixWorld]."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the light helper."
        }
      },
      "!doc": "This displays a cone shaped helper object for a [page:SpotLight].",
      "!type": "fn(light: +THREE.SpotLight)"
    },
    "VertexNormalsHelper": {
      "!url": "http://threejs.org/docs/#Reference/helpers/VertexNormalsHelper",
      "prototype": {
        "!proto": "THREE.Line.prototype",
        "matrixAutoUpdate": {
          "!type": "object",
          "!doc": "See [page:Object3D.matrixAutoUpdate]. Set to *false* here as the helper is using the\n\t\t\tobjects's [page:Object3D.matrixWorld matrixWorld]."
        },
        "object": {
          "!type": "+THREE.Object3D",
          "!doc": "The object for which the vertex normals are being visualized."
        },
        "size": {
          "!type": "number",
          "!doc": "Length of the arrows. Default is *1*."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the vertex normal preview based on movement of the object."
        }
      },
      "!doc": "Renders [page:ArrowHelper arrows] to visualize an object's vertex normal vectors.\n\t\t\tRequires that normals have been specified in a [page:BufferAttribute custom attribute] or\n\t\t\thave been calculated using [page:Geometry.computeVertexNormals computeVertexNormals].<br><br>\n\n\t\t\tUnline [page:FaceNormalsHelper], this works with [page:BufferGeometry].",
      "!type": "fn(object: +THREE.Object3D, size: number, color: Hex, linewidth: number)"
    },
    "AmbientLight": {
      "!url": "http://threejs.org/docs/#Reference/lights/AmbientLight",
      "prototype": {
        "!proto": "THREE.Light.prototype",
        "castShadow": {
          "!type": "bool",
          "!doc": "This is set to *undefined* in the constructor as ambient lights cannot cast shadows."
        },
        "isAmbientLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are ambient lights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        }
      },
      "!doc": "This light globally illuminates all objects in the scene equally.<br><br>\n\n\t\t\tThis light cannot be used to cast shadows as it does not have a direction.",
      "!type": "fn(color: number, intensity: number)"
    },
    "DirectionalLight": {
      "!url": "http://threejs.org/docs/#Reference/lights/DirectionalLight",
      "prototype": {
        "!proto": "THREE.Light.prototype",
        "castShadow": {
          "!type": "bool",
          "!doc": "If set to *true* light will cast dynamic shadows. *Warning*: This is expensive and\n\t\t\trequires tweaking to get shadows looking right. See the [page:DirectionalLightShadow] for details.\n\t\t\tThe default is *false*."
        },
        "isDirectionalLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are dircrectional lights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "position": {
          "!type": "+THREE.Vector3",
          "!doc": "This is set equal to [page:Object3D.DefaultUp] (0, 1, 0), so that the light shines from the top down."
        },
        "shadow": {
          "!type": "+THREE.DirectionalLightShadow",
          "!doc": "A [page:DirectionalLightShadow] used to calculate shadows for this light."
        },
        "target": {
          "!type": "+THREE.Object3D",
          "!doc": "The DirectionalLight points from its [page:.position position] to target.position. The default\n\t\t\tposition of the target is *(0, 0, 0)*.<br>\n\n\t\t\t*Note*: For the the target's position to be changed to anything other than the default,\n\t\t\tit must be added to the [page:Scene scene] using\n\t\t\t<code>\n\t\t\t\tscene.add( light.target );\n\t\t\t</code>\n\n\t\t\tThis is so that the target's [page:Object3D.matrixWorld matrixWorld] gets automatically\n\t\t\tupdated each frame.<br><br>\n\n\t\t\tIt is also possible to set the target to be another object in the scene (anything with a\n\t\t\t[page:Object3D.position position] property), like so:\n\t\t\t<code>\n\tvar targetObject = new THREE.Object3D();\n\tscene.add(targetObject);\n\n\tlight.target = targetObject;\n\t\t\t</code>\n\t\t\tThe directionalLight will now track the target object."
        },
        "copy": {
          "!type": "fn(source: +THREE.DirectionalLight) -> +THREE.DirectionalLight",
          "!doc": "Copies value of all the properties from the [page:DirectionalLight source] to this\n\t\tDirectionalLight."
        }
      },
      "!doc": "A light that gets emitted in a specific direction. This light will behave\tas though it is\n\t\t\tinfinitely far away and the rays produced from it are all parallel. The common use case\n\t\t\tfor this is to simulate daylight; the sun is far enough away that its position can be\n\t\t\tconsidered to be infinite, and all light rays coming from it are parallel.<br><br>\n\n\t\t\tThis light can cast shadows - see the [page:DirectionalLightShadow] page for details.",
      "!type": "fn(hex: number, intensity: number)"
    },
    "HemisphereLight": {
      "!url": "http://threejs.org/docs/#Reference/lights/HemisphereLight",
      "prototype": {
        "!proto": "THREE.Light.prototype",
        "castShadow": {
          "!type": "bool",
          "!doc": "This is set to *undefined* in the constructor as hemisphere lights cannot cast shadows."
        },
        "color": {
          "!type": "number",
          "!doc": "The light's sky color, as passed in the constructor.\n\t\t\tDefault is a new [page:Color] set to white (0xffffff)."
        },
        "groundColor": {
          "!type": "number",
          "!doc": "The light's ground color, as passed in the constructor.\n\t\t\tDefault is a new [page:Color] set to white (0xffffff)."
        },
        "isHemisphereLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are hemisphere lights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "position": {
          "!type": "+THREE.Vector3",
          "!doc": "This is set equal to [page:Object3D.DefaultUp] (0, 1, 0), so that the light shines from the top down."
        },
        "copy": {
          "!type": "fn(source: +THREE.HemisphereLight) -> +THREE.HemisphereLight",
          "!doc": "Copies the value of [page:.color color], [page:.intensity intensity] and\n\t\t\t[page:.groundColor groundColor] from the [page:Light source] light into this one."
        }
      },
      "!doc": "A light source positioned directly above the scene, with color fading from the\n\t\t\tsky color to the ground color. <br><br>\n\n\t\t\tThis light cannot be used to cast shadows.",
      "!type": "fn(skyColor: number, groundColor: number, intensity: number)"
    },
    "Light": {
      "!url": "http://threejs.org/docs/#Reference/lights/Light",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "color": {
          "!type": "+THREE.Color",
          "!doc": "Color of the light. Defaults to a new [page:Color] set to white, if not passed in the constructor.<br>"
        },
        "intensity": {
          "!type": "number",
          "!doc": "The light's intensity, or strength.<br>\n\t\t\tIn [page:WebGLRenderer.physicallyCorrectLights physically correct] mode, the product of\n\t\t\t[page:.color color] * intensity is interpreted as luminous intensity measured in candela.<br>\n\t\t\tDefault - *1.0*."
        },
        "isLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are lights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "copy": {
          "!type": "fn(source: +THREE.Light) -> +THREE.Light",
          "!doc": "Copies the value of [page:.color color] and [page:.intensity intensity] from the\n\t\t[page:Light source] light into this one."
        },
        "toJSON": {
          "!type": "fn(meta: string) -> JSON",
          "!doc": "Return Light data in JSON format."
        }
      },
      "!doc": "Abstract base class for lights - all other light types inherit the properties and methods\n\t\t\tdescribed here.",
      "!type": "fn(color: number, intensity: float)"
    },
    "PointLight": {
      "!url": "http://threejs.org/docs/#Reference/lights/PointLight",
      "prototype": {
        "!proto": "THREE.Light.prototype",
        "decay": {
          "!type": "number",
          "!doc": "The amount the light dims along the distance of the light<br>\n\t\t\tIn [page:WebGLRenderer.physicallyCorrectLights physically correct] mode, decay = 2 leads to physically realistic light falloff.<br>\n\t\t\tDefault is *1*."
        },
        "distance": {
          "!type": "number",
          "!doc": "If non-zero, light will attenuate linearly from maximum intensity at the light's\n\t\t\tposition down to zero at this distance from the light. Default is *0.0*."
        },
        "isPointLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are point lights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "power": {
          "!type": "number",
          "!doc": "The light's power.<br>\n\t\t\tIn [page:WebGLRenderer.physicallyCorrectLights physically correct] mode, the luminous\n\t\t\tpower of the light measured in lumens. Default - *4PI*. <br><br>\n\n\t\t\tThis is directly related to the [page:.intensity intensity] in the ratio\n\t\t\t<code>\n\t\t\t\tpower = intensity * 4Π\n\t\t\t</code>\n\t\t\tand changing this will also change the intensity."
        },
        "shadow": {
          "!type": "+THREE.LightShadow",
          "!doc": "A [page:LightShadow] used to calculate shadows for this light.<br><br>\n\n\t\t\t The lightShadow's [page:LightShadow.camera camera]\n\t\t\tis set to a  [page:PerspectiveCamera] with [page:PerspectiveCamera.fov fov] of 90,\n\t\t\t[page:PerspectiveCamera.aspect aspect] of 1, [page:PerspectiveCamera.near near]\n\t\t\tclipping plane at 0.5 and\t[page:PerspectiveCamera.far far] clipping plane at 500."
        },
        "copy": {
          "!type": "fn(source: +THREE.PointLight) -> +THREE.PointLight",
          "!doc": "Copies value of all the properties from the [page:PointLight source] to this\n\t\tPointLight."
        }
      },
      "!doc": "A light that gets emitted from a single point in all directions. A common use case for this\n\t\t\tis to replicate the light emitted from a bare lightbulb.<br><br>\n\n\t\t\t This light can cast shadows - see [page:LightShadow] page for details.",
      "!type": "fn(color: number, intensity: number, distance: number, decay: number)"
    },
    "RectAreaLight": {
      "!url": "http://threejs.org/docs/#Reference/lights/RectAreaLight",
      "prototype": {
        "!proto": "THREE.Light.prototype",
        "castShadow": {
          "!type": "bool",
          "!doc": "If set to *true* light will cast dynamic shadows. *Warning*: This is expensive and\n\t\t\trequires tweaking to get shadows looking right. See the [page:RectAreaLightShadow] for details.\n\t\t\tThe default is *false*.<br><br>\n\n\t\t\t<em>Note:</em> this is not yet implemented for this light type! (r83)"
        },
        "decay": {
          "!type": "number",
          "!doc": "The amount the light dims along the distance of the light.<br>\n\t\t\tIn [page:WebGLRenderer.physicallyCorrectLights physically correct] mode, decay = 2 leads to\n\t\t\tphysically realistic light falloff. The default is *1*.<br><br>\n\n\t\t\t<em>Note:</em> this is not yet implemented for this light type! (r83)"
        },
        "distance": {
          "!type": "number",
          "!doc": "If non-zero, light will attenuate linearly from maximum intensity at the light's\n\t\t\tposition down to zero at this distance from the light. Default is *0.0*.<br><br>\n\n\t\t\t<em>Note:</em> this is not yet implemented for this light type! (r83)"
        },
        "isRectAreaLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are RectAreaLights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "position": {
          "!type": "+THREE.Vector3",
          "!doc": "This is set equal to [page:Object3D.DefaultUp] (0, 1, 0), so that the light shines from the top down."
        },
        "shadow": {
          "!type": "+THREE.RectAreaLightShadow",
          "!doc": "A [page:RectAreaLightShadow] used to calculate shadows for this light.<br><br>\n\n\t\t\t<em>Note:</em> this is not yet implemented for this light type! (r83)"
        },
        "target": {
          "!type": "+THREE.Object3D",
          "!doc": "The RectAreaLight points from its [page:.position position] to target.position. The default\n\t\t\tposition of the target is *(0, 0, 0)*.<br>\n\n\t\t\t*Note*: For the the target's position to be changed to anything other than the default,\n\t\t\tit must be added to the [page:Scene scene] using\n\t\t\t<code>\n\t\t\t\tscene.add( light.target );\n\t\t\t</code>\n\n\t\t\tThis is so that the target's [page:Object3D.matrixWorld matrixWorld] gets automatically\n\t\t\tupdated each frame.<br><br>\n\n\t\t\tIt is also possible to set the target to be another object in the scene (anything with a\n\t\t\t[page:Object3D.position position] property), like so:\n\t\t\t<code>\nvar targetObject = new THREE.Object3D();\nscene.add(targetObject);\n\nlight.target = targetObject;\n\t\t\t</code>\n\t\t\tThe RectAreaLight will now track the target object."
        },
        "copy": {
          "!type": "fn(source: +THREE.RectAreaLight) -> +THREE.RectAreaLight",
          "!doc": "Copies value of all the properties from the [page:RectAreaLight source] to this\n\t\tRectAreaLight."
        }
      },
      "!doc": "This light gets emitted uniformly across the face a rectangular plane. This can be\n\t\t\tused to simulate things like bright windows or strip lighting.<br><br>\n\n\t\t\tThis light can cast shadows - see the [page:RectAreaLightShadow] page for details.<br><br>\n\n\t\t\t<em>NOTE:</em> this class is currently under active development and is probably not\n\t\t\tproduction ready yet (as of r83). Check back in a month or two! And feel free to try it out in the meantime.",
      "!type": "fn(color: number, intensity: number, width: number, height: number)"
    },
    "DirectionalLightShadow": {
      "!url": "http://threejs.org/docs/#Reference/lights/shadows/DirectionalLightShadow",
      "prototype": {
        "!proto": "THREE.LightShadow.prototype",
        "camera": {
          "!type": "+THREE.Camera",
          "!doc": "The light's view of the world. This is used to generate a depth map of the scene; objects behind\n\t\t\tother objects from the light's perspective will be in shadow.<br><br>\n\n\t\t\tThe default is an [page:OrthographicCamera] with [page:OrthographicCamera.left left] and\n\t\t\t[page:OrthographicCamera.bottom bottom] set to -5,  [page:OrthographicCamera.right right]\n\t\t\tand  [page:OrthographicCamera.top top] set to 5, the [page:OrthographicCamera.near near]\n\t\t\tclipping plane at 0.5 and the [page:OrthographicCamera.far far] clipping plane at 500."
        }
      },
      "!doc": "This used internally by [page:DirectionalLight DirectionalLights] for calculating shadows.<br><br>\n\n\t\t\tUnlike the other shadow classes, this uses an [page:OrthographicCamera] to calculate the shadows,\n\t\t\trather than a [page:PerspectiveCamera]. This is because light rays from a [page:DirectionalLight]\n\t\t\tare parallel.",
      "!type": "fn()"
    },
    "LightShadow": {
      "!url": "http://threejs.org/docs/#Reference/lights/shadows/LightShadow",
      "prototype": {
        "camera": {
          "!type": "+THREE.Camera",
          "!doc": "The light's view of the world. This is used to generate a depth map of the scene; objects behind\n\t\t\tother objects from the light's perspective will be in shadow."
        },
        "bias": {
          "!type": "number",
          "!doc": "Shadow map bias, how much to add or subtract from the normalized depth when deciding whether a surface is in shadow.<br>\n\t\t\tThe default is 0. Very tiny adjustments here (in the order of 0.0001) may help reduce artefacts in shadows"
        },
        "map": {
          "!type": "+THREE.WebGLRenderTarget",
          "!doc": "The depth map generated using the internal camera; a location beyond a pixel's depth is\n\t\t\tin shadow. Computed internally during rendering."
        },
        "mapSize": {
          "!type": "+THREE.Vector2",
          "!doc": "A [Page:Vector2] defining the width and height of the shadow map.<br><br>\n\n\t\t\tHigher values give better quality shadows at the cost of computation time. Values must be\n\t\t\tpowers of 2, up to the [page:WebGLRenderer.capabilities].maxTextureSize for a given device,\n\t\t\talthough the width and height don't have to be the same (so, for example, (512, 1024) is valid).\n\t\t\tThe default is *( 512, 512 )*."
        },
        "matrix": {
          "!type": "+THREE.Matrix4",
          "!doc": "Model to shadow camera space, to compute location and depth in shadow map. Stored\n\t\t\tin a [page:Matrix4 Matrix4]. This is computed internally during rendering."
        },
        "radius": {
          "!type": "number",
          "!doc": "Setting this this to values greater than 1 will blur the edges of the shadow.<br>\n\n\t\t\tHigh values will cause unwanted banding effects in the shadows - a greater [page:.mapSize mapSize]\n\t\t\twill allow for a higher value to be used here before these effects become visible.<br><br>\n\n\t\t\tNote that this has no effect if the [page:WebGLRenderer.shadowMap.type] is set to [page:Renderer BasicShadowMap]."
        },
        "copy": {
          "!type": "fn(source: +THREE.LightShadow) -> +THREE.LightShadow",
          "!doc": "Copies value of all the properties from the [page:LightShadow source] to this\n\t\tSpotLight."
        },
        "clone": {
          "!type": "fn() -> +THREE.LightShadow",
          "!doc": "Creates a new LightShadow with the same properties as this one."
        },
        "toJSON": {
          "!type": "fn() -> object",
          "!doc": "Serialize this LightShadow."
        }
      },
      "!doc": "This used internally by [page:PointLight PointLights] for calculating shadows, and also serves as\n\t\t\ta base class for the other shadow classes.",
      "!type": "fn(camera: +THREE.Camera)"
    },
    "RectAreaLightShadow": {
      "!url": "http://threejs.org/docs/#Reference/lights/shadows/RectAreaLightShadow",
      "prototype": {},
      "!doc": "<em>Note: this is currently being developed and does nothing at the moment (r83).\n\t\t\t\tCheck back in a while!</em><br><br>\n\n\t\t\tThis used internally by [page:RectAreaLight RectAreaLight] for calculating shadows.",
      "!type": "fn(camera: +THREE.Camera)"
    },
    "SpotLightShadow": {
      "!url": "http://threejs.org/docs/#Reference/lights/shadows/SpotLightShadow",
      "prototype": {
        "!proto": "THREE.LightShadow.prototype",
        "camera": {
          "!type": "+THREE.Camera",
          "!doc": "The light's view of the world. This is used to generate a depth map of the scene; objects behind\n\t\t other objects from the light's perspective will be in shadow.<br><br>\n\n\t\t The default is a  [page:PerspectiveCamera] with [page:PerspectiveCamera.fov fov] of 90,\n\t  [page:PerspectiveCamera.aspect aspect] of 1, [page:PerspectiveCamera.near near]\n\t\tclipping plane at 0.5 and\t[page:PerspectiveCamera.far far] clipping plane at 500."
        },
        "isSpotLightShadow": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are spot light shadows. Default is *true*.<br><br>\n\n\t\t You should not change this, as it used internally for optimisation."
        },
        "update": {
          "!type": "fn(light: +THREE.SpotLight) -> +THREE.SpotLightShadow",
          "!doc": "Updates the internal perspective [page:.camera camera] based on the passed in [page:SpotLight light]."
        }
      },
      "!doc": "This used internally by [page:SpotLight SpotLights] for calculating shadows."
    },
    "SpotLight": {
      "!url": "http://threejs.org/docs/#Reference/lights/SpotLight",
      "prototype": {
        "!proto": "THREE.Light.prototype",
        "angle": {
          "!type": "number",
          "!doc": "Maximum extent of the spotlight, in radians, from its direction. Should be no more than\n\t\t\t*Math.PI/2*. The default is *Math.PI/3*."
        },
        "castShadow": {
          "!type": "bool",
          "!doc": "If set to *true* light will cast dynamic shadows. *Warning*: This is expensive and\n\t\t\trequires tweaking to get shadows looking right. See the [page:SpotLightShadow] for details.\n\t\t\tThe default is *false*."
        },
        "decay": {
          "!type": "number",
          "!doc": "The amount the light dims along the distance of the light.<br>\n\t\t\tIn [page:WebGLRenderer.physicallyCorrectLights physically correct] mode, decay = 2 leads to\n\t\t\tphysically realistic light falloff. The default is *1*."
        },
        "distance": {
          "!type": "number",
          "!doc": "If non-zero, light will attenuate linearly from maximum intensity at the light's\n\t\t\tposition down to zero at this distance from the light. Default is *0.0*."
        },
        "isSpotLight": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are spot lights. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "penumbra": {
          "!type": "number",
          "!doc": "Percent of the spotlight cone that is attenuated due to penumbra. Takes values between\n\t\t\tzero and 1. The default is *0.0*."
        },
        "position": {
          "!type": "+THREE.Vector3",
          "!doc": "This is set equal to [page:Object3D.DefaultUp] (0, 1, 0), so that the light shines from the top down."
        },
        "power": {
          "!type": "number",
          "!doc": "The light's power.<br>\n\t\t\tIn [page:WebGLRenderer.physicallyCorrectLights physically correct] mode, the luminous\n\t\t\tpower of the light measured in lumens. Default - *4PI*. <br><br>\n\n\t\t\tThis is directly related to the [page:.intensity intensity] in the ratio\n\t\t\t<code>\n\t\t\t\tpower = intensity * Π\n\t\t\t</code>\n\t\t\tand changing this will also change the intensity."
        },
        "shadow": {
          "!type": "+THREE.SpotLightShadow",
          "!doc": "A [page:SpotLightShadow] used to calculate shadows for this light."
        },
        "target": {
          "!type": "+THREE.Object3D",
          "!doc": "The Spotlight points from its [page:.position position] to target.position. The default\n\t\t\tposition of the target is *(0, 0, 0)*.<br>\n\n\t\t\t*Note*: For the the target's position to be changed to anything other than the default,\n\t\t\tit must be added to the [page:Scene scene] using\n\t\t\t<code>\n\t\t\t\tscene.add( light.target );\n\t\t\t</code>\n\n\t\t\tThis is so that the target's [page:Object3D.matrixWorld matrixWorld] gets automatically\n\t\t\tupdated each frame.<br><br>\n\n\t\t\tIt is also possible to set the target to be another object in the scene (anything with a\n\t\t\t[page:Object3D.position position] property), like so:\n\t\t\t<code>\nvar targetObject = new THREE.Object3D();\nscene.add(targetObject);\n\nlight.target = targetObject;\n\t\t\t</code>\n\t\t\tThe spotlight will now track the target object."
        },
        "copy": {
          "!type": "fn(source: +THREE.SpotLight) -> +THREE.SpotLight",
          "!doc": "Copies value of all the properties from the [page:SpotLight source] to this\n\t\tSpotLight."
        }
      },
      "!doc": "This light gets emitted from a single point in one direction, along a cone that increases in size\n\t\t\tthe further from the light it gets. <br><br>\n\n\t\t\tThis light can cast shadows - see the [page:SpotLightShadow] page for details.",
      "!type": "fn(color: number, intensity: number, distance: number, angle: Radians, penumbra: number, decay: number)"
    },
    "AnimationLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/AnimationLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager]  the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "[page:String url] — the path or URL to the file. This can also be a\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs Data URI].<br>\n\t\t[page:Function onLoad] — Will be called when load completes. The argument will be the loaded [page:Animation animation].<br>\n\t\t[page:Function onProgress] — Will be called while load progresses. The argument will be the XmlHttpRequest instance, that contain .[page:Integer total] and .[page:Integer loaded] bytes.<br>\n\t\t[page:Function onError] — Will be called if load errors.<br><br>\n\n\t\tBegin loading from url and pass the loaded animation to onLoad."
        },
        "parse": {
          "!type": "fn(json: JSON, onLoad: function)",
          "!doc": "[page:JSON json] — required<br>\n\t\t[page:Function onLoad] — Will be called when parsing completes. <br><br>\n\n\t\tParse the JSON object and pass the result to onLoad. Individual clips in the object will\n\t\tbe parsed with [page:AnimationClip.parse]."
        }
      },
      "!doc": "Class for loading an animation in JSON format.\n\t\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "AudioLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/AudioLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and pass the loaded [page:String AudioBuffer] to onLoad."
        }
      },
      "!doc": "Class for loading an\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer AudioBuffer].\n\t\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(context: string, manager: +THREE.LoadingManager)"
    },
    "BufferGeometryLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/BufferGeometryLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and call onLoad with the parsed response content."
        },
        "parse": {
          "!type": "fn(json: object) -> +THREE.BufferGeometry",
          "!doc": "[page:Object json] — The <em>JSON</em> structure to parse.<br><br>\n\t\tParse a <em>JSON</em> structure and return a [page:BufferGeometry]."
        }
      },
      "!doc": "A loader for loading a [page:BufferGeometry].\n\t\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "Cache": {
      "!url": "http://threejs.org/docs/#Reference/loaders/Cache",
      "prototype": {
        "enabled": {
          "!type": "bool",
          "!doc": "Whether caching is enabled. Default is *false*."
        },
        "files": {
          "!type": "object",
          "!doc": "An [page:Object object] that holds cached files."
        },
        "add": {
          "!type": "fn(key: string, file)",
          "!doc": "[page:String key] — the [page:String key] to reference the cached file by.<br>\n\t\t[page:Object file] — The file to be cached.<br><br>\n\n\t\tAdds a cache entry with a key to reference the file. If this key already holds a file,\n\t\tit is overwritten."
        },
        "get": {
          "!type": "fn(key: string)",
          "!doc": "[page:String key] — A string key <br><br>\n\n\t\tGet the value of [page:String key]. If the key does not exist *undefined* is returned."
        },
        "remove": {
          "!type": "fn(key: string)",
          "!doc": "[page:String key] — A string key that references a cached file.<br><br>\n\n\t\tRemove the cached file associated with the key."
        },
        "clear": {
          "!type": "fn()",
          "!doc": "Remove all values from the cache."
        }
      },
      "!doc": "A simple caching system, used internally by [page:FileLoader]."
    },
    "CompressedTextureLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/CompressedTextureLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "path": {
          "!type": "string",
          "!doc": "The base path from which files will be loaded. See [page:.setPath]. Default is *undefined*."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and pass the loaded texture to onLoad."
        },
        "setPath": {
          "!type": "fn(path: string) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many textures from the same directory."
        }
      },
      "!doc": "Abstract base class for block based textures loader (dds, pvr, ...).\n\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "CubeTextureLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/CubeTextureLoader",
      "prototype": {
        "crossOrigin": {
          "!type": "string",
          "!doc": "If set, assigns the [link:https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes crossOrigin]\n\t attribute of the image to the value of *crossOrigin*,\n\t\tprior to starting the load. Default is *undefined*."
        },
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "path": {
          "!type": "string",
          "!doc": "The base path from which files will be loaded. See [page:.setPath]. Default is *undefined*."
        },
        "load": {
          "!type": "fn(urls: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and pass the loaded [page:Texture texture] to onLoad."
        },
        "setCrossOrigin": {
          "!type": "fn(value: string)",
          "!doc": "Set the [page:.crossOrigin] attribute."
        },
        "setPath": {
          "!type": "fn(path: string) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many textures from the same directory."
        }
      },
      "!doc": "Class for loading a [page:CubeTexture CubeTexture].\n\t\t\tThis uses the [page:ImageLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "DataTextureLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/DataTextureLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and pass the loaded texture to onLoad."
        }
      },
      "!doc": "Abstract base class to load generic binary textures formats (rgbe, hdr, ...).\n\t\tThis uses the [page:FileLoader] internally for loading files, and creates a new\n\t\t[page:DataTexture].",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "FileLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/FileLoader",
      "prototype": {
        "cache": {
          "!type": "+THREE.Cache",
          "!doc": "A reference to [page:Cache Cache] that hold the response from each request made\n\t\t\tthrough this loader, so each file is requested once.<br><br>\n\n\t\t\t<em>Note:</em>The cache must be enabled using\n\t\t\t<code>THREE.Cache.enabled = true.</code>\n\t\t\tThis is a global property and only needs to be set once to be used by all loaders that use FileLoader internally."
        },
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager]  the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "mimeType": {
          "!type": "string",
          "!doc": "The expected [link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types mimeType].\n\t\t\tSee [page:.setMimeType]. Default is *undefined*."
        },
        "path": {
          "!type": "string",
          "!doc": "The base path from which files will be loaded. See [page:.setPath]. Default is *undefined*."
        },
        "responseType": {
          "!type": "string",
          "!doc": "The expected response type. See [page:.setResponseType]. Default is *undefined*."
        },
        "withCredentials": {
          "!type": "string",
          "!doc": "Whether the XMLHttpRequest uses credentials - see [page:.setWithCredentials].\n\t\t\tDefault is *undefined*."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "[page:String url] — the path or URL to the file. This can also be a\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs Data URI].<br>\n\t\t[page:Function onLoad] — Will be called when loading completes. The argument will be the loaded response.<br>\n\t\t[page:Function onProgress] — Will be called while load progresses. The argument will be the XmlHttpRequest instance,\n\t\t\tthat contains .[page:Integer total] and .[page:Integer loaded] bytes.<br>\n\t\t[page:Function onError] — Will be called if an error occurs.<br><br>\n\n\t\tLoad the URL and pass the response to the onLoad function."
        },
        "setMimeType": {
          "!type": "fn(mimeType: string) -> +THREE.FileLoader",
          "!doc": "Set the expected [link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types mimeType]\n\t\t\tof the file being loaded. Note that in many cases this will be determined automatically, so by default it is *undefined*."
        },
        "setPath": {
          "!type": "fn(path: string) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many models from the same directory."
        },
        "setResponseType": {
          "!type": "fn(responseType: string) -> +THREE.FileLoader",
          "!doc": "[page:String responseType] — Default is '' (empty string).<br><br>\n\n\t\tChange the response type. Valid values are:<br>\n\t\t[page:String text], empty string (default), or any other value. Any file type, returns the unprocessed file data.<br>\n\t\t[page:String arraybuffer] - loads the data into a [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ArrayBuffer] and returns that.<br>\n\t\t[page:String blob] - returns the data as a [link:https://developer.mozilla.org/en/docs/Web/API/Blob Blob].<br>\n\t\t[page:String document] - parse the file using the [link:https://developer.mozilla.org/en-US/docs/Web/API/DOMParser DOMParser].<br>\n\t\t[page:String json] - parse the file using [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse JSON.parse].<br>"
        },
        "setWithCredentials": {
          "!type": "fn(value: bool) -> +THREE.FileLoader",
          "!doc": "[page:String responseType] — Default is '' (empty string).<br><br>\n\n\t\tChange the response type. Valid values are:<br>\n\t\t[page:String text], empty string (default), or any other value. Any file type, returns the unprocessed file data.<br>\n\t\t[page:String arraybuffer] - loads the data into a [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ArrayBuffer] and returns that.<br>\n\t\t[page:String blob] - returns the data as a [link:https://developer.mozilla.org/en/docs/Web/API/Blob Blob].<br>\n\t\t[page:String document] - parse the file using the [link:https://developer.mozilla.org/en-US/docs/Web/API/DOMParser DOMParser].<br>\n\t\t[page:String json] - parse the file using [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse JSON.parse].<br>"
        }
      },
      "!doc": "A low level class for loading resources with XmlHttpRequest, used internaly by most loaders.\n\t\t\tIt can also be used directly to load any file type that does not have a loader.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "FontLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/FontLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "[page:String url] — the path or URL to the file. This can also be a\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs Data URI].<br>\n\t\t[page:Function onLoad] — Will be called when load completes. The argument will be the loaded [page:Texture texture].<br>\n\t\t[page:Function onProgress] — Will be called while load progresses. The argument will be the XmlHttpRequest instance, that contain .[page:Integer total] and .[page:Integer loaded] bytes.<br>\n\t\t[page:Function onError] — Will be called when load errors.<br><br>\n\n\t\tBegin loading from url and pass the loaded [page:Texture texture] to onLoad."
        },
        "parse": {
          "!type": "fn(json: object) -> +THREE.Font",
          "!doc": "[page:Object json] — The <em>JSON</em> structure to parse.<br><br>\n\t\tParse a <em>JSON</em> structure and return a [page:Font]."
        }
      },
      "!doc": "Class for loading a font in JSON format. Returns a [page:Font Font], which is an\n\t\tarray of [page:Shape Shape]s representing the font.\n\t\tThis uses the [page:FileLoader] internally for loading files. <br><br>\n\n\t\tYou can convert fonts online using [link:https://gero3.github.io/facetype.js/ facetype.js]",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "ImageLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/ImageLoader",
      "prototype": {
        "crossOrigin": {
          "!type": "string",
          "!doc": "If set, assigns the [link:https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes crossOrigin]\n\t attribute of the image to the value of *crossOrigin*, prior to starting the load. Default is *undefined*."
        },
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager] the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "path": {
          "!type": "string",
          "!doc": "The base path from which files will be loaded. See [page:.setPath]. Default is *undefined*."
        },
        "withCredentials": {
          "!type": "string",
          "!doc": "Whether the XMLHttpRequest uses credentials - see [page:.setWithCredentials].\n\t\t\tDefault is *undefined*."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and return the [page:Image image] object that will contain the data."
        },
        "setCrossOrigin": {
          "!type": "fn(value: string)",
          "!doc": "Set the [page:.crossOrigin] attribute."
        },
        "setPath": {
          "!type": "fn(path: string) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many models from the same directory."
        },
        "setWithCredentials": {
          "!type": "fn(value: bool) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many models from the same directory."
        }
      },
      "!doc": "A loader for loading an [page:Image].\n\n\t\t\tThis uses the [page:FileLoader] internally for loading files, and is used internally by the\n\t\t\t[page:CubeTextureLoader], [page:ObjectLoader] and [page:TextureLoader].",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "JSONLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/JSONLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager]  the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "withCredentials": {
          "!type": "string",
          "!doc": "Whether the XMLHttpRequest uses credentials.\n\t\t\tDefault is *false*."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and pass the <em>JSON</em> to onLoad."
        },
        "setTexturePath": {
          "!type": "fn(texturePath: string)",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many files from the same directory."
        },
        "parse": {
          "!type": "fn(json: object, texturePath: string) -> +THREE.Object3D",
          "!doc": "[page:String json] — JSON object to parse.<br>\n\t\t[page:String texturePath] — Base path for textures.<br><br>\n\n\t\tParse a <em>JSON</em> structure and return an [page:object] containing the parsed [page:Geometry geometry] and [page:Array materials]."
        }
      },
      "!doc": "A loader for loading objects in JSON format.\n\t\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "Loader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/Loader",
      "prototype": {
        "onLoadStart": {
          "!type": "function",
          "!doc": "The default is a function with empty body."
        },
        "onLoadProgress": {
          "!type": "function",
          "!doc": "The default is a function with empty body."
        },
        "onLoadComplete": {
          "!type": "function",
          "!doc": "The default is a function with empty body."
        },
        "crossOrigin": {
          "!type": "string",
          "!doc": "The crossOrigin string to implement CORS for loading the url from a different domain that allows CORS."
        },
        "createMaterial": {
          "!type": "fn(m: object, texturePath: string) -> +THREE.Material",
          "!doc": "Creates the Material based on the parameters m."
        },
        "initMaterials": {
          "!type": "fn(materials: [], texturePath: string) -> []",
          "!doc": "Creates an array of [page:Material] based on the array of parameters m. The index of the parameters decide the correct index of the materials."
        },
        "extractUrlBase": {
          "!type": "fn(url: string) -> string",
          "!doc": "Extract the base from the URL."
        }
      },
      "!doc": "Base class for implementing loaders.",
      "!type": "fn()"
    },
    "DefaultLoadingManager": {
      "!url": "http://threejs.org/docs/#Reference/loaders/managers/DefaultLoadingManager",
      "prototype": {},
      "!doc": "A global instance of the [page:LoadingManager LoadingManager], used by most loaders\n\t\t\twhen no custom manager has been specified.<br><br>\n\n\t\t  This will be sufficient for most purposes, however there may be times when you desire seperate loading managers\n\t\t\tfor say, textures and models."
    },
    "LoadingManager": {
      "!url": "http://threejs.org/docs/#Reference/loaders/managers/LoadingManager",
      "prototype": {
        "onStart": {
          "!type": "function",
          "!doc": "This function will be called when loading starts.\n\t\t\tThe arguments are:<br>\n\t\t\t[page:String url] — The url of the item just loaded.<br>\n\t\t\t[page:Integer itemsLoaded] — the number  of items already loaded so far.<br>\n\t\t\t[page:Iteger itemsTotal] — the total amount of items to be loaded.<br><br>\n\n\t\t\tBy default this is undefined."
        },
        "onLoad": {
          "!type": "function",
          "!doc": "This function will be called when all loading is completed. By default this is undefined,\n\t\t\tunless passed in the constructor."
        },
        "onProgress": {
          "!type": "function",
          "!doc": "This function will be called when an item is complete.\n\t\tThe arguments are:<br>\n\t\t[page:String url] — The url of the item just loaded.<br>\n\t\t[page:Integer itemsLoaded] — the number  of items already loaded so far.<br>\n\t\t[page:Iteger itemsTotal] — the total amount of items to be loaded.<br><br>\n\n\t\tBy default this is undefined, unless passed in the constructor."
        },
        "onError": {
          "!type": "function",
          "!doc": "This function will be called when any item errors, with the argument:<br>\n\t\t\t[page:String url] — The url of the item that errored.<br><br>\n\n\t\t\tBy default this is undefined, unless passed in the constructor."
        },
        "itemStart": {
          "!type": "fn(url: string)",
          "!doc": "[page:String url] — the url to load<br><br>\n\n\t\tThis should be called by any loader used by the manager when the loader starts loading an url."
        },
        "itemEnd": {
          "!type": "fn(url: string)",
          "!doc": "[page:String url] — the loaded url<br><br>\n\n\t\tThis should be called by any loader used by the manager when the loader ended loading an url."
        },
        "itemError": {
          "!type": "fn(url: string)",
          "!doc": "[page:String url] — the loaded url<br><br>\n\n\t\tThis should be called by any loader used by the manager when the loader errors loading an url."
        }
      },
      "!doc": "Handles and keeps track of loaded and pending data. A default global instance of this class\n\t\t\tis created and used by loaders if not supplied manually - see [page:DefaultLoadingManager].<br><br>\n\n\t\t\tIn general that should be sufficient, however there are times when it can be useful to have seperate loaders -\n\t\t\tfor example if you want to show seperate loading bars for objects and textures.",
      "!type": "fn(onLoad: function, onProgress: function, onError: function)"
    },
    "MaterialLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/MaterialLoader",
      "prototype": {
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager]  the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "textures": {
          "!type": "object",
          "!doc": "Object holding any textures used by the material. See [page:.setTextures]."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "[page:String url] — the path or URL to the file. This can also be a\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs Data URI].<br>\n\t\t[page:Function onLoad] — Will be called when load completes. The argument will be the loaded [page:Material].<br>\n\t\t[page:Function onProgress] — Will be called while load progresses. The argument will be the progress event.<br>\n\t\t[page:Function onError] — Will be called when load errors.<br><br>\n\n\t\tBegin loading from url and return the [page:Material] object that will contain the data."
        },
        "parse": {
          "!type": "fn(json: object) -> +THREE.Material",
          "!doc": "[page:Object json] — The json object containing the parameters of the Material.<br><br>\n\n\t\tParse a <em>JSON</em> structure and create a new [page:Material] of the type [page:String json.type] with parameters defined in the json object."
        },
        "setTextures": {
          "!type": "fn(textures: object)",
          "!doc": "[page:Object textures] — object containing any textures used by the material."
        }
      },
      "!doc": "A loader for loading a [page:Material] in JSON format.\n\t\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "ObjectLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/ObjectLoader",
      "prototype": {
        "crossOrigin": {
          "!type": "string",
          "!doc": "If set, assigns the [link:https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes crossOrigin]\n\t attribute of the image to the value of *crossOrigin*,\n\t\tprior to starting the load. Default is *undefined*."
        },
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager]  the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "texturePath": {
          "!type": "string",
          "!doc": "The base path or URL from which textures will be loaded. See [page:.setTexturePath].\n\t\t\tDefault is the empty string."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "Begin loading from url and call onLoad with the parsed response content."
        },
        "parse": {
          "!type": "fn(json: object, onLoad: function) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\t\t[page:Function onLoad] — Will be called when parsed completes. The argument will be the parsed [page:Object3D object].<br>\n\n\t\tParse a <em>JSON</em> structure and return a threejs object.\n\t\tThis is used internally by [page:.load], but can also be used directly to parse\n\t\ta previously loaded JSON structure."
        },
        "parseGeometries": {
          "!type": "fn(json: object) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\n\t\tThis is used [page:.parse] to parse any [page:Geometry geometries] or [page:BufferGeometry buffer geometries]  in the JSON structure.\n\t\tInternally it uses [page:JSONLoader] for geometries and [page:BufferGeometryLoader] for buffer geometries."
        },
        "parseMaterials": {
          "!type": "fn(json: object) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\n\t\tThis is used [page:.parse] to parse any materials in the JSON structure using [page:MaterialLoader]."
        },
        "parseAnimations": {
          "!type": "fn(json: object) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\n\t\tThis is used [page:.parse] to parse any animations in the JSON structure, using [page:AnimationClip.parse]."
        },
        "parseImages": {
          "!type": "fn(json: object) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\n\t\tThis is used [page:.parse] to parse any images in the JSON structure, using [page:ImageLoader]."
        },
        "parseTextures": {
          "!type": "fn(json: object) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\n\t\tThis is used [page:.parse] to parse any textures in the JSON structure."
        },
        "parseObject": {
          "!type": "fn(json: object) -> +THREE.Object3D",
          "!doc": "[page:Object json] — required. The JSON source to parse.<br><br>\n\n\t\tThis is used [page:.parse] to parse any objects in the JSON structure.\n\t\tObjects can be of the following types:\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t[page:Scene]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:PerspectiveCamera]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:OrthographicCamera]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:AmbientLight]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:DirectionalLight]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:PointLight]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:SpotLight]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:HemisphereLight]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:Mesh]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:LOD]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:Line]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:LineSegments]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:Points]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:Sprite]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:Group]\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t[page:Object3D]\n\t\t\t</li>\n\n\t\t</ul>"
        },
        "setCrossOrigin": {
          "!type": "fn(value: string)",
          "!doc": "[page:String value] — The crossOrigin string to implement CORS for loading the url from a different domain that allows CORS."
        },
        "setTexturePath": {
          "!type": "fn(value: string)",
          "!doc": "[page:String value] — The base path or URL from which textures will be loaded.<br><br>"
        }
      },
      "!doc": "A loader for loading a JSON resource. Unlike the [page:JSONLoader], this one make use of the\n\t\t\t<em>.type</em> attributes of objects to map them to their original classes.<br><br>\n\n\t\t\tNote that this loader can't load [page:Geometries]. Use [page:JSONLoader] instead for that.<br><br>\n\n\t\t\tThis uses the [page:FileLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "TextureLoader": {
      "!url": "http://threejs.org/docs/#Reference/loaders/TextureLoader",
      "prototype": {
        "crossOrigin": {
          "!type": "string",
          "!doc": "If set, assigns the [link:https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes crossOrigin]\n\t attribute of the image to the value of *crossOrigin*, prior to starting the load. Default is *undefined*."
        },
        "manager": {
          "!type": "+THREE.LoadingManager",
          "!doc": "The [page:LoadingManager loadingManager]  the loader is using. Default is [page:DefaultLoadingManager]."
        },
        "path": {
          "!type": "string",
          "!doc": "The base path from which files will be loaded. See [page:.setPath]. Default is *undefined*."
        },
        "withCredentials": {
          "!type": "string",
          "!doc": "Whether the XMLHttpRequest uses credentials - see [page:.setWithCredentials].\n\t\t\tDefault is *undefined*."
        },
        "load": {
          "!type": "fn(url: string, onLoad: function, onProgress: function, onError: function)",
          "!doc": "[page:String url] — the path or URL to the file. This can also be a\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs Data URI].<br>\n\t\t[page:Function onLoad] — Will be called when load completes. The argument will be the loaded [page:Texture texture].<br>\n\t\t[page:Function onProgress] — Will be called while load progresses. The argument will be the XmlHttpRequest instance, that contain .[page:Integer total] and .[page:Integer loaded] bytes.<br>\n\t\t[page:Function onError] — Will be called when load errors.<br><br>\n\n\t\tBegin loading from url and pass the loaded [page:Texture texture] to onLoad."
        },
        "setCrossOrigin": {
          "!type": "fn(value: string)",
          "!doc": "Set the [page:.crossOrigin] attribute."
        },
        "setPath": {
          "!type": "fn(path: string) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many models from the same directory."
        },
        "setWithCredentials": {
          "!type": "fn(value: bool) -> +THREE.FileLoader",
          "!doc": "Set the base path or URL from which to load files. This can be useful if\n\t\t\tyou are loading many models from the same directory."
        }
      },
      "!doc": "Class for loading a [page:Texture texture].\n\t\t\tThis uses the [page:ImageLoader] internally for loading files.",
      "!type": "fn(manager: +THREE.LoadingManager)"
    },
    "LineBasicMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/LineBasicMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "isLineBasicMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are line basic materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "linewidth": {
          "!type": "number",
          "!doc": "Controls line thickness. Default is *1*.<br><br>\n\n\t\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\t\twith the [page:WebGLRenderer WebGL] renderer on Windows platforms linewidth will\n\t\t\talways be 1 regardless of the set value."
        },
        "linecap": {
          "!type": "string",
          "!doc": "Define appearance of line ends. Possible values are 'butt', 'round' and 'square'.\n\t\t\tDefault is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap 2D Canvas lineCap]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "linejoin": {
          "!type": "string",
          "!doc": "Define appearance of line joints. Possible values are 'round', 'bevel' and 'miter'. Default is 'round'. <br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineJoin 2D Canvas lineJoin]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        }
      },
      "!doc": "A material for drawing wireframe-style geometries.",
      "!type": "fn(parameters: object)"
    },
    "LineDashedMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/LineDashedMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "dashSize": {
          "!type": "number",
          "!doc": "The size of the dash. This is both the gap with the stroke. Default is *3*."
        },
        "gapSize": {
          "!type": "number",
          "!doc": "The size of the gap. Default is *1*."
        },
        "isLineDashedMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are line dashed materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "linewidth": {
          "!type": "number",
          "!doc": "Controls line thickness. Default is *1*.<br><br>\n\n\t\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\t\twith the [page:WebGLRenderer WebGL] renderer on Windows platforms linewidth will\n\t\t\talways be 1 regardless of the set value."
        },
        "scale": {
          "!type": "number",
          "!doc": "The scale of the dashed part of a line. Default is *1*."
        }
      },
      "!doc": "A material for drawing wireframe-style geometries with dashed lines.",
      "!type": "fn(parameters: object)"
    },
    "Material": {
      "!url": "http://threejs.org/docs/#Reference/materials/Material",
      "prototype": {
        "alphaTest": {
          "!type": "number",
          "!doc": "Sets the alpha value to be used when running an alpha test.\n\t\tThe material will not be renderered if the opacity is lower than this value.\n\t\tDefault is *0*."
        },
        "blendDst": {
          "!type": "number",
          "!doc": "Blending destination. Default is [page:CustomBlendingEquation OneMinusSrcAlphaFactor].\n\t\tSee the destination factors [page:CustomBlendingEquation constants] for all possible values.<br>\n\t\tThe material's [property:Constant blending] must be set to [page:Materials CustomBlending] for this to have any effect."
        },
        "blendDstAlpha": {
          "!type": "number",
          "!doc": "The tranparency of the [page:.blendDst]. Default is *null*."
        },
        "blendEquation": {
          "!type": "number",
          "!doc": "Blending equation to use when applying blending. Default is [page:CustomBlendingEquation AddEquation].\n\t\tSee the blending equation [page:CustomBlendingEquation constants] for all possible values.<br>\n\t\tThe material's [property:Constant blending] must be set to [page:Materials CustomBlending] for this to have any effect."
        },
        "blendEquationAlpha": {
          "!type": "number",
          "!doc": "The tranparency of the [page:.blendEquation]. Default is *null*."
        },
        "blending": {
          "!type": "Blending",
          "!doc": "Which blending to use when displaying objects with this material. <br>\n\t\tThis must be set to [page:Materials CustomBlending] to use custom [property:Constant blendSrc], [property:Constant blendDst] or [property:Constant blendEquation].<br>\n\t\tSee the blending mode [page:Materials constants] for all possible values. Default is [page:Materials NormalBlending]."
        },
        "blendSrc": {
          "!type": "number",
          "!doc": "Blending source. Default is [page:CustomBlendingEquation SrcAlphaFactor].\n\t\tSee the source factors [page:CustomBlendingEquation constants] for all possible values.<br>\n\t\tThe material's [property:Constant blending] must be set to [page:Materials CustomBlending] for this to have any effect."
        },
        "blendSrcAlpha": {
          "!type": "number",
          "!doc": "The tranparency of the [page:.blendSrc]. Default is *null*."
        },
        "clipIntersection": {
          "!type": "bool",
          "!doc": "Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union.\n\t\tDefault is *false*."
        },
        "clippingPlanes": {
          "!type": "[]",
          "!doc": "User-defined clipping planes specified as THREE.Plane objects in world space.\n\t\tThese planes apply to the objects this material is attached to.\n\t\tPoints in space whose dot product with the plane is negative are cut away.\n\t\tSee the [example:webgl_clipping_intersection WebGL / clipping /intersection] example.\n\t\tDefault is *null*."
        },
        "clipShadows": {
          "!type": "bool",
          "!doc": "Defines whether to clip shadows according to the clipping planes specified on this material. Default is *false*."
        },
        "colorWrite": {
          "!type": "bool",
          "!doc": "Whether to render the material's color.\n\t\tThis can be used in conjunction with a mesh's [property:Integer renderOrder] property to create invisible objects that occlude other objects. Default is *true*."
        },
        "depthFunc": {
          "!type": "number",
          "!doc": "Which depth function to use. Default is [page:Materials LessEqualDepth]. See the depth mode [page:Materials constants] for all possible values."
        },
        "depthTest": {
          "!type": "bool",
          "!doc": "Whether to have depth test enabled when rendering this material. Default is *true*."
        },
        "depthWrite": {
          "!type": "bool",
          "!doc": "Whether rendering this material has any effect on the depth buffer. Default is *true*.<br><br>\n\n\t\tWhen drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts."
        },
        "fog": {
          "!type": "bool",
          "!doc": "Whether the material is affected by fog. Default is *true*."
        },
        "id": {
          "!type": "number",
          "!doc": "Unique number for this material instance."
        },
        "isMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *true*."
        },
        "name": {
          "!type": "string",
          "!doc": "Optional name of the object (doesn't need to be unique). Default is an empty string."
        },
        "needsUpdate": {
          "!type": "bool",
          "!doc": "Specifies that the material needs to be updated at the WebGL level.\n\t\tSet it to true if you made changes that need to be reflected in WebGL.<br>\n\t\tThis property is automatically set to *true* when instancing a new material."
        },
        "opacity": {
          "!type": "number",
          "!doc": "Float in the range of *0.0* - *1.0* indicating how transparent the material is.\n\t\tA value of *0.0* indicates fully transparent, *1.0* is fully opaque.<br>\n\t\tIf the material's [property:Boolean transparent] property is not set to *true*, the material will remain\n\t\tfully opaque and this value will only affect its color. <br>\n\t\tDefault is *1.0*."
        },
        "overdraw": {
          "!type": "number",
          "!doc": "Amount of triangle expansion at draw time.\n\t\tThis is a workaround for cases when gaps appear between triangles when using [page:CanvasRenderer].\n\t\t*0.5* tends to give good results across browsers. Default is *0*."
        },
        "polygonOffset": {
          "!type": "bool",
          "!doc": "Whether to use polygon offset. Default is *false*. This corresponds to the *GL_POLYGON_OFFSET_FILL* WebGL feature."
        },
        "polygonOffsetFactor": {
          "!type": "number",
          "!doc": "Sets the polygon offset factor. Default is *0*."
        },
        "polygonOffsetUnits": {
          "!type": "number",
          "!doc": "Sets the polygon offset units. Default is *0*."
        },
        "precision": {
          "!type": "string",
          "!doc": "Override the renderer's default precision for this material. Can be \"*highp*\", \"*mediump*\" or \"*lowp*\".\n\t\tDefaults is *null*."
        },
        "premultipliedAlpha": {
          "!type": "bool",
          "!doc": "Whether to premultiply the alpha (transparency) value.\n\t\tSee [Example:webgl_materials_transparency WebGL / Materials / Transparency] for an example of the difference.\n\t\tDefault is *false*."
        },
        "shading": {
          "!type": "number",
          "!doc": "Defines how the material is shaded.\n\t\tThis can be either [page:Materials THREE.SmoothShading] (default)\tor [page:Materials THREE.FlatShading]."
        },
        "side": {
          "!type": "number",
          "!doc": "Defines which side of faces will be rendered - front, back or both.\n\t\tDefault is [page:Materials THREE.FrontSide].\n\t\tOther options are [page:Materials THREE.BackSide] and [page:Materials THREE.DoubleSide]."
        },
        "transparent": {
          "!type": "bool",
          "!doc": "Defines whether this material is transparent. This has an effect on rendering\n\t\tas transparent objects need special treatment and are rendered after\n\t\tnon-transparent objects. <br>\n\t\tWhen set to true, the extent to which the material is transparent is\n\t\tcontrolled by setting it's [property:Float opacity] property. <br>\n\t\tDefault is *false*."
        },
        "type": {
          "!type": "string",
          "!doc": "Value is the string 'Material'. This shouldn't be changed, and can be used to\n\t\tfind all objects of this type in a scene."
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this material instance.\n\t\tThis gets automatically assigned, so this shouldn't be edited."
        },
        "vertexColors": {
          "!type": "number",
          "!doc": "Defines whether vertex coloring is used.\n\t\tDefault is [page:Materials THREE.NoColors].\n\t\tOther options are [page:Materials THREE.VertexColors] and [page:Materials THREE.FaceColors]."
        },
        "visible": {
          "!type": "bool",
          "!doc": "Defines whether this material is visible. Default is *true*."
        },
        "clone": {
          "!type": "fn() -> +THREE.Material",
          "!doc": "Return a new materials with the same parameters as this material."
        },
        "copy": {
          "!type": "fn(material: material) -> +THREE.Material",
          "!doc": "Copy the parameters from the passed material into this material."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "This disposes the material. Textures of a material don't get disposed.\n\t\tThese needs to be disposed by [page:Texture Texture]."
        },
        "setValues": {
          "!type": "fn(values: object)",
          "!doc": "values -- a container with parameters.<br>\n\t\tSets the properties based on the *values*."
        },
        "toJSON": {
          "!type": "fn(meta: object)",
          "!doc": "meta -- object containing metadata such as textures or images for the material.<br>\n\t\tConvert the material to three.js JSON format."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Call [method:null dispatchEvent]( { type: '[page:object update]' }) on the material."
        }
      },
      "!doc": "Abstract base class for materials.<br><br>\n\n\t\tMaterials describe the appearance of [page:Object objects].\n\t\tThey are defined in a (mostly) renderer-independent way, so you don't have to\n\t\trewrite materials if you decide to use a different renderer.<br><br>\n\n\t\tWith the exception of [page:MultiMaterial MultiMaterial], the following properties\n\t\tand methods are inherited by all other material types (although they may have different defaults).",
      "!type": "fn()"
    },
    "MeshBasicMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshBasicMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "alphaMap": {
          "!type": "+THREE.Texture",
          "!doc": "The alpha map is a grayscale texture that controls the opacity across the surface\n\t\t\t(black: fully transparent; white: fully opaque). Default is null.<br><br>\n\n\t\t\tOnly the color of the texture is used, ignoring the alpha channel if one exists.\n\t\t\tFor RGB and RGBA textures, the [page:WebGLRenderer WebGL] renderer will use the\n\t\t\tgreen channel when sampling this texture due to the extra bit of precision provided\n\t\t\tfor green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and\n\t\t\tluminance/alpha textures will also still work as expected."
        },
        "aoMap": {
          "!type": "+THREE.Texture",
          "!doc": "The ambient occlusion map. Default is null."
        },
        "aoMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the ambient occlusion effect. Default is 1. Zero is no occlusion effect."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "combine": {
          "!type": "number",
          "!doc": "How to combine the result of the surface's color with the environment map, if any.<br><br>\n\n\t\t\tOptions are [page:Materials THREE.Multiply] (default), [page:Materials THREE.MixOperation],\n\t\t\t[page:Materials THREE.AddOperation]. If mix is chosen, the [page:.reflectivity] is used to\n\t\t\tblend between the two colors."
        },
        "isMeshBasicMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh basic materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "envMap": {
          "!type": "TextureCube",
          "!doc": "The environment map. Default is null."
        },
        "lightMap": {
          "!type": "+THREE.Texture",
          "!doc": "The light map. Default is null. The lightMap requires a second set of UVs."
        },
        "lightMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the baked light. Default is 1."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "The color map. Default is  null."
        },
        "morphTargets": {
          "!type": "bool",
          "!doc": "Define whether the material uses morphTargets. Default is false."
        },
        "reflectivity": {
          "!type": "number",
          "!doc": "How much the environment map affects the surface; also see [page:.combine]."
        },
        "refractionRatio": {
          "!type": "number",
          "!doc": "The index of refraction for an environment map using [page:Textures THREE.CubeRefractionMapping]. Default is *0.98*."
        },
        "skinning": {
          "!type": "bool",
          "!doc": "Define whether the material uses skinning. Default is false."
        },
        "specularMap": {
          "!type": "+THREE.Texture",
          "!doc": "Specular map used by the material. Default is null."
        },
        "wireframe": {
          "!type": "bool",
          "!doc": "Render geometry as wireframe. Default is *false* (i.e. render as flat polygons)."
        },
        "wireframeLinecap": {
          "!type": "string",
          "!doc": "Define appearance of line ends. Possible values are \"butt\", \"round\" and \"square\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap 2D Canvas lineCap]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinejoin": {
          "!type": "string",
          "!doc": "Define appearance of line joints. Possible values are \"round\", \"bevel\" and \"miter\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineJoin 2D Canvas lineJoin]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        }
      },
      "!doc": "A material for drawing geometries in a simple shaded (flat or wireframe) way.<br><br>\n\n\t\t\tThis material is not affected by lights.",
      "!type": "fn(parameters: object)"
    },
    "MeshDepthMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshDepthMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "alphaMap": {
          "!type": "+THREE.Texture",
          "!doc": "The alpha map is a grayscale texture that controls the opacity across the surface\n\t\t\t(black: fully transparent; white: fully opaque). Default is null.<br><br>\n\n\t\t\tOnly the color of the texture is used, ignoring the alpha channel if one exists.\n\t\t\tFor RGB and RGBA textures, the [page:WebGLRenderer WebGL] renderer will use the\n\t\t\tgreen channel when sampling this texture due to the extra bit of precision provided\n\t\t\tfor green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and\n\t\t\tluminance/alpha textures will also still work as expected."
        },
        "depthPacking": {
          "!type": "Constant",
          "!doc": "Encoding for depth packing. Default is [page:Textures BasicDepthPacking]."
        },
        "displacementMap": {
          "!type": "+THREE.Texture",
          "!doc": "The displacement map affects the position of the mesh's vertices. Unlike other maps\n\t\t\twhich only affect the light and shade of the material the displaced vertices can cast shadows,\n\t\t\tblock other objects, and otherwise act as real geometry. The displacement texture is\n\t\t\tan image where the value of each pixel (white being the highest) is mapped against,\n\t\t\tand repositions, the vertices of the mesh."
        },
        "displacementScale": {
          "!type": "number",
          "!doc": "How much the displacement map affects the mesh (where black is no displacement,\n\t\t\tand white is maximum displacement). Without a displacement map set, this value is not applied.\n\t\t\t Default is 1."
        },
        "displacementBias": {
          "!type": "number",
          "!doc": "The offset of the displacement map's values on the mesh's vertices.\n\t\t\tWithout a displacement map set, this value is not applied. Default is 0."
        },
        "fog": {
          "!type": "bool",
          "!doc": "Whether the material is affected by fog. Default is *false*."
        },
        "isMeshDepthMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh depth materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "The color map. Default is  null."
        },
        "morphTargets": {
          "!type": "boolean",
          "!doc": "Define whether the material uses morphTargets. Default is false."
        },
        "skinning": {
          "!type": "bool",
          "!doc": "Define whether the material uses skinning. Default is false."
        },
        "wireframe": {
          "!type": "boolean",
          "!doc": "Render geometry as wireframe. Default is false (i.e. render as smooth shaded)."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        }
      },
      "!doc": "A material for drawing geometry by depth. Depth is based off of the camera near and far plane. White is nearest, black is farthest.",
      "!type": "fn(parameters: object)"
    },
    "MeshLambertMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshLambertMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "alphaMap": {
          "!type": "+THREE.Texture",
          "!doc": "The alpha map is a grayscale texture that controls the opacity across the surface\n\t\t\t(black: fully transparent; white: fully opaque). Default is null.<br><br>\n\n\t\t\tOnly the color of the texture is used, ignoring the alpha channel if one exists.\n\t\t\tFor RGB and RGBA textures, the [page:WebGLRenderer WebGL] renderer will use the\n\t\t\tgreen channel when sampling this texture due to the extra bit of precision provided\n\t\t\tfor green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and\n\t\t\tluminance/alpha textures will also still work as expected."
        },
        "aoMap": {
          "!type": "+THREE.Texture",
          "!doc": "The ambient occlusion map. Default is null."
        },
        "aoMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the ambient occlusion effect. Default is 1. Zero is no occlusion effect."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "combine": {
          "!type": "number",
          "!doc": "How to combine the result of the surface's color with the environment map, if any.<br><br>\n\n\t\t\tOptions are [page:Materials THREE.Multiply] (default), [page:Materials THREE.MixOperation],\n\t\t\t[page:Materials THREE.AddOperation]. If mix is chosen, the [page:.reflectivity] is used to\n\t\t\tblend between the two colors."
        },
        "emissive": {
          "!type": "+THREE.Color",
          "!doc": "Emissive (light) color of the material, essentially a solid color unaffected by other lighting.\n\t\tDefault is black."
        },
        "emissiveMap": {
          "!type": "+THREE.Texture",
          "!doc": "Set emisssive (glow) map. Default is null. The emissive map color is modulated by\n\t\tthe emissive color and the emissive intensity. If you have an emissive map, be sure to\n\t\tset the emissive color to something other than black."
        },
        "emissiveIntensity": {
          "!type": "number",
          "!doc": "Intensity of the emissive light. Modulates the emissive color. Default is 1."
        },
        "envMap": {
          "!type": "TextureCube",
          "!doc": "The environment map. Default is null."
        },
        "isMeshLambertMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh Lambert materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lightMap": {
          "!type": "+THREE.Texture",
          "!doc": "The light map. Default is null. The lightMap requires a second set of UVs."
        },
        "lightMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the baked light. Default is 1."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "The color map. Default is  null."
        },
        "morphNormals": {
          "!type": "boolean",
          "!doc": "Defines whether the material uses morphNormals. Set as true to pass morphNormal\n\t\t\tattributes from the [page:Geometry]\tto the shader. Default is *false*."
        },
        "morphTargets": {
          "!type": "bool",
          "!doc": "Define whether the material uses morphTargets. Default is false."
        },
        "reflectivity": {
          "!type": "number",
          "!doc": "How much the environment map affects the surface; also see [page:.combine]."
        },
        "refractionRatio": {
          "!type": "number",
          "!doc": "The index of refraction for an environment map using [page:Textures THREE.CubeRefractionMapping]. Default is *0.98*."
        },
        "skinning": {
          "!type": "bool",
          "!doc": "Define whether the material uses skinning. Default is false."
        },
        "specularMap": {
          "!type": "+THREE.Texture",
          "!doc": "Specular map used by the material. Default is null."
        },
        "wireframe": {
          "!type": "bool",
          "!doc": "Render geometry as wireframe. Default is *false* (i.e. render as flat polygons)."
        },
        "wireframeLinecap": {
          "!type": "string",
          "!doc": "Define appearance of line ends. Possible values are \"butt\", \"round\" and \"square\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap 2D Canvas lineCap]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinejoin": {
          "!type": "string",
          "!doc": "Define appearance of line joints. Possible values are \"round\", \"bevel\" and \"miter\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineJoin 2D Canvas lineJoin]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        }
      },
      "!doc": "A material for non-shiny surfaces, without specular highlights.<br><br>\n\n\t\t\tThe uses a non-physically based [link:https://en.wikipedia.org/wiki/Lambertian_reflectance Lambertian]\n\t\t\tmodel\tfor calculating reflectance. This can simulate some surfaces (such as untreated wood or stone) well,\n\t\t\tbut cannot simulate shiny surfaces with specular highlights (such as varnished wood).<br><br>\n\n\n\n\t\t\tShading is calculated using a [link:https://en.wikipedia.org/wiki/Gouraud_shading Gouraud] shading model.\n\t\t\tThis calculates shading per vertex (i.e. in the [link:https://en.wikipedia.org/wiki/Shader#Vertex_shaders vertex shader])\n\t\t\tand interpolates the results over the polygon's faces.<br><br>\n\n\t\t\tDue to the simplicity of the reflectance and illumination models, performance will be greater\n\t\t\twhen using this material over the [page:MeshPhongMaterial],\t[page:MeshStandardMaterial] or [page:MeshPhysicalMaterial],\n\t\t\tat the cost of some graphical accuracy.",
      "!type": "fn(parameters: object)"
    },
    "MeshNormalMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshNormalMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "fog": {
          "!type": "bool",
          "!doc": "Whether the material is affected by fog. Default is *false*."
        },
        "isMeshNormalMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh normal materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "morphTargets": {
          "!type": "boolean",
          "!doc": "Define whether the material uses morphTargets. Default is false."
        },
        "wireframe": {
          "!type": "boolean",
          "!doc": "Render geometry as wireframe. Default is false (i.e. render as smooth shaded)."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        }
      },
      "!doc": "A material that maps the normal vectors to RGB colors.",
      "!type": "fn(parameters: object)"
    },
    "MeshPhongMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshPhongMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "alphaMap": {
          "!type": "+THREE.Texture",
          "!doc": "The alpha map is a grayscale texture that controls the opacity across the surface\n\t\t\t(black: fully transparent; white: fully opaque). Default is null.<br><br>\n\n\t\t\tOnly the color of the texture is used, ignoring the alpha channel if one exists.\n\t\t\tFor RGB and RGBA textures, the [page:WebGLRenderer WebGL] renderer will use the\n\t\t\tgreen channel when sampling this texture due to the extra bit of precision provided\n\t\t\tfor green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and\n\t\t\tluminance/alpha textures will also still work as expected."
        },
        "aoMap": {
          "!type": "+THREE.Texture",
          "!doc": "The ambient occlusion map. Default is null."
        },
        "aoMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the ambient occlusion effect. Default is 1. Zero is no occlusion effect."
        },
        "bumpMap": {
          "!type": "+THREE.Texture",
          "!doc": "The texture to create a bump map. The black and white values map to the perceived depth in relation to the lights.\n\t\t\tBump doesn't actually affect the geometry of the object, only the lighting. If a normal map is defined this will\n\t\t\tbe ignored."
        },
        "bumpScale": {
          "!type": "number",
          "!doc": "How much the bump map affects the material. Typical ranges are 0-1. Default is 1."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "combine": {
          "!type": "number",
          "!doc": "How to combine the result of the surface's color with the environment map, if any.<br><br>\n\n\t\t\tOptions are [page:Materials THREE.Multiply] (default), [page:Materials THREE.MixOperation],\n\t\t\t[page:Materials THREE.AddOperation]. If mix is chosen, the [page:.reflectivity] is used to\n\t\t\tblend between the two colors."
        },
        "displacementMap": {
          "!type": "+THREE.Texture",
          "!doc": "The displacement map affects the position of the mesh's vertices. Unlike other maps\n\t\t\twhich only affect the light and shade of the material the displaced vertices can cast shadows,\n\t\t\tblock other objects, and otherwise act as real geometry. The displacement texture is\n\t\t\tan image where the value of each pixel (white being the highest) is mapped against,\n\t\t\tand repositions, the vertices of the mesh."
        },
        "displacementScale": {
          "!type": "number",
          "!doc": "How much the displacement map affects the mesh (where black is no displacement,\n\t\t\tand white is maximum displacement). Without a displacement map set, this value is not applied.\n\t\t\t Default is 1."
        },
        "displacementBias": {
          "!type": "number",
          "!doc": "The offset of the displacement map's values on the mesh's vertices.\n\t\t\tWithout a displacement map set, this value is not applied. Default is 0."
        },
        "emissive": {
          "!type": "+THREE.Color",
          "!doc": "Emissive (light) color of the material, essentially a solid color unaffected by other lighting.\n\t\tDefault is black."
        },
        "emissiveMap": {
          "!type": "+THREE.Texture",
          "!doc": "Set emisssive (glow) map. Default is null. The emissive map color is modulated by\n\t\tthe emissive color and the emissive intensity. If you have an emissive map, be sure to\n\t\tset the emissive color to something other than black."
        },
        "emissiveIntensity": {
          "!type": "number",
          "!doc": "Intensity of the emissive light. Modulates the emissive color. Default is 1."
        },
        "envMap": {
          "!type": "TextureCube",
          "!doc": "The environment map. Default is null."
        },
        "isMeshPhongMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh Phong materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lightMap": {
          "!type": "+THREE.Texture",
          "!doc": "The light map. Default is null. The lightMap requires a second set of UVs."
        },
        "lightMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the baked light. Default is 1."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "The color map. Default is null. The texture map color is modulated by the diffuse [page:.color]."
        },
        "morphNormals": {
          "!type": "boolean",
          "!doc": "Defines whether the material uses morphNormals. Set as true to pass morphNormal\n\t\t\tattributes from the [page:Geometry]\tto the shader. Default is *false*."
        },
        "morphTargets": {
          "!type": "bool",
          "!doc": "Define whether the material uses morphTargets. Default is false."
        },
        "normalMap": {
          "!type": "+THREE.Texture",
          "!doc": "The texture to create a normal map. The RGB values affect the surface normal for each pixel fragment and change\n\t\t\tthe way the color is lit. Normal maps do not change the actual shape of the surface, only the lighting."
        },
        "normalScale": {
          "!type": "+THREE.Vector2",
          "!doc": "How much the normal map affects the material. Typical ranges are 0-1.\n\t\t\tDefault is a [page:Vector2] set to (1,1)."
        },
        "reflectivity": {
          "!type": "number",
          "!doc": "How much the environment map affects the surface; also see [page:.combine]."
        },
        "refractionRatio": {
          "!type": "number",
          "!doc": "The index of refraction for an environment map using [page:Textures THREE.CubeRefractionMapping]. Default is *0.98*."
        },
        "shininess": {
          "!type": "number",
          "!doc": "How shiny the [page:.specular] highlight is; a higher value gives a sharper highlight. Default is *30*."
        },
        "skinning": {
          "!type": "bool",
          "!doc": "Define whether the material uses skinning. Default is false."
        },
        "specular": {
          "!type": "+THREE.Texture",
          "!doc": "Specular color of the material. Default is a [page:Color] set to *0x111111* (very dark grey).<br><br>\n\n\t\t\tThis defines how shiny the material is and the color of its shine."
        },
        "specularMap": {
          "!type": "+THREE.Texture",
          "!doc": "The specular map value affects both how much the specular surface highlight\n\t\t\tcontributes and how much of the environment map affects the surface. Default is null."
        },
        "wireframe": {
          "!type": "bool",
          "!doc": "Render geometry as wireframe. Default is *false* (i.e. render as flat polygons)."
        },
        "wireframeLinecap": {
          "!type": "string",
          "!doc": "Define appearance of line ends. Possible values are \"butt\", \"round\" and \"square\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap 2D Canvas lineCap]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinejoin": {
          "!type": "string",
          "!doc": "Define appearance of line joints. Possible values are \"round\", \"bevel\" and \"miter\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineJoin 2D Canvas lineJoin]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        }
      },
      "!doc": "A material for shiny surfaces with specular highlights.<br><br>\n\n\t\t\tThe uses a non-physically based [link:https://en.wikipedia.org/wiki/LBlinn-Phong_shading_model Blinn-Phong]\n\t\t\tmodel\tfor calculating reflectance. Unlike the Lambertian model used in the [page:MeshLambertMaterial]\n\t\t\tthis can simulate shiny surfaces with specular highlights (such as varnished wood).<br><br>\n\n\t\t\tShading is calculated using a [link:https://en.wikipedia.org/wiki/Phong_shading Phong] shading model.\n\t\t\tThis calculates shading per pixel (i.e. in the [link:https://en.wikipedia.org/wiki/Shader#Pixel_shaders fragment shader],\n\t\t\tAKA pixel shader)\twhich gives more accurate results than the Gouraud model used by [page:MeshLambertMaterial],\n\t\t\tat the cost of some performance. The [page:MeshStandardMaterial] and [page:MeshPhysicalMaterial]\n\t\t\talso use this shading model.<br><br>\n\n\t\t\tPerformance will generally be greater when using this material over the\t[page:MeshStandardMaterial]\n\t\t\tor [page:MeshPhysicalMaterial], at the cost of some graphical accuracy.",
      "!type": "fn(parameters: object)"
    },
    "MeshPhysicalMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshPhysicalMaterial",
      "prototype": {
        "!proto": "THREE.MeshStandardMaterial.prototype",
        "clearCoat": {
          "!type": "number",
          "!doc": "ClearCoat level, from *0.0* to *1.0*. Default is *0.0*."
        },
        "clearCoatRoughness": {
          "!type": "number",
          "!doc": "How rough the clearCoat appears, from *0.0* to *1.0*. Default is *0.0*."
        },
        "isMeshPhysicalMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh physical materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "defines": {
          "!type": "object",
          "!doc": "An object of the form:\n\t\t\t<code>\n\t\t\t\t{ 'PHYSICAL': '' };\n\t\t\t</code>\n\n\t\t\tThis is used by the [page:WebGLRenderer] for selecting shaders."
        },
        "reflectivity": {
          "!type": "number",
          "!doc": "Degree of reflectivity, from *0.0* to *1.0*. Default is *0.5*.<br>\n\n\t\tThis models the reflectivity of non-metallic materials. It has no effect when [page:MeshStandardMaterial.metalness metalness] is *1.0*"
        }
      },
      "!doc": "An extension of the [page:MeshStandardMaterial] that allows for greater control over reflectivity.<br><br>\n\n\t\t\tNote that for best results you should always specify an [page:.envMap environment map] when using this material.",
      "!type": "fn(parameters: object)"
    },
    "MeshStandardMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshStandardMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "alphaMap": {
          "!type": "+THREE.Texture",
          "!doc": "The alpha map is a grayscale texture that controls the opacity across the surface\n\t\t\t(black: fully transparent; white: fully opaque). Default is null.<br><br>\n\n\t\t\tOnly the color of the texture is used, ignoring the alpha channel if one exists.\n\t\t\tFor RGB and RGBA textures, the [page:WebGLRenderer WebGL] renderer will use the\n\t\t\tgreen channel when sampling this texture due to the extra bit of precision provided\n\t\t\tfor green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and\n\t\t\tluminance/alpha textures will also still work as expected."
        },
        "aoMap": {
          "!type": "+THREE.Texture",
          "!doc": "The ambient occlusion map. Default is null."
        },
        "aoMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the ambient occlusion effect. Default is 1. Zero is no occlusion effect."
        },
        "bumpMap": {
          "!type": "+THREE.Texture",
          "!doc": "The texture to create a bump map. The black and white values map to the perceived depth in relation to the lights.\n\t\t\tBump doesn't actually affect the geometry of the object, only the lighting. If a normal map is defined this will\n\t\t\tbe ignored."
        },
        "bumpScale": {
          "!type": "number",
          "!doc": "How much the bump map affects the material. Typical ranges are 0-1. Default is 1."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "defines": {
          "!type": "object",
          "!doc": "An object of the form:\n\t\t\t<code>\n\t\t\t\t{ 'STANDARD': '' };\n\t\t\t</code>\n\n\t\t\tThis is used by the [page:WebGLRenderer] for selecting shaders."
        },
        "displacementMap": {
          "!type": "+THREE.Texture",
          "!doc": "The displacement map affects the position of the mesh's vertices. Unlike other maps\n\t\t\twhich only affect the light and shade of the material the displaced vertices can cast shadows,\n\t\t\tblock other objects, and otherwise act as real geometry. The displacement texture is\n\t\t\tan image where the value of each pixel (white being the highest) is mapped against,\n\t\t\tand repositions, the vertices of the mesh."
        },
        "displacementScale": {
          "!type": "number",
          "!doc": "How much the displacement map affects the mesh (where black is no displacement,\n\t\t\tand white is maximum displacement). Without a displacement map set, this value is not applied.\n\t\t\t Default is 1."
        },
        "displacementBias": {
          "!type": "number",
          "!doc": "The offset of the displacement map's values on the mesh's vertices.\n\t\t\tWithout a displacement map set, this value is not applied. Default is 0."
        },
        "emissive": {
          "!type": "+THREE.Color",
          "!doc": "Emissive (light) color of the material, essentially a solid color unaffected by other lighting.\n\t\tDefault is black."
        },
        "emissiveMap": {
          "!type": "+THREE.Texture",
          "!doc": "Set emisssive (glow) map. Default is null. The emissive map color is modulated by\n\t\tthe emissive color and the emissive intensity. If you have an emissive map, be sure to\n\t\tset the emissive color to something other than black."
        },
        "emissiveIntensity": {
          "!type": "number",
          "!doc": "Intensity of the emissive light. Modulates the emissive color. Default is 1."
        },
        "envMap": {
          "!type": "TextureCube",
          "!doc": "The environment map. Default is null."
        },
        "envMapIntensity": {
          "!type": "number",
          "!doc": "Scales the effect of the environment map by multiplying its color."
        },
        "isMeshStandardMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh standard materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lightMap": {
          "!type": "+THREE.Texture",
          "!doc": "The light map. Default is null. The lightMap requires a second set of UVs."
        },
        "lightMapIntensity": {
          "!type": "number",
          "!doc": "Intensity of the baked light. Default is 1."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "The color map. Default is null. The texture map color is modulated by the diffuse [page:.color]."
        },
        "metalness": {
          "!type": "number",
          "!doc": "How much the material is like a metal. Non-metallic materials such as wood or stone use 0.0, metallic use 1.0, nothing in between. A value between 0.0 and 1.0 could be used for a rusty metal look.<br>"
        },
        "metalnessMap": {
          "!type": "+THREE.Texture",
          "!doc": "The red channel of this texture is used to alter the metalness of the material."
        },
        "morphNormals": {
          "!type": "boolean",
          "!doc": "Defines whether the material uses morphNormals. Set as true to pass morphNormal\n\t\t\tattributes from the [page:Geometry]\tto the shader. Default is *false*."
        },
        "morphTargets": {
          "!type": "bool",
          "!doc": "Define whether the material uses morphTargets. Default is false."
        },
        "normalMap": {
          "!type": "+THREE.Texture",
          "!doc": "The texture to create a normal map. The RGB values affect the surface normal for each pixel fragment and change\n\t\t\tthe way the color is lit. Normal maps do not change the actual shape of the surface, only the lighting."
        },
        "normalScale": {
          "!type": "+THREE.Vector2",
          "!doc": "How much the normal map affects the material. Typical ranges are 0-1.\n\t\t\tDefault is a [page:Vector2] set to (1,1)."
        },
        "refractionRatio": {
          "!type": "number",
          "!doc": "The index of refraction for an environment map using [page:Textures THREE.CubeRefractionMapping]. Default is *0.98*."
        },
        "roughness": {
          "!type": "number",
          "!doc": "How rough the material appears. 0.0 means a smooth mirror reflection, 1.0 means fully diffuse."
        },
        "roughnessMap": {
          "!type": "+THREE.Texture",
          "!doc": "The red channel of this texture is used to alter the roughness of the material."
        },
        "skinning": {
          "!type": "bool",
          "!doc": "Define whether the material uses skinning. Default is false."
        },
        "wireframe": {
          "!type": "bool",
          "!doc": "Render geometry as wireframe. Default is *false* (i.e. render as flat polygons)."
        },
        "wireframeLinecap": {
          "!type": "string",
          "!doc": "Define appearance of line ends. Possible values are \"butt\", \"round\" and \"square\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap 2D Canvas lineCap]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinejoin": {
          "!type": "string",
          "!doc": "Define appearance of line joints. Possible values are \"round\", \"bevel\" and \"miter\". Default is 'round'.<br><br>\n\n\t\t\tThis corresponds to the [link:https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineJoin 2D Canvas lineJoin]\n\t\t\tproperty and it is ignored by the [page:WebGLRenderer WebGL] renderer."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        }
      },
      "!doc": "A standard physically based material.<br><br>\n\n\t\t\tPhysically based rendering (PBR) has recently become the standard in many 3D applications, such as\n\t\t\t[link:https://blogs.unity3d.com/2014/10/29/physically-based-shading-in-unity-5-a-primer/ Unity],\n\t\t\t[link:https://docs.unrealengine.com/latest/INT/Engine/Rendering/Materials/PhysicallyBased/ Unreal] and\n\t\t\t[link:http://area.autodesk.com/blogs/the-3ds-max-blog/what039s-new-for-rendering-in-3ds-max-2017 3D Studio Max].<br><br>\n\n\t\t\tThis approach differs from older approaches in that instead of using approximations for the way in which\n\t\t\tlight\tinteracts with a surface, a physically correct model is used. The idea is that, instead of\n\t\t\ttweaking materials to look good under specific lighting, a material can\tbe created that\n\t\t\twill react 'correctly' under all lighting scenarios.<br><br>\n\n\t\t\tIn practice this gives a more\taccurate and realistic looking result than the [page:MeshLambertMaterial]\n\t\t\tor [page:MeshPhongMaterial], at the cost of being somewhat more computationally expensive.<br><br>\n\n\t\t\tShading is calculated in the same way as for the [page:MeshPhongMaterial], using a\n\t\t\t[link:https://en.wikipedia.org/wiki/Phong_shading Phong] shading model.\tThis calculates shading\n\t\t\tper pixel (i.e. in the [link:https://en.wikipedia.org/wiki/Shader#Pixel_shaders fragment shader],\n\t\t\tAKA pixel shader) which gives more accurate results than the Gouraud model used by\n\t\t\t[page:MeshLambertMaterial], at the cost of some performance.<br><br>\n\n\t\t\tNote that for best results you should always specify an [page:.envMap environment map] when using\n\t\t\tthis material.<br><br>\n\n\t\t\tFor a non-technical introduction to the concept of PBR and how to set up a PBR material,\n\t\t\tcheck out these articles by the people at [link:https://www.marmoset.co marmoset]:\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t[link:https://www.marmoset.co/posts/basic-theory-of-physically-based-rendering/ Basic Theory of Physically Based Rendering]\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t[link:https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/ Physically Based Rendering and You Can Too]\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\tTechnical details of the approach used in three.js (and most other PBR systems) can be found is this\n\t\t\t[link:https://disney-animation.s3.amazonaws.com/library/s2012_pbs_disney_brdf_notes_v2.pdf paper from Disney] (pdf),\n\t\t\tby Brent Burley.",
      "!type": "fn(parameters: object)"
    },
    "MeshToonMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MeshToonMaterial",
      "prototype": {
        "!proto": "THREE.MeshPhongMaterial.prototype",
        "gradientMap": {
          "!type": "+THREE.Texture",
          "!doc": "Gradient map for the toon shading. Default is *null*."
        },
        "isMeshToonMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are mesh toon materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "defines": {
          "!type": "object",
          "!doc": "An object of the form:\n\t\t\t<code>\n\t\t\t\t{ 'TOON': '' };\n\t\t\t</code>\n\n\t\t\tThis is used by the [page:WebGLRenderer] for selecting shaders."
        }
      },
      "!doc": "An extension of the [page:MeshPhongMaterial] with toon shading.",
      "!type": "fn(parameters: object)"
    },
    "MultiMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/MultiMaterial",
      "prototype": {
        "isMultiMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are multi materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "materials": {
          "!type": "[]",
          "!doc": "An array containing the materials being used by the MultiMaterial."
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this material instance.\n\t\tThis gets automatically assigned, so this shouldn't be edited."
        },
        "visible": {
          "!type": "[]",
          "!doc": "Whether or not [page:Mesh meshes] using this material should be rendered."
        },
        "clone": {
          "!type": "fn() -> +THREE.MultiMaterial",
          "!doc": "Return a clone of this MultiMaterial."
        },
        "toJSON": {
          "!type": "fn(meta: object)",
          "!doc": "meta -- object containing metadata such as textures or images for the material.<br>\n\t\tConvert the material to three.js JSON format."
        }
      },
      "!doc": "A Material to define multiple materials for the same geometry.\n\t\tThe geometry decides which material is used for which faces by the [page:Face3 faces materialindex].\n\t\tThe material index corresponds with the index of the material in the [page:.materials] array.",
      "!type": "fn(materials: [])"
    },
    "PointsMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/PointsMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff)."
        },
        "isPointsMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are points materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "Sets the color of the points using data from a [page:Texture]."
        },
        "size": {
          "!type": "number",
          "!doc": "Sets the size of the points. Default is 1.0."
        },
        "sizeAttenuation": {
          "!type": "bool",
          "!doc": "Specify whether points' size will get smaller with the distance. Default is true."
        }
      },
      "!doc": "The default material used by [page:Points].",
      "!type": "fn(parameters: object)"
    },
    "RawShaderMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/RawShaderMaterial",
      "prototype": {
        "!proto": "THREE.ShaderMaterial.prototype",
        "isRawShaderMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are raw shader materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        }
      },
      "!doc": "This class works just like [page:ShaderMaterial], except that definitions of\n\t\t\tbuilt-in uniforms and attributes are not automatically prepended to the GLSL shader code.",
      "!type": "fn(parameters: object)"
    },
    "ShaderMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/ShaderMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "clipping": {
          "!type": "bool",
          "!doc": "Defines whether this material supports clipping; true to let the renderer pass the clippingPlanes uniform. Default is false."
        },
        "defaultAttributeValues": {
          "!type": "object",
          "!doc": "When the rendered geometry doesn't include these attributes but the material does,\n\t\t\t these default values will be passed to the shaders. This avoids errors when buffer data is missing.\n\n\t\t\t<code>\nthis.defaultAttributeValues = {\n\t'color': [ 1, 1, 1 ],\n\t'uv': [ 0, 0 ],\n\t'uv2': [ 0, 0 ]\n};\n\t\t\t</code>"
        },
        "defines": {
          "!type": "object",
          "!doc": "Defines custom constants using *#define* directives within the GLSL code for both the\n\t\tvertex shader and the fragment shader; each key/value pair yields another directive:\n\t\t<code>\n\t\tdefines: {\n\t\t\tFOO: 15,\n\t\t\tBAR: true\n\t\t}\n\t\t</code>\n\t\tyields the lines\n\t\t<code>\n\t\t#define FOO 15\n\t\t#define BAR true\n\t\t</code>\n\t\tin the GLSL code."
        },
        "extensions": {
          "!type": "object",
          "!doc": "An object with the folowing properties:\n\t\t<code>\nthis.extensions = {\n\tderivatives: false, // set to use derivatives\n\tfragDepth: false, // set to use fragment depth values\n\tdrawBuffers: false, // set to use draw buffers\n\tshaderTextureLOD: false // set to use shader texture LOD\n};\n\t\t</code>"
        },
        "fog": {
          "!type": "bool",
          "!doc": "Define whether the material color is affected by global fog settings; true to pass\n\t\t\tfog uniforms to the shader. Default is false."
        },
        "fragmentShader": {
          "!type": "string",
          "!doc": "Fragment shader GLSL code.  This is the actual code for the shader. In the example above,\n\t\tthe *vertexShader* and *fragmentShader* code is extracted from the DOM; it could be passed\n\t\tas a string directly or loaded via AJAX instead."
        },
        "index0AttributeName": {
          "!type": "string",
          "!doc": "If set, this calls [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindAttribLocation gl.bindAttribLocation]\n\t\t\tto bind a generic vertex index to an attribute variable.\n\t\t\tDefault is undefined."
        },
        "isShaderMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are shader materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Defines whether this material uses lighting; true to pass uniform data related to lighting to this shader. Default is false."
        },
        "linewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        },
        "morphTargets": {
          "!type": "bool",
          "!doc": "Defines whether the material uses morphTargets; true morphTarget attributes to this shader"
        },
        "morphNormals": {
          "!type": "boolean",
          "!doc": "Defines whether the material uses morphNormals. Set as true to pass morphNormal attributes from the [page:Geometry]\n\t\t\tto the shader. Default is *false*."
        },
        "program": {
          "!type": "+THREE.WebGLProgram",
          "!doc": "The compiled shader program associated with this material, generated by [page:WebGLRenderer].\n\t\tYou should not need to access this property."
        },
        "shading": {
          "!type": "number",
          "!doc": "Define shading type, which determines whether normals are smoothed between vertices;\n\t\tpossible values are [page:Materials THREE.SmoothShading] or [page:Materials THREE.FlatShading]. Default is THREE.SmoothShading."
        },
        "skinning": {
          "!type": "bool",
          "!doc": "Define whether the material uses skinning; true to pass skinning attributes to the shader. Default is false."
        },
        "uniforms": {
          "!type": "object",
          "!doc": "An object of the form:\n\t\t\t<code>\n{ \"uniform1\": { value: 1.0 }, \"uniform2\": { value: 2 } }\n\t\t\t</code>\n\t\tspecifying the uniforms to be passed to the shader code; keys are uniform names, values are definitions of the form\n\t\t<code>\n\t\t{ value: 1.0 }\n\t\t</code>\n\t\twhere *value* is the value of the uniform. Names must match the name of the uniform,\n\t\tas defined in the GLSL code. Note that uniforms are refreshed on every frame,\n\t\tso updating the value of the uniform will immediately update the value available to the GLSL code."
        },
        "vertexColors": {
          "!type": "number",
          "!doc": "Define how the vertices are colored, by defining how the *colors* attribute gets populated.\n\t\tPossible values are [page:Materials THREE.NoColors], [page:Materials THREE.FaceColors] and\n\t\t[page:Materials THREE.VertexColors]. Default is THREE.NoColors."
        },
        "vertexShader": {
          "!type": "string",
          "!doc": "Vertex shader GLSL code.  This is the actual code for the shader. In the example above,\n\t\tthe *vertexShader* and *fragmentShader* code is extracted from the DOM; it could be passed\n\t\tas a string directly or loaded via AJAX instead."
        },
        "wireframe": {
          "!type": "bool",
          "!doc": "Render geometry as wireframe (using GL_LINES instead of GL_TRIANGLES). Default is false (i.e. render as flat polygons)."
        },
        "wireframeLinewidth": {
          "!type": "number",
          "!doc": "Controls wireframe thickness. Default is 1.<br><br>\n\n\t\tDue to limitations in the [link:https://code.google.com/p/angleproject ANGLE layer],\n\t\ton Windows platforms linewidth will always be 1 regardless of the set value."
        },
        "clone": {
          "!type": "fn() -> +THREE.ShaderMaterial",
          "!doc": "Generates a shallow copy of this material. Note that the vertexShader and fragmentShader\n\t\tare copied <em>by reference</em>, as are the definitions of the *attributes*; this means\n\t\tthat clones of the material will share the same compiled [page:WebGLProgram]. However, the\n\t\t*uniforms* are copied <em>by value</em>, which allows you to have different sets of uniforms\n\t\tfor different copies of the material."
        }
      },
      "!doc": "A material rendered with custom shaders. A shader is a small program written in\n\t\t\t[link:https://www.khronos.org/files/opengles_shading_language.pdf_ES GLSL] that runs on the GPU.\n\t\t\tYou may want to use a custom shader if you need to:\n\t\t<ul>\n\t\t\t<li>implement an effect not included with any of the built-in [page:Material materials]</li>\n\t\t\t<li>combine many objects into a single [page:Geometry] or [page:BufferGeometry] in order to improve performance</li>\n\t\t</ul>\n\t\tThere are the following notes to bear in mind when using a *ShaderMaterial*:\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\tA *ShaderMaterial* will only be rendered properly by [page:WebGLRenderer],\n\t\t\t\tsince the GLSL code in the [link:https://en.wikipedia.org/wiki/Shader#Vertex_shaders vertexShader]\n\t\t\t\tand [link:https://en.wikipedia.org/wiki/Shader#Pixel_shaders fragmentShader] properties must\n\t\t\t\tbe compiled and run on the GPU using WebGL.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tAs of THREE r72, directly assigning attributes in a ShaderMaterial is no longer supported.\n\t\t\t\tA [page:BufferGeometry] instance (instead of a [page:Geometry] instance) must be used instead,\n\t\t\t\tusing [page:BufferAttribute] instances to define custom attributes.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tAs of THREE r77, [page:WebGLRenderTarget] or [page:WebGLRenderTargetCube] instances\n\t\t\t\tare no longer supposed to be used as uniforms. Their [page:Texture texture] property\n\t\t\t\tmust be used instead.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tBuilt in attributes an uniforms are passed to the shaders along with your code.\n\t\t\t\tIf you don't want the [page:WebGLProgram] to add anything to your shader code, you can use\n\t\t\t\t[page:RawShaderMaterial] instead of this class.\n\t\t\t</li>\n\t\t</ul>",
      "!type": "fn(parameters: object)"
    },
    "ShadowMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/ShadowMaterial",
      "prototype": {
        "!proto": "THREE.ShaderMaterial.prototype",
        "isShadowMaterial": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are shadow materials. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *true*."
        },
        "transparent": {
          "!type": "bool",
          "!doc": "Defines whether this material is transparent. Default is *true*."
        }
      },
      "!doc": "This material can recieve shadows, but otherwise is completely transparent.",
      "!type": "fn()"
    },
    "SpriteMaterial": {
      "!url": "http://threejs.org/docs/#Reference/materials/SpriteMaterial",
      "prototype": {
        "!proto": "THREE.Material.prototype",
        "color": {
          "!type": "+THREE.Color",
          "!doc": "[page:Color] of the material, by default set to white (0xffffff). The [page:.map] is mutiplied by the color."
        },
        "fog": {
          "!type": "boolean",
          "!doc": "Whether or not this material affected by the scene's fog. Default is false"
        },
        "lights": {
          "!type": "bool",
          "!doc": "Whether the material is affected by lights. Default is *false*."
        },
        "map": {
          "!type": "+THREE.Texture",
          "!doc": "The texture map. Default is null."
        },
        "rotation": {
          "!type": "Radians",
          "!doc": "The rotation of the sprite in radians. Default is 0."
        }
      },
      "!doc": "A material for a use with a [page:Sprite].",
      "!type": "fn(parameters: object)"
    },
    "Box2": {
      "!url": "http://threejs.org/docs/#Reference/math/Box2",
      "prototype": {
        "min": {
          "!type": "+THREE.Vector2",
          "!doc": "[page:Vector2] representing the lower (x, y) boundary of the box.<br>\n\t\t\tDefault is ( + Infinity, + Infinity )."
        },
        "max": {
          "!type": "+THREE.Vector2",
          "!doc": "[page:Vector2] representing the lower upper (x, y) boundary of the box.<br>\n\t\t\tDefault is ( - Infinity, - Infinity )."
        },
        "clampPoint": {
          "!type": "fn(point: +THREE.Vector2, optionalTarget: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "[page:Vector2 point] - [page:Vector2] to clamp. <br>\n\t\t[page:Vector2 optionalTarget] — (optional) if specified, the result will be copied into this Vector2,\n\t\totherwise a new Vector2 will be created. <br><br>\n\n\t\t[link:https://en.wikipedia.org/wiki/Clamping_(graphics) Clamps] the [page:Vector2 point] within the bounds of this box.<br>"
        },
        "clone": {
          "!type": "fn() -> +THREE.Box2",
          "!doc": "Returns a new [page:Box2] with the same [page:.min min] and [page:.max max] as this one."
        },
        "containsBox": {
          "!type": "fn(box: +THREE.Box2) -> bool",
          "!doc": "[page:Box2 box] - [page:Box2 Box2] to test for inclusion.<br><br>\n\n\t\tReturns true if this box includes the entirety of [page:Box2 box]. If this and [page:Box2 box] are identical, <br>\n\t\tthis function also returns true."
        },
        "containsPoint": {
          "!type": "fn(point: +THREE.Vector2) -> bool",
          "!doc": "[page:Vector2 point] - [page:Vector2] to check for inclusion.<br><br>\n\n\t\tReturns true if the specified [page:Vector2 point] lies within or on the boundaries of this box."
        },
        "copy": {
          "!type": "fn(box: +THREE.Box2) -> +THREE.Box2",
          "!doc": "Copies the [page:.min min] and [page:.max max] from [page:Box2 box] to this box."
        },
        "distanceToPoint": {
          "!type": "fn(point: +THREE.Vector2) -> number",
          "!doc": "[page:Vector2 point] - [page:Vector2] to measure distance to.<br><br>\n\n\t\tReturns the distance from any edge of this box to the specified point.\n\t\tIf the [page:Vector2 point] lies inside of this box, the distance will be 0."
        },
        "equals": {
          "!type": "fn(box: +THREE.Box2) -> bool",
          "!doc": "[page:Box2 box] - Box to compare with this one.<br><br>\n\n\t\tReturns true if this box and [page:Box2 box] share the same lower and upper bounds."
        },
        "expandByPoint": {
          "!type": "fn(point: +THREE.Vector2) -> +THREE.Box2",
          "!doc": "[page:Vector2 point] - [page:Vector2] that should be included in the box.<br><br>\n\n\t\tExpands the boundaries of this box to include [page:Vector2 point]."
        },
        "expandByScalar": {
          "!type": "fn(scalar: float) -> +THREE.Box2",
          "!doc": "[page:float scalar] - Distance to expand the box by.<br><br>\n\n\t\tExpands each dimension of the box by [page:float scalar]. If negative, the dimensions of the box\n\t\twill be contracted."
        },
        "expandByVector": {
          "!type": "fn(vector: +THREE.Vector2) -> +THREE.Box2",
          "!doc": "[page:Vector2 vector] - [page:Vector2] to expand the box by.<br><br>\n\n\t\tExpands this box equilaterally by [page:Vector2 vector]. The width of this box will be\n\t\texpanded by the x component of [page:Vector2 vector] in both directions. The height of\n\t\tthis box will be expanded by the y component of [page:Vector2 vector] in both directions."
        },
        "getCenter": {
          "!type": "fn(optionalTarget: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "[page:Vector2 optionalTarget] — (optional) if specified, the result will be copied into this Vector2,\n\t\t\totherwise a new Vector2 will be created. <br><br>\n\n\t\tReturns the center point of the box as a [page:Vector2]."
        },
        "getParameter": {
          "!type": "fn(point: +THREE.Vector2, optionalTarget: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "[page:Vector2 point] - [page:Vector2].<br>\n\t\t[page:Vector2 optionalTarget] — (optional) if specified, the result will be copied into this Vector2,\n\t\totherwise a new Vector2 will be created. <br><br>\n\n\t\tReturns a point as a proportion of this box's width and height."
        },
        "getSize": {
          "!type": "fn(optionalTarget: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "[page:Vector2 optionalTarget] — (optional) if specified, the result will be copied into this Vector2,\n\t\t\totherwise a new Vector2 will be created. <br><br>\n\n\t\tReturns the width and height of this box."
        },
        "intersect": {
          "!type": "fn(box: +THREE.Box2) -> +THREE.Box2",
          "!doc": "[page:Box2 box] - Box to intersect with.<br><br>\n\n\t\tReturns the intersection of this and [page:Box2 box], setting the upper bound of this box to the lesser\n\t\tof the two boxes' upper bounds and the lower bound of this box to the greater of the two boxes'\n\t\tlower bounds."
        },
        "intersectsBox": {
          "!type": "fn(box: +THREE.Box2) -> bool",
          "!doc": "[page:Box2 box] - Box to check for intersection against.<br><br>\n\n\t\tDetermines whether or not this box intersects [page:Box2 box]."
        },
        "isEmpty": {
          "!type": "fn() -> bool",
          "!doc": "Returns true if this box includes zero points within its bounds.<br>\n\t\tNote that a box with equal lower and upper bounds still includes one point, the\n\t\tone both bounds share."
        },
        "makeEmpty": {
          "!type": "fn() -> +THREE.Box2",
          "!doc": "Makes this box empty."
        },
        "set": {
          "!type": "fn(min: +THREE.Vector2, max: +THREE.Vector2) -> +THREE.Box2",
          "!doc": "[page:Vector2 min] - (required ) [page:Vector2] representing the lower (x, y) boundary of the box. <br>\n\t\t\t[page:Vector2 max]  - (required) [page:Vector2] representing the lower upper (x, y) boundary of the box. <br><br>\n\n\t\t\tSets the lower and upper (x, y) boundaries of this box."
        },
        "setFromCenterAndSize": {
          "!type": "fn(center: +THREE.Vector2, size: +THREE.Vector2) -> +THREE.Box2",
          "!doc": "[page:Vector2 center] - Desired center position of the box ([page:Vector2]). <br>\n\t\t[page:Vector2 size] - Desired x and y dimensions of the box ([page:Vector2]).<br><br>\n\n\t\tCenters this box on [page:Vector2 center] and sets this box's width and height to the values specified\n\t\tin [page:Vector2 size]."
        },
        "setFromPoints": {
          "!type": "fn(points: []) -> +THREE.Box2",
          "!doc": "[page:Array points] - Array of [page:Vector2 Vector2s] that the resulting box will contain.<br><br>\n\n\t\tSets the upper and lower bounds of this box to include all of the points in [page:Array points]."
        },
        "translate": {
          "!type": "fn(offset: +THREE.Vector2) -> +THREE.Box2",
          "!doc": "[page:Vector2 offset] - Direction and distance of offset.<br><br>\n\n\t\tAdds [page:Vector2 offset] to both the upper and lower bounds of this box, effectively moving this box\n\t\t[page:Vector2 offset] units in 2D space."
        },
        "union": {
          "!type": "fn(box: +THREE.Box2) -> +THREE.Box2",
          "!doc": "[page:Box2 box] - Box that will be unioned with this box.<br><br>\n\n\t\tUnions this box with [page:Box2 box], setting the upper bound of this box to the greater of the\n\t\ttwo boxes' upper bounds and the lower bound of this box to the lesser of the two boxes'\n\t\tlower bounds."
        }
      },
      "!doc": "Represents a box in 2D space.",
      "!type": "fn(min: +THREE.Vector2, max: +THREE.Vector2)"
    },
    "Box3": {
      "!url": "http://threejs.org/docs/#Reference/math/Box3",
      "prototype": {
        "isBox3": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Box3s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "min": {
          "!type": "+THREE.Vector3",
          "!doc": "[page:Vector3] representing the lower (x, y, z) boundary of the box.<br>\n\t\t\tDefault is ( + Infinity, + Infinity, + Infinity )."
        },
        "max": {
          "!type": "+THREE.Vector3",
          "!doc": "[page:Vector3] representing the lower upper (x, y, z) boundary of the box.<br>\n\t\t\tDefault is ( - Infinity, - Infinity, - Infinity )."
        },
        "applyMatrix4": {
          "!type": "fn(matrix: +THREE.Matrix4) -> +THREE.Box3",
          "!doc": "[page:Matrix4 matrix] - The [page:Matrix4] to apply<br><br>\n\n\t\tTransforms this Box3 with the supplied matrix."
        },
        "clampPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - [page:Vector3] to clamp. <br>\n\t\t[page:Vector3 optionalTarget] — (optional) if specified, the result will be copied into this Vector3,\n\t\totherwise a new Vector3 will be created. <br><br>\n\n\t\t[link:https://en.wikipedia.org/wiki/Clamping_(graphics) Clamps] the [page:Vector3 point] within the bounds of this box.<br>"
        },
        "clone": {
          "!type": "fn() -> +THREE.Box3",
          "!doc": "Returns a new [page:Box3] with the same [page:.min min] and [page:.max max] as this one."
        },
        "containsBox": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - [page:Box3 Box3] to test for inclusion.<br><br>\n\n\t\tReturns true if this box includes the entirety of [page:Box3 box]. If this and [page:Box3 box] are identical, <br>\n\t\tthis function also returns true."
        },
        "containsPoint": {
          "!type": "fn(point: +THREE.Vector3) -> bool",
          "!doc": "[page:Vector3 point] - [page:Vector3] to check for inclusion.<br><br>\n\n\t\tReturns true if the specified [page:Vector3 point] lies within or on the boundaries of this box."
        },
        "copy": {
          "!type": "fn(box: +THREE.Box3) -> +THREE.Box3",
          "!doc": "[page:Box3 box]  - [page:Box3] to copy.<br><br>\n\n\t\tCopies the [page:.min min] and [page:.max max] from [page:Box3 box] to this box."
        },
        "distanceToPoint": {
          "!type": "fn(point: +THREE.Vector3) -> number",
          "!doc": "[page:Vector3 point] - [page:Vector3] to measure distance to.<br><br>\n\n\t\tReturns the distance from any edge of this box to the specified point.\n\t\tIf the [page:Vector3 point] lies inside of this box, the distance will be 0."
        },
        "equals": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - Box to compare with this one.<br><br>\n\n\t\tReturns true if this box and [page:Box3 box] share the same lower and upper bounds."
        },
        "expandByPoint": {
          "!type": "fn(point: +THREE.Vector3) -> +THREE.Box3",
          "!doc": "[page:Vector3 point] - [page:Vector3] that should be included in the box.<br><br>\n\n\t\tExpands the boundaries of this box to include [page:Vector3 point]."
        },
        "expandByScalar": {
          "!type": "fn(scalar: float) -> +THREE.Box3",
          "!doc": "[page:float scalar] - Distance to expand the box by.<br><br>\n\n\t\tExpands each dimension of the box by [page:float scalar]. If negative, the dimensions of the box\n\t\twill be contracted."
        },
        "expandByVector": {
          "!type": "fn(vector: +THREE.Vector3) -> +THREE.Box3",
          "!doc": "[page:Vector3 vector] - [page:Vector3] to expand the box by.<br><br>\n\n\t\tExpands this box equilaterally by [page:Vector3 vector]. The width of this box will be\n\t\texpanded by the x component of [page:Vector3 vector] in both directions. The height of\n\t\tthis box will be expanded by the y component of [page:Vector3 vector] in both directions.\n\t\tThe depth of this box will be expanded by the z component of *vector* in both directions."
        },
        "getBoundingSphere": {
          "!type": "fn(optionalTarget: +THREE.Sphere) -> +THREE.Sphere",
          "!doc": "[page:Sphere optionalTarget] — (optional) if specified, the result will be copied into this Sphere,\n\t\t\totherwise a new Sphere will be created. <br><br>\n\n\t\tGets a [page:Sphere] that bounds the box."
        },
        "getCenter": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] — (optional) if specified, the result will be copied into this Vector3,\n\t\t\totherwise a new Vector3 will be created. <br><br>\n\n\t\tReturns the center point of the box as a [page:Vector3]."
        },
        "getParameter": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - [page:Vector3].<br>\n\t\t[page:Vector3 optionalTarget] — (optional) if specified, the result will be copied into this Vector3,\n\t\totherwise a new Vector3 will be created. <br><br>\n\n\t\tReturns a point as a proportion of this box's width and height."
        },
        "getSize": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] — (optional) if specified, the result will be copied into this Vector3,\n\t\t\totherwise a new Vector3 will be created. <br><br>\n\n\t\tReturns the width, height and depth of this box."
        },
        "intersect": {
          "!type": "fn(box: +THREE.Box3) -> +THREE.Box3",
          "!doc": "[page:Box3 box] - Box to intersect with.<br><br>\n\n\t\tReturns the intersection of this and [page:Box3 box], setting the upper bound of this box to the lesser\n\t\tof the two boxes' upper bounds and the lower bound of this box to the greater of the two boxes'\n\t\tlower bounds."
        },
        "intersectsBox": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - Box to check for intersection against.<br><br>\n\n\t\tDetermines whether or not this box intersects [page:Box3 box]."
        },
        "intersectsPlane": {
          "!type": "fn(plane: +THREE.Plane) -> bool",
          "!doc": "[page:Plane plane] - [page:Plane] to check for intersection against.<br><br>\n\n\t\tDetermines whether or not this box intersects [page:Plane plane]."
        },
        "intersectsSphere": {
          "!type": "fn(sphere: +THREE.Sphere) -> bool",
          "!doc": "[page:Sphere sphere] - [page:Sphere] to check for intersection against.<br><br>\n\n\t\tDetermines whether or not this box intersects [page:Sphere sphere]."
        },
        "isEmpty": {
          "!type": "fn() -> bool",
          "!doc": "Returns true if this box includes zero points within its bounds.<br>\n\t\tNote that a box with equal lower and upper bounds still includes one point,\n\t\tthe one both bounds share."
        },
        "makeEmpty": {
          "!type": "fn() -> +THREE.Box3",
          "!doc": "Makes this box empty."
        },
        "set": {
          "!type": "fn(min: +THREE.Vector3, max: +THREE.Vector3) -> +THREE.Box3",
          "!doc": "[page:Vector3 min] - [page:Vector3] representing the lower (x, y, z) boundary of the box.<br>\n\t\t[page:Vector3 max] - [page:Vector3] representing the lower upper (x, y, z) boundary of the box.<br><br>\n\n\t\tSets the lower and upper (x, y, z) boundaries of this box."
        },
        "setFromArray": {
          "!type": "fn(array: []) -> +THREE.Box3",
          "!doc": "array -- An array of position data that the resulting box will envelop.<br><br>\n\n\t\tSets the upper and lower bounds of this box to include all of the data in *array*."
        },
        "setFromBufferAttribute": {
          "!type": "fn(attribute: +THREE.BufferAttribute) -> +THREE.Box3",
          "!doc": "[page:BufferAttribute attribute] - A buffer attribute of position data that the resulting box will envelop.<br><br>\n\n\t\tSets the upper and lower bounds of this box to include all of the data in [page:BufferAttribute attribute]."
        },
        "setFromCenterAndSize": {
          "!type": "fn(center: +THREE.Vector3, size: +THREE.Vector3) -> +THREE.Box3",
          "!doc": "[page:Vector3 center], - Desired center position of the box. <br>\n\t\t[page:Vector3 size] - Desired x, y and z dimensions of the box.<br><br>\n\n\t\tCenters this box on [page:Vector3 center] and sets this box's width, height and depth to the values specified <br>\n\t\tin [page:Vector3 size]"
        },
        "setFromObject": {
          "!type": "fn(object: +THREE.Object3D) -> +THREE.Box3",
          "!doc": "[page:Object3D object] - [page:Object3D] to compute the bounding box of.<br><br>\n\n\t\tComputes the world-axis-aligned bounding box of an [page:Object3D] (including its children),\n\t\taccounting for the world transforms of both the object and its childrens."
        },
        "setFromPoints": {
          "!type": "fn(points: []) -> +THREE.Box3",
          "!doc": "[page:Array points] - Array of [page:Vector3 Vector3s] that the resulting box will contain.<br><br>\n\n\t\tSets the upper and lower bounds of this box to include all of the points in [page:Array points]."
        },
        "translate": {
          "!type": "fn(offset: +THREE.Vector3) -> +THREE.Box3",
          "!doc": "[page:Vector3 offset] - Direction and distance of offset.<br><br>\n\n\t\tAdds [page:Vector3 offset] to both the upper and lower bounds of this box, effectively moving this box\n\t\t[page:Vector3 offset] units in 2D space."
        },
        "union": {
          "!type": "fn(box: +THREE.Box3) -> +THREE.Box3",
          "!doc": "[page:Box3 box] - Box that will be unioned with this box.<br><br>\n\n\t\tUnions this box with [page:Box3 box], setting the upper bound of this box to the greater of the\n\t\ttwo boxes' upper bounds and the lower bound of this box to the lesser of the two boxes'\n\t\tlower bounds."
        }
      },
      "!doc": "Represents a box or cube in 3D space. The main purpose of this is to represent\n\t\t\tthe [link:https://en.wikipedia.org/wiki/Minimum_bounding_box Minimum Bounding Boxes]\n\t\t\tfor objects.",
      "!type": "fn(min: +THREE.Vector3, max: +THREE.Vector3)"
    },
    "Color": {
      "!url": "http://threejs.org/docs/#Reference/math/Color",
      "prototype": {
        "isColor": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Colors. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "r": {
          "!type": "number",
          "!doc": "Red channel value between 0 and 1. Default is 1."
        },
        "g": {
          "!type": "number",
          "!doc": "Green channel value between 0 and 1. Default is 1."
        },
        "b": {
          "!type": "number",
          "!doc": "Blue channel value between 0 and 1. Default is 1."
        },
        "add": {
          "!type": "fn(color: +THREE.Color) -> +THREE.Color",
          "!doc": "Adds the RGB values of [page:Color color] to the RGB values of this color."
        },
        "addColors": {
          "!type": "fn(color1: +THREE.Color, color2: +THREE.Color) -> +THREE.Color",
          "!doc": "Sets this color's RGB values to the sum of the RGB values of [page:Color color1] and [page:Color color2]."
        },
        "addScalar": {
          "!type": "fn(s: number) -> +THREE.Color",
          "!doc": "Adds [page:Number s] to the RGB values of this color."
        },
        "clone": {
          "!type": "fn() -> +THREE.Color",
          "!doc": "Returns a new Color with the same  [page:.r r], [page:.g g] and [page:.b b] parameters a this one."
        },
        "copy": {
          "!type": "fn(color: +THREE.Color) -> +THREE.Color",
          "!doc": "Copies the [page:.r r], [page:.g g] and [page:.b b] parameters from [page:Color color] in to this color."
        },
        "convertGammaToLinear": {
          "!type": "fn() -> +THREE.Color",
          "!doc": "Converts this color from gamma to linear space (squares the values of [page:.r r], [page:.g g] and [page:.b b] )."
        },
        "convertLinearToGamma": {
          "!type": "fn() -> +THREE.Color",
          "!doc": "Converts this color from linear to gamma space (takes the squareroot of [page:.r r], [page:.g g] and [page:.b b])."
        },
        "copyGammaToLinear": {
          "!type": "fn(color: +THREE.Color, gammaFactor: number) -> +THREE.Color",
          "!doc": "[page:Color color] — Color to copy.<br>\n\t\t[page:Float gammaFactor] - (optional). Default is *2.0*.<br><br>\n\n\t\tCopies given color making conversion from gamma to linear space,\n\t\tby taking [page:.r r], [page:.g g] and [page:.b b] to the power of [page:Float gammaFactor]."
        },
        "copyLinearToGamma": {
          "!type": "fn(color: +THREE.Color, gammaFactor: number) -> +THREE.Color",
          "!doc": "[page:Color color] — Color to copy.<br>\n\t\t[page:Float gammaFactor] - (optional). Default is *2.0*.<br><br>\n\n\t\tCopies given color making conversion from linear to gamma space,\n\t\tby taking [page:.r r], [page:.g g] and [page:.b b] to the power of 1 / [page:Float gammaFactor]."
        },
        "equals": {
          "!type": "fn(color: +THREE.Color) -> bool",
          "!doc": "Compares [page:Color color] with this one and returns true if they are the same, false otherwise."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Color",
          "!doc": "[page:Array array] - [page:Array] of float in the form [ [page:Float r], [page:Float g], [page:Float b] ].<br>\n\t\t[page:Integer offset] - An optional offset into the array.<br><br>\n\n\t\tSets this color's components based on an array formatted like [ [page:Float r], [page:Float g], [page:Float b] ]."
        },
        "getHex": {
          "!type": "fn() -> number",
          "!doc": "Returns the hexadecimal value of this color."
        },
        "getHexString": {
          "!type": "fn() -> string",
          "!doc": "Returns the string formatted hexadecimal value of this color."
        },
        "getHSL": {
          "!type": "fn(optionalTarget: object) -> object",
          "!doc": "[page:Object optionalTarget] — (optional) if specified, adds h, s and l keys to object (if not already present)\n\t\t\tand sets the results there, otherwise a new Object will be created. <br><br>\n\n\t\t\tConvert the values [page:.r r], [page:.g g] and [page:.b b] to [link:https://en.wikipedia.org/wiki/HSL_and_HSV HSL]\n\t\t\tformat and returns an object of the form:\n\n\t\t\t<code>\n\t\t\t\t{ h: 0, s: 0, l: 0 }\n\t\t\t</code>"
        },
        "getStyle": {
          "!type": "fn() -> string",
          "!doc": "Returns the value of this color as a CSS-style string. Example: 'rgb(255,0,0)'."
        },
        "lerp": {
          "!type": "fn(color: +THREE.Color, alpha: number) -> +THREE.Color",
          "!doc": "[page:Color color] - color to converge on.<br>\n\t\t[page:Float alpha] - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tLinear interpolation of this colors RGB values and the RGB values of the passed argument.\n\t\tThe alpha argument can be thought of as the percent between the two colors, where 0 is\n\t\tthis color and 1 is the first argument."
        },
        "multiply": {
          "!type": "fn(color: +THREE.Color) -> +THREE.Color",
          "!doc": "Multiplies this color's RGB values by given [page:Color color]'s RGB values."
        },
        "multiplyScalar": {
          "!type": "fn(s: number) -> +THREE.Color",
          "!doc": "Multiplies this color's RGB values by [page:Number s]."
        },
        "offsetHSL": {
          "!type": "fn(h: number, s: number, l: number) -> +THREE.Color",
          "!doc": "Adds given [page:Float h], [page:Float s], and [page:Float l] to this color's existing values.\n\t\t\tInternally this converts the [page:.r r], [page:.g g] and [page:.b b] values to HSL, adds\n\t\t\t[page:Float h], [page:Float s], and [page:Float l] and then converts back to RGB."
        },
        "set": {
          "!type": "fn(value: Multi) -> +THREE.Color",
          "!doc": "[page:Multi value] - Value to set this color to.<br><br>\n\n\t\tSee the Constructor above for full details of what [page:Multi value] can be.\n\t\tDelegates to [page:.copy], .setStyle, or .setHex depending on input type."
        },
        "setHex": {
          "!type": "fn(hex: number) -> +THREE.Color",
          "!doc": "[page:Integer hex] — [link:https://en.wikipedia.org/wiki/Web_colors#Hex_triplet hexadecimal triplet] format.<br><br>\n\n\t\tSets this color from a hexadecimal value."
        },
        "setHSL": {
          "!type": "fn(h: number, s: number, l: number) -> +THREE.Color",
          "!doc": "[page:Float h] — hue value between 0.0 and 1.0 <br>\n\t\t[page:Float s] — saturation value between 0.0 and 1.0 <br>\n\t\t[page:Float l] — lightness value between 0.0 and 1.0<br><br>\n\n\t\tSets color from HSL values."
        },
        "setRGB": {
          "!type": "fn(r: number, g: number, b: number) -> +THREE.Color",
          "!doc": "[page:Float r] — Red channel value between 0 and 1.<br>\n\t\t[page:Float g] — Green channel value between 0 and 1.<br>\n\t\t[page:Float b] — Blue channel value between 0 and 1.<br><br>\n\n\t\tSets this color from RGB values."
        },
        "setScalar": {
          "!type": "fn(scalar: number) -> +THREE.Color",
          "!doc": "[page:Float scalar] — a value between 0.0 and 1.0.<br><br>\n\n\t\tSets all three color components to the value [page:Float scalar]."
        },
        "setStyle": {
          "!type": "fn(style: string) -> +THREE.Color",
          "!doc": "[page:String style] — color as a CSS-style string.<br><br>\n\n\t\tSets this color from a CSS-style string. For example,\n\t\t\"rgb(250, 0,0)\",\n\t\t\"rgb(100%, 0%, 0%)\",\n\t\t\"hsl(0, 100%, 50%)\",\n\t\t\"#ff0000\",\n\t\t\"#f00\", or\n\t\t\"red\" ( or any [link:https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart X11 color name]\n\t\t- all 140 color names are supported ).<br>\n\n\t\tTransluent colors such as \"rgba(255, 0, 0, 0.5)\" and \"hsla(0, 100%, 50%, 0.5)\" are also accepted,\n\t\tbut the alpha-channel coordinate will be discarded.<br><br>\n\n\t\tNote that for X11 color names, multiple words such as Dark Orange become the string 'darkorange' (all lowercase)."
        },
        "sub": {
          "!type": "fn(color: +THREE.Color) -> +THREE.Color",
          "!doc": "Subtracts RGB components of the given color from the RGB components of this color.\n\t\tIf a component is negative, it is set to zero."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - An optional array to store the color to. <br>\n\t\t[page:Integer offset] - An optional offset into the array.<br><br>\n\n\t\tReturns an array of the form [ r, g, b ]."
        }
      },
      "!doc": "Class representing a color.",
      "!type": "fn(r: Multi, g: number, b: number)"
    },
    "Cylindrical": {
      "!url": "http://threejs.org/docs/#Reference/math/Cylindrical",
      "prototype": {
        "radius": "number",
        "theta": "number",
        "y": "number",
        "clone": {
          "!type": "fn() -> +THREE.Cylindrical",
          "!doc": "Returns a new cylindrical with the same [page:.radius radius], [page:.theta theta]\n\t\tand [page:.y y] properties as this one."
        },
        "copy": {
          "!type": "fn(other: +THREE.Cylindrical) -> +THREE.Cylindrical",
          "!doc": "Copies the values of the passed Cylindrical's [page:.radius radius], [page:.theta theta]\n\t\t\tand [page:.y y] properties to this cylindrical."
        },
        "set": {
          "!type": "fn(radius: number, phi: number, theta: number) -> +THREE.Cylindrical",
          "!doc": "Sets values of this cylindrical's [page:.radius radius], [page:.theta theta]\n\t\tand [page:.y y] properties."
        },
        "setFromVector3": {
          "!type": "fn(vec3: +THREE.Vector3) -> +THREE.Cylindrical",
          "!doc": "Sets values of this cylindrical's [page:.radius radius], [page:.theta theta]\n\t\t\tand [page:.y y] properties from the [page:Vector3 Vector3].<br><br>\n\n\t\t\tThe [page:.radius radius] is set the vector's distance from the origin as measured along\n\t\t\tthe the x-z plane, while [page:.theta theta] is set from its direction on\n\t\t\tthe the x-z plane and [page:.y y] is set from the vector's y component."
        }
      },
      "!doc": "A point's [link:https://en.wikipedia.org/wiki/Cylindrical_coordinate_system cylindrical coordinates].",
      "!type": "fn(radius: number, theta: number, y: number)"
    },
    "Euler": {
      "!url": "http://threejs.org/docs/#Reference/math/Euler",
      "prototype": {
        "isEuler": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Eulers. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "order": {
          "!type": "string",
          "!doc": "The order in which to apply rotations. Default is 'XYZ', which means that the object will first be\n\t\t\trotated around its X axis, then its Y axis and finally its Z axis. Other possibilities are:\n\t\t\t'YZX', 'ZXY', 'XZY', 'YXZ' and 'ZYX'. These must be in upper case.<br><br>\n\n\t\t\tThree.js uses <em>intrinsic</em> (Tait-Bryan) ordering, also known as <em>yaw</em>, <em>pitch</em>\n\t\t\tand <em>roll</em>. This means that rotations are performed with respect to the <em>local</em>\n\t\t\tcoordinate system. That is, for order 'XYZ', the rotation is first around world-X, then around\n\t\t\tlocal-Y (which may now be different from the world Y-axis), then local-Z (which may be different\n\t\t\tfrom the world Z-axis).<br><br>\n\n\t\t\tSome implementations may use <em>extrinsic</em> (proper) ordering, in which case rotations are performed\n\t\t\twith respect to the <em>world</em> coordinate system, so that for order 'XYZ', the rotations\n\t\t\tare around world-X, world-Y, and world-Z.<br><br>\n\n\t\t\tConverting between the two types is relatively straightforward, you just need to reverse the order\n\t\t\tand the rotation, so that an intrinsic (three.js) Euler rotation of angles a, b, c about XYZ\n\t\t\twill be equivalent to to an extrinsic Euler rotation of angles c, b, a about ZYX.<br><br>\n\n\t\t\tIf the order is changed, [page:.onChangeCallback onChangeCallback] will be called."
        },
        "x": {
          "!type": "number",
          "!doc": "The current value of the x component.<br><br>\n\n\t\t\tIf this is changed, [page:.onChangeCallback onChangeCallback] will be called."
        },
        "y": {
          "!type": "number",
          "!doc": "The current value of the y component.<br><br>\n\n\t\t\tIf this is changed, [page:.onChangeCallback onChangeCallback] will be called."
        },
        "z": {
          "!type": "number",
          "!doc": "The current value of the z component.<br><br>\n\n\t\t\tIf this is changed, [page:.onChangeCallback onChangeCallback] will be called."
        },
        "copy": {
          "!type": "fn(euler: +THREE.Euler) -> +THREE.Euler",
          "!doc": "Copies value of [page:Euler euler] to this euler."
        },
        "clone": {
          "!type": "fn() -> +THREE.Euler",
          "!doc": "Returns a new Euler with the same parameters as this one."
        },
        "equals": {
          "!type": "fn(euler: +THREE.Euler) -> bool",
          "!doc": "Checks for strict equality of this euler and [page:Euler euler]."
        },
        "fromArray": {
          "!type": "fn(array: []) -> +THREE.Euler",
          "!doc": "[page:Array array] of length 3 or 4. The optional 4th argument corresponds to the [page:.order order].<br><br>\n\n\t\tAssigns this euler's [page:.x x] angle to array[0]. <br>\n\t\tAssigns this euler's [page:.y y] angle to array[1]. <br>\n\t\tAssigns this euler's [page:.z z] angle to array[2]. <br>\n\t\tOptionally assigns this euler's [page:.order order] to array[3]."
        },
        "onChange": {
          "!type": "fn(onChangeCallback: function) -> +THREE.Euler",
          "!doc": "[page:Function onChangeCallback] - set the value of the onChangeCallback() function."
        },
        "onChangeCallback": {
          "!type": "fn() -> +THREE.Euler",
          "!doc": "By default this is an empty function, however it can be set via [page:.onChange onChange]().<br>\n\t\t\tIt gets called after changing the [page:.x x], [page:.y y], [page:.z z] or [page:.order order] properties,\n\t\t\tand also after calling most setter functions (see those for details)."
        },
        "reorder": {
          "!type": "fn(newOrder: string) -> +THREE.Euler",
          "!doc": "Resets the euler angle with a new order by creating a quaternion from this euler angle\n\t\tand then setting this euler angle with the quaternion and the new order. <br><br>\n\n\t\t<em>WARNING</em>: this discards revolution information."
        },
        "set": {
          "!type": "fn(x: number, y: number, z: number, order: string) -> +THREE.Euler",
          "!doc": "[page:.x x] - the angle of the x axis in radians.<br>\n\t\t\t[page:.y y] - the angle of the y axis in radians.<br>\n\t\t\t[page:.z z] - the angle of the z axis in radians.<br>\n\t\t\t[page:.order order] - (optional) a string representing the order that the rotations are applied.<br><br>\n\n\t\t\tSets the angles of this euler transform and optionally the [page:.order order] and then call [page:.onChangeCallback onChangeCallback]()."
        },
        "setFromRotationMatrix": {
          "!type": "fn(m: +THREE.Matrix4, order: string, update: bool) -> +THREE.Euler",
          "!doc": "[page:Matrix4 m] - a [page:Matrix4] of which the upper 3x3 of matrix is a pure\n\t\t[link:https://en.wikipedia.org/wiki/Rotation_matrix rotation matrix] (i.e. unscaled).<br>\n\t\t[page:.order order] - (optional) a string representing the order that the rotations are applied.<br>\n\t\t[page:Boolean update] - (optional) whether to call [page:.onChangeCallback onChangeCallback]() after applying\n\t\tthe matrix.<br><br>\n\n\t\tSets the angles of this euler transform from a pure rotation matrix based on the orientation\n\t\tspecified by order."
        },
        "setFromQuaternion": {
          "!type": "fn(q: +THREE.Quaternion, order: string, update: bool) -> +THREE.Euler",
          "!doc": "[page:Quaternion q] - a normalized quaternion.<br>\n\t\t[page:.order order] - (optional) a string representing the order that the rotations are applied.<br>\n\t\t[page:Boolean update] - (optional) whether to call [page:.onChangeCallback onChangeCallback]() after applying\n\t\tthe matrix.<br><br>\n\n\t\tSets the angles of this euler transform from a normalized quaternion based on the orientation\n\t\tspecified by [page:.order order]."
        },
        "setFromVector3": {
          "!type": "fn(vector: +THREE.Vector3, order: string) -> +THREE.Euler",
          "!doc": "[page:Vector3 vector] - [page:Vector3].<br>\n\t\t[page:.order order] - (optional) a string representing the order that the rotations are applied.<br><br>\n\n\t\tSet the [page:.x x], [page:.y y] and [page:.z z], and optionally update the [page:.order order]. [page:.onChangeCallback onChangeCallback]()\n\t\tis called after these changes are made."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - (optional) array to store the euler in.<br>\n\t\t[page:Integer offset] (optional) offset in the array.<br>\n\n\t\tReturns an array of the form [[page:.x x], [page:.y y], [page:.z z], [page:.order order ]]."
        },
        "toVector3": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "Returns the Euler's [page:.x x], [page:.y y] and [page:.z z] properties as a [page:Vector3]."
        }
      },
      "!doc": "A class representing [link:http://en.wikipedia.org/wiki/Euler_angles Euler Angles].<br><br>\n\n\t\t\tEuler angles describe a rotational transformation by rotating an object on its various\n\t\t\taxes in specified amounts per axis, and a specified axis order.",
      "!type": "fn(x: number, y: number, z: number, order: string)"
    },
    "Frustum": {
      "!url": "http://threejs.org/docs/#Reference/math/Frustum",
      "prototype": {
        "planes": {
          "!type": "[]",
          "!doc": "Array of 6 [page:Plane planes]."
        },
        "clone": {
          "!type": "fn() -> +THREE.Frustum",
          "!doc": "Return a new Frustum with the same parameters as this one."
        },
        "containsPoint": {
          "!type": "fn(point: +THREE.Vector3) -> bool",
          "!doc": "[page:Vector3 point] - [page:Vector3] to test.<br><br>\n\n\t\tChecks to see if the frustum contains the [page:Vector3 point]."
        },
        "copy": {
          "!type": "fn(frustum: +THREE.Frustum) -> +THREE.Frustum",
          "!doc": "[page:Frustum frustum] - The frustum to copy<br><br>\n\n\t\tCopies the properties of the passed [page:Frustum frustum] into this one."
        },
        "intersectsBox": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - [page:Box3] to check for intersection.<br><br>\n\n\t \tReturn true if [page:Box3 box] intersects with this frustum."
        },
        "intersectsObject": {
          "!type": "fn(object: +THREE.Object3D) -> bool",
          "!doc": "Checks whether the [page:Object3D object]'s [page:Geometry.boundingSphere bounding sphere] is intersecting the Frustum.<br><br>\n\n\t\t\tNote that the object must have a [page:Geometry] or [page:BufferGeometry] so that the bounding sphere\n\t\t\tcan be calculated."
        },
        "intersectsSphere": {
          "!type": "fn(sphere: +THREE.Sphere) -> bool",
          "!doc": "[page:Sphere sphere] - [page:Sphere] to check for intersection.<br><br>\n\n\t \tReturn true if [page:Sphere sphere] intersects with this frustum."
        },
        "intersectsSprite": {
          "!type": "fn(sprite: +THREE.Sprite) -> bool",
          "!doc": "Checks whether the [page:Sprite sprite] is intersecting the Frustum.<br><br>"
        },
        "set": {
          "!type": "fn(p0: +THREE.Plane, p1: +THREE.Plane, p2: +THREE.Plane, p3: +THREE.Plane, p4: +THREE.Plane, p5: +THREE.Plane) -> +THREE.Frustum",
          "!doc": "Sets the current frustum from the passed planes. No plane order is implicitely implied."
        },
        "setFromMatrix": {
          "!type": "fn(matrix: +THREE.Matrix4) -> +THREE.Frustum",
          "!doc": "[page:Matrix4 matrix] - [page:Matrix4] used to set the [page:.planes planes]<br><br>\n\n\t\t\tThis is used by the [page:WebGLRenderer] to set up the Frustum from a [page:Camera Camera's]\n\t\t\t[page:Camera.projectionMatrix projectionMatrix] and [page:Camera.matrixWorldInverse matrixWorldInverse]."
        }
      },
      "!doc": "[link:http://en.wikipedia.org/wiki/Frustum Frustums] are used to determine what is\n\t\t\tinside the camera's field of view. They help speed up the rendering process - object which lie\n\t\t\toutside a camera's frustum can safely be excluded from rendering.<br><br>\n\n\t\t\tThis class is mainly intended for use internally by a renderer for calculating\n\t\t\ta [page:Camera camera] or [page:LightShadow.camera shadowCamera]'s frustum.",
      "!type": "fn(p0: +THREE.Plane, p1: +THREE.Plane, p2: +THREE.Plane, p3: +THREE.Plane, p4: +THREE.Plane, p5: +THREE.Plane)"
    },
    "Interpolant": {
      "!url": "http://threejs.org/docs/#Reference/math/Interpolant",
      "prototype": {
        "parameterPositions": "null",
        "resultBuffer": "null",
        "sampleValues": "null",
        "settings": {
          "!type": "object",
          "!doc": "Optional, subclass-specific settings structure."
        },
        "valueSize": "null",
        "evaluate": {
          "!type": "fn(t: number)",
          "!doc": "Evaluate the interpolant at position *t*."
        }
      },
      "!doc": "Abstract base class of interpolants over parametric samples.<br><br>\n\n\t\tThe parameter domain is one dimensional, typically the time or a path along a curve defined by the data.<br><br>\n\n\t\tThe sample values can have any dimensionality and derived classes may apply special interpretations to the data.<br><br>\n\n\t\tThis class provides the interval seek in a Template Method, deferring the actual interpolation to derived classes.<br><br>\n\n\t\tTime complexity is *O(1)* for linear access crossing at most two points and *O(log N)* for random access,\n\t\twhere *N* is the number of positions.<br><br>\n\n\t\tReferences:\t[link:http://www.oodesign.com/template-method-pattern.html http://www.oodesign.com/template-method-pattern.html]",
      "!type": "fn(parameterPositions, sampleValues, sampleSize, resultBuffer)"
    },
    "CubicInterpolant": {
      "!url": "http://threejs.org/docs/#Reference/math/interpolants/CubicInterpolant",
      "prototype": {
        "!proto": "THREE.Interpolant.prototype",
        "parameterPositions": "null",
        "resultBuffer": "null",
        "sampleValues": "null",
        "settings": "object",
        "valueSize": "null",
        "evaluate": {
          "!type": "fn(t: number)",
          "!doc": "Evaluate the interpolant at position *t*."
        }
      },
      "!doc": "",
      "!type": "fn(parameterPositions, sampleValues, sampleSize, resultBuffer)"
    },
    "DiscreteInterpolant": {
      "!url": "http://threejs.org/docs/#Reference/math/interpolants/DiscreteInterpolant",
      "prototype": {
        "!proto": "THREE.Interpolant.prototype",
        "parameterPositions": "null",
        "resultBuffer": "null",
        "sampleValues": "null",
        "settings": "object",
        "valueSize": "null",
        "evaluate": {
          "!type": "fn(t: number)",
          "!doc": "Evaluate the interpolant at position *t*."
        }
      },
      "!doc": "",
      "!type": "fn(parameterPositions, sampleValues, sampleSize, resultBuffer)"
    },
    "LinearInterpolant": {
      "!url": "http://threejs.org/docs/#Reference/math/interpolants/LinearInterpolant",
      "prototype": {
        "!proto": "THREE.Interpolant.prototype",
        "parameterPositions": "null",
        "resultBuffer": "null",
        "sampleValues": "null",
        "settings": "object",
        "valueSize": "null",
        "evaluate": {
          "!type": "fn(t: number)",
          "!doc": "Evaluate the interpolant at position *t*."
        }
      },
      "!doc": "",
      "!type": "fn(parameterPositions, sampleValues, sampleSize, resultBuffer)"
    },
    "QuaternionLinearInterpolant": {
      "!url": "http://threejs.org/docs/#Reference/math/interpolants/QuaternionLinearInterpolant",
      "prototype": {
        "!proto": "THREE.Interpolant.prototype",
        "parameterPositions": "null",
        "resultBuffer": "null",
        "sampleValues": "null",
        "settings": "object",
        "valueSize": "null",
        "evaluate": {
          "!type": "fn(t: number)",
          "!doc": "Evaluate the interpolant at position *t*."
        }
      },
      "!doc": "",
      "!type": "fn(parameterPositions, sampleValues, sampleSize, resultBuffer)"
    },
    "Line3": {
      "!url": "http://threejs.org/docs/#Reference/math/Line3",
      "prototype": {
        "start": {
          "!type": "+THREE.Vector3",
          "!doc": "[page:Vector3] representing the start point of the line."
        },
        "end": {
          "!type": "+THREE.Vector3",
          "!doc": "[page:Vector3] representing the end point of the line."
        },
        "applyMatrix4": {
          "!type": "fn(matrix: +THREE.Matrix4) -> +THREE.Line3",
          "!doc": "Apply a matrix transform to the line segment."
        },
        "at": {
          "!type": "fn(t: number, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Float t] - Use values 0-1 to return a position along the line segment. <br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturn a vector at a certain position along the line. When [page:Float t] = 0, it returns the start vector,\n\t\tand when [page:Float t] = 1 it returns the end vector.<br>"
        },
        "clone": {
          "!type": "fn() -> +THREE.Line3",
          "!doc": "Return a new [page:Line3] with the same [page:.start start] and [page:.end end] vectors as this one."
        },
        "closestPointToPoint": {
          "!type": "fn(point: +THREE.Vector3, clampToLine: bool, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - return the closest point on the line to this point.<br>\n\t\t[page:Boolean clampToLine] - whether to clamp the returned value to the line segment.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturns the closets point on the line. If [page:Boolean clampToLine] is true, then the returned value will be\n\t\tclamped to the line segment."
        },
        "closestPointToPointParameter": {
          "!type": "fn(point: +THREE.Vector3, clampToLine: bool) -> number",
          "!doc": "[page:Vector3 point] - the point for which to return a point parameter. <br>\n\t\t[page:Boolean clampToLine] - Whether to clamp the result to the range [0, 1].<br><br>\n\n\t\tReturns a point parameter based on the closest point as projected on the line segement.\n\t\tIf clamp to line is true, then the returned value will be between 0 and 1."
        },
        "copy": {
          "!type": "fn(line: +THREE.Line3) -> +THREE.Line3",
          "!doc": "Copies the passed line's [page:.start start] and [page:.end end] vectors to this line."
        },
        "delta": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\t\tReturns the delta vector of the line segment ( [page:.end end] vector minus the [page:.start start] vector)."
        },
        "distance": {
          "!type": "fn() -> number",
          "!doc": "Returns the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean distance]\n\t\t(straight-line distance) between the line's [page:.start start] and [page:.end end] points."
        },
        "distanceSq": {
          "!type": "fn() -> number",
          "!doc": "Returns the square of the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean distance]\n\t\t\t(straight-line distance) between the line's [page:.start start]\n\t\t\tand [page:.end end] vectors."
        },
        "equals": {
          "!type": "fn(line: +THREE.Line3) -> bool",
          "!doc": "[page:Line3 line]  - [page:Line3] to compare with this one.<br><br>\n\n\t\tReturns true if both line's [page:.start start] and [page:.end en] points are equal."
        },
        "getCenter": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturn the center of the line segment."
        },
        "set": {
          "!type": "fn(start: +THREE.Vector3, end: +THREE.Vector3) -> +THREE.Line3",
          "!doc": "[page:Vector3 start] - set the [page:.start start point] of the line.<br>\n\t\tend - [page:Vector3] - set the [page:.end end point] of the line.<br><br>\n\n\t\tSets the start and end values by copying the provided vectors."
        }
      },
      "!doc": "A geometric line segment represented by a start and end point.",
      "!type": "fn(start: +THREE.Vector3, end: +THREE.Vector3)"
    },
    "Math": {
      "!url": "http://threejs.org/docs/#Reference/math/Math",
      "prototype": {
        "clamp": {
          "!type": "fn(value: number, min: number, max: number) -> number",
          "!doc": "[page:Float value] — Value to be clamped.<br>\n\t\t[page:Float min] — Minimum value.<br>\n\t\t[page:Float max] — Maximum value.<br><br>\n\n\t\tClamps the [page:Float value] to be between [page:Float min] and [page:Float max]."
        },
        "degToRad": {
          "!type": "fn(degrees: number) -> number",
          "!doc": "Converts degrees to radians."
        },
        "euclideanModulo": {
          "!type": "fn(n: number, m: number) -> number",
          "!doc": "[page:Integer n], [page:Integer m] - Integers<br><br>\n\n\t\tCompute the Euclidean modulo of m % [page:Integer n], that is:\n\t\t<code>( ( n % m ) + m ) % m</code>"
        },
        "generateUUID": {
          "!type": "fn() -> UUID",
          "!doc": "Generate a [link:https://en.wikipedia.org/wiki/Universally_unique_identifier UUID]\n\t\t(universally unique identifier)."
        },
        "isPowerOfTwo": {
          "!type": "fn(n: number) -> bool",
          "!doc": "Return *true* if [page:Number n] is a power of 2."
        },
        "lerp": {
          "!type": "fn(x: number, y: number, t: number) -> number",
          "!doc": "[page:Float x] - Start point. <br>\n\t\t[page:Float y] - End point. <br>\n\t\t[page:Float t] - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tReturns a value [link:https://en.wikipedia.org/wiki/Linear_interpolation linearly interpolated]\n\t\tfrom two known points based on the given interval - [page:Float t] = 0 will return [page:Float x]\n\t\tand [page:Float t] = 1 will return [page:Float y]."
        },
        "mapLinear": {
          "!type": "fn(x: number, a1: number, a2: number, b1: number, b2: number) -> number",
          "!doc": "[page:Float x] — Value to be mapped.<br>\n\t\t[page:Float a1] — Minimum value for range A.<br>\n\t\t[page:Float a2] — Maximum value for range A.<br>\n\t\t[page:Float b1] — Minimum value for range B.<br>\n\t\t[page:Float b2] — Maximum value for range B.<br><br>\n\n\t\tLinear mapping of [page:Float x] from range [[page:Float a1], [page:Float a2]] to range [[page:Float b1], [page:Float b2]]."
        },
        "nearestPowerOfTwo": {
          "!type": "fn(n: number) -> number",
          "!doc": "Return the nearest power of 2 to a given number [page:Number n]."
        },
        "nextPowerOfTwo": {
          "!type": "fn(n: number) -> number",
          "!doc": "Return the nearest power of 2 that is bigger than [page:Number n]."
        },
        "radToDeg": {
          "!type": "fn(radians: number) -> number",
          "!doc": "Converts radians to degrees."
        },
        "randFloat": {
          "!type": "fn(low: number, high: number) -> number",
          "!doc": "Random float in the interval [page:Float low] to [page:Float high]."
        },
        "randFloatSpread": {
          "!type": "fn(range: number) -> number",
          "!doc": "Random float in the intercal *- [page:Float range] / 2* to *[page:Float range] / 2*."
        },
        "randInt": {
          "!type": "fn(low: number, high: number) -> number",
          "!doc": "Random integer in the interval [page:Float low] to [page:Float high]."
        },
        "smoothstep": {
          "!type": "fn(x: number, min: number, max: number) -> number",
          "!doc": "[page:Float x] - The value to evaluate based on its position between min and max. <br>\n\t\t[page:Float min] - Any x value below min will be 0.<br>\n\t\t[page:Float max] - Any x value above max will be 1.<br><br>\n\n\t\tReturns a value between 0-1 that represents the percentage that x has moved between min and max,\n\t\tbut smoothed or slowed down the closer X is to the min and max.<br><br>\n\n\t\tSee [link:http://en.wikipedia.org/wiki/Smoothstep Smoothstep] for details."
        },
        "smootherstep": {
          "!type": "fn(x: number, min: number, max: number) -> number",
          "!doc": "[page:Float x] - The value to evaluate based on its position between min and max. <br>\n\t\t[page:Float min] - Any x value below min will be 0.<br>\n\t\t[page:Float max] - Any x value above max will be 1.<br><br>\n\n\t\tReturns a value between 0-1. A [link:https://en.wikipedia.org/wiki/Smoothstep#Variations variation on smoothstep]\n\t\tthat has zero 1st and 2nd order derivatives at x=0 and x=1."
        }
      },
      "!doc": "An object with several math utility functions."
    },
    "Matrix3": {
      "!url": "http://threejs.org/docs/#Reference/math/Matrix3",
      "prototype": {
        "elements": {
          "!type": "Float32Array",
          "!doc": "A [link:https://en.wikipedia.org/wiki/Row-_and_column-major_order column-major]\n\t\t list of matrix values."
        },
        "isMatrix3": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Matrix3s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "applyToBufferAttribute": {
          "!type": "fn(attribute: +THREE.BufferAttribute) -> []",
          "!doc": "[page:BufferAttribute attribute] - An attribute of floats that represent 3D vectors.<br><br>\n\n\t\tMultiplies (applies) this matrix to every 3D vector in the [page:BufferAttribute attribute]."
        },
        "clone": {
          "!type": "fn() -> +THREE.Matrix3",
          "!doc": "Creates a new Matrix3 and with identical elements to this one."
        },
        "copy": {
          "!type": "fn(m: +THREE.Matrix3) -> +THREE.Matrix3",
          "!doc": "Copies the elements of matrix [page:Matrix3 m] into this matrix."
        },
        "determinant": {
          "!type": "fn() -> number",
          "!doc": "Computes and returns the\n\t\t[link:https://en.wikipedia.org/wiki/Determinant determinant] of this matrix."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Matrix3",
          "!doc": "[page:Array array] - the array to read the elements from.<br>\n\t\t[page:Integer offset] - (optional) index of first element in the array. Default is 0.<br><br>\n\n\t\tSets the elements of this matrix based on an array in\n\t\t[link:https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major] format."
        },
        "getInverse": {
          "!type": "fn(m: +THREE.Matrix3, throwOnDegenerate: bool) -> +THREE.Matrix3",
          "!doc": "[page:Matrix3 m] - the matrix to take the inverse of.<br>\n\t\t[page:Boolean throwOnDegenerate] - (optional) If true, throw an error if the matrix is degenerate (not invertible).<br><br>\n\n\t\tSet this matrix to the [link:https://en.wikipedia.org/wiki/Invertible_matrix inverse] of the passed matrix [page:Matrix3 m],\n\t\tusing the [link:https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution analytic method].\n\n\t\tIf [page:Boolean throwOnDegenerate] is not set and the matrix is not invertible, set this to the 3x3 identity matrix."
        },
        "getNormalMatrix": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix3",
          "!doc": "[page:Matrix4 m] - [page:Matrix4]<br><br>\n\n\t\tSets this matrix as the upper left 3x3 of the [link:https://en.wikipedia.org/wiki/Normal_matrix normal matrix]\n\t\tof the passed [page:Matrix4 matrix4]. The normal matrix is the [link:https://en.wikipedia.org/wiki/Invertible_matrix inverse] [link:https://en.wikipedia.org/wiki/Transpose transpose]\n\t  of the matrix [page:Matrix4 m]."
        },
        "identity": {
          "!type": "fn() -> +THREE.Matrix3",
          "!doc": "Resets this matrix to the 3x3 identity matrix:\n\t\t<code>\n1, 0, 0\n0, 1, 0\n0, 0, 1\n\t\t</code>"
        },
        "multiplyScalar": {
          "!type": "fn(s: number) -> +THREE.Matrix3",
          "!doc": "Multiplies every component of the matrix by the scalar value *s*."
        },
        "set": {
          "!type": "fn(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number) -> +THREE.Matrix3",
          "!doc": "[page:Float n11] - value to put in row 1, col 1.<br>\n\t\t[page:Float n12] - value to put in row 1, col 2.<br>\n\t\t...<br>\n\t\t...<br>\n\t\t[page:Float n32] - value to put in row 3, col 2.<br>\n\t\t[page:Float n33] - value to put in row 3, col 3.<br><br>\n\n\t\tSets the 3x3 matrix values to the given\n\t\t[link:https://en.wikipedia.org/wiki/Row-_and_column-major_order row-major]\n\t\tsequence of values."
        },
        "setFromMatrix4": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix3",
          "!doc": "Set this matrx to the upper 3x3 matrix of the Matrix4 [page:Matrix4 m]."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - (optional) array to store the resulting vector in. If not given a new array will be created.<br>\n\t\t[page:Integer offset] - (optional) offset in the array at which to put the result.<br><br>\n\n\t\tWrites the elements of this matrix to an array in\n\t\t[link:https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major] format."
        },
        "transpose": {
          "!type": "fn() -> +THREE.Matrix3",
          "!doc": "[link:https://en.wikipedia.org/wiki/Transpose Transposes] this matrix in place."
        },
        "transposeIntoArray": {
          "!type": "fn(array: []) -> +THREE.Matrix3",
          "!doc": "[page:Array array] -  array to store the resulting vector in.<br><br>\n\n\t\t[link:https://en.wikipedia.org/wiki/Transpose Transposes] this matrix into the supplied array,\n\t\tand returns itself unchanged."
        }
      },
      "!doc": "A class representing a 3x3 [link:https://en.wikipedia.org/wiki/Matrix_(mathematics) matrix].",
      "!type": "fn()"
    },
    "Matrix4": {
      "!url": "http://threejs.org/docs/#Reference/math/Matrix4",
      "prototype": {
        "elements": {
          "!type": "Float32Array",
          "!doc": "A [link:https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major]\n\t\t list of matrix values."
        },
        "isMatrix4": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Matrix4s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "applyToBufferAttribute": {
          "!type": "fn(attribute: +THREE.BufferAttribute) -> []",
          "!doc": "[page:BufferAttribute attribute] - An attribute of floats that represent 3D vectors.<br><br>\n\n\t\tMultiplies (applies) this matrix to every 3D vector in the [page:BufferAttribute attribute]."
        },
        "clone": {
          "!type": "fn() -> +THREE.Matrix4",
          "!doc": "Creates a new Matrix4 with identical [page:.elements elements] to this one."
        },
        "compose": {
          "!type": "fn(position: +THREE.Vector3, quaternion: +THREE.Quaternion, scale: +THREE.Vector3) -> +THREE.Matrix4",
          "!doc": "Sets this matrix to the transformation composed of [page:Vector3 position],\n\t\t[page:Quaternion quaternion] and [page:Vector3 scale]. Internally this calls\n\t\t[page:.makeRotationFromQuaternion makeRotationFromQuaternion]( [page:Quaternion quaternion] )\n\t\tfollowed by [page:.scale scale]( [page:Vector3 scale] ), then finally\n\t\t[page:.setPosition setPosition]( [page:Vector3 position] )."
        },
        "copy": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix4",
          "!doc": "Copies the [page:.elements elements] of matrix [page:Matrix4 m] into this matrix."
        },
        "copyPosition": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix4",
          "!doc": "Copies the translation component of the supplied matrix [page:Matrix4 m] into this\n\t\tmatrix's translation component."
        },
        "decompose": {
          "!type": "fn(position: +THREE.Vector3, quaternion: +THREE.Quaternion, scale: +THREE.Vector3)",
          "!doc": "Decomposes this matrix into it's [page:Vector3 position], [page:Quaternion quaternion] and\n\t\t[page:Vector3 scale] components."
        },
        "determinant": {
          "!type": "fn() -> number",
          "!doc": "Computes and returns the\n\t\t[link:https://en.wikipedia.org/wiki/Determinant determinant] of this matrix.<br><br>\n\n\t\tBased on the method outlined [link:http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm here]."
        },
        "equals": {
          "!type": "fn(m: +THREE.Matrix4) -> bool",
          "!doc": "Return true if this matrix and [page:Matrix4 m] are equal."
        },
        "extractBasis": {
          "!type": "fn(xAxis: +THREE.Vector3, yAxis: +THREE.Vector3, zAxis: +THREE.Vector3) -> +THREE.Matrix4",
          "!doc": "Extracts the [link:https://en.wikipedia.org/wiki/Basis_(linear_algebra) basis] of this\n\t\tmatrix into the three axis vectors provided. If this matrix is:\n\t\t<code>\na, b, c, d,\ne, f, g, h,\ni, j, k, l,\nm, n, o, p\n\t\t</code>\n\t\tthen the [page:Vector3 xAxis], [page:Vector3 yAxis], [page:Vector3 zAxis] will be set to:\n\t\t<code>\nxAxis = (a, e, i)\nyAxis = (d, f, j)\nzAxis = (c, g, k)\n\t\t</code>"
        },
        "extractRotation": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix4",
          "!doc": "Extracts the rotation component of the supplied matrix [page:Matrix4 m] into this matrix's\n\t\trotation component."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Matrix4",
          "!doc": "[page:Array array] - the array to read the elements from.<br>\n\t\t[page:Integer offset] - ( optional ) offset into the array. Default is 0.<br><br>\n\n\t\tSets the elements of this matrix based on an [page:Array array] in\n\t\t[link:https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major] format."
        },
        "getInverse": {
          "!type": "fn(m: +THREE.Matrix4, throwOnDegenerate: bool) -> +THREE.Matrix4",
          "!doc": "[page:Matrix4 m] - the matrix to take the inverse of.<br>\n\t\t[page:Boolean throwOnDegenerate] - (optional) If true, throw an error if the matrix is degenerate (not invertible).<br><br>\n\n\t\tSet this matrix to the [link:https://en.wikipedia.org/wiki/Invertible_matrix inverse] of the passed matrix [page:Matrix4 m],\n\t\tusing the method outlined [link:http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm here].\n\n\t\tIf [page:Boolean throwOnDegenerate] is not set and the matrix is not invertible, set this to the 4x4 identity matrix."
        },
        "getMaxScaleOnAxis": {
          "!type": "fn() -> number",
          "!doc": "Gets the maximum scale value of the 3 axes."
        },
        "identity": {
          "!type": "fn() -> +THREE.Matrix4",
          "!doc": "Resets this matrix to the [link:https://en.wikipedia.org/wiki/Identity_matrix identity matrix]."
        },
        "lookAt": {
          "!type": "fn(eye: +THREE.Vector3, center: +THREE.Vector3, up: +THREE.Vector3) -> +THREE.Matrix4",
          "!doc": "Constructs a rotation matrix, looking from [page:Vector3 eye] towards [page:Vector3 center]\n\t\t\toriented by the [page:Vector3 up] vector."
        },
        "makeRotationAxis": {
          "!type": "fn(axis: +THREE.Vector3, theta: number) -> +THREE.Matrix4",
          "!doc": "[page:Vector3 axis] — Rotation axis, should be normalized.<br>\n\t\t[page:Float theta] — Rotation angle in radians.<br><br>\n\n\t\tSets this matrix as rotation transform around [page:Vector3 axis] by [page:Float theta] radians.<br>\n\n\t\tThis is a somewhat controversial but mathematically sound alternative to rotating via [page:Quaternions].\n\t\tSee the discussion [link:http://www.gamedev.net/reference/articles/article1199.asp here]."
        },
        "makeBasis": {
          "!type": "fn(xAxis: +THREE.Vector3, yAxis: +THREE.Vector3, zAxis: +THREE.Vector3) -> +THREE.Matrix4",
          "!doc": "Set this to the [link:https://en.wikipedia.org/wiki/Basis_(linear_algebra) basis] matrix consisting\n\t\tof the three provided basis vectors:\n\t\t<code>\nxAxis.x, yAxis.x, zAxis.x, 0,\nxAxis.y, yAxis.y, zAxis.y, 0,\nxAxis.z, yAxis.z, zAxis.z, 0,\n0,       0,       0,       1\n\t\t</code>"
        },
        "makePerspective": {
          "!type": "fn(left: number, right: number, top: number, bottom: number, near: number, far: number) -> +THREE.Matrix4",
          "!doc": "Creates a [link:https://en.wikipedia.org/wiki/3D_projection#Perspective_projection perspective projection] matrix.\n\t\t\tThis is used internally by [page:PerspectiveCamera.updateProjectionMatrix]()"
        },
        "makeOrthographic": {
          "!type": "fn(left: number, right: number, top: number, bottom: number, near: number, far: number) -> +THREE.Matrix4",
          "!doc": "Creates an [link:https://en.wikipedia.org/wiki/Orthographic_projection orthographic projection] matrix.\n\t\tThis is used internally by [page:OrthographicCamera.updateProjectionMatrix]()."
        },
        "makeRotationFromEuler": {
          "!type": "fn(euler: +THREE.Euler) -> +THREE.Matrix4",
          "!doc": "Sets the rotation component (the upper left 3x3 matrix) of this matrix to the rotation specified by the given [page:Euler Euler Angle].\n\t\tThe rest of the matrix is set to the identity. Depending on the [page:Euler.order order] of the [page:Euler euler], there are six possible outcomes.\n\t\tSee [link:https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix this page] for a complete list."
        },
        "makeRotationFromQuaternion": {
          "!type": "fn(q: +THREE.Quaternion) -> +THREE.Matrix4",
          "!doc": "Sets the rotation component of this matrix to the rotation specified by [page:Quaternion q], as outlined\n\t\t[link:https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion here].\n\t\tThe rest of the matrix is set to the identity. So, given [page:Quaternion q] = w + xi + yj + zk, the resulting matrix will be:\n\t\t<code>\n1-2y²-2z²    2xy-2zw    2xz-2yw    0\n2xy+2zw      1-2x²-2z²  2yz-2xw    0\n2xz-2yw      2yz+2xw    1-2x²-2y²  0\n0            0          0          1\n\t\t</code>"
        },
        "makeRotationX": {
          "!type": "fn(theta: number) -> +THREE.Matrix4",
          "!doc": "[page:Float theta] — Rotation angle in radians.<br><br>\n\n\t\tSets this matrix as a rotational transformation around the X axis by [page:Float theta] (θ) radians.\n\t\tThe resulting matrix will be:\n\t\t<code>\n1 0      0        0\n0 cos(θ) -sin(θ)  0\n0 sin(θ) cos(θ)   0\n0 0      0        1\n\t\t</code>"
        },
        "makeRotationY": {
          "!type": "fn(theta: number) -> +THREE.Matrix4",
          "!doc": "[page:Float theta] — Rotation angle in radians.<br><br>\n\n\t\tSets this matrix as a rotational transformation around the Y axis by [page:Float theta] (θ) radians.\n\t\tThe resulting matrix will be:\n\t\t<code>\ncos(θ)  0 sin(θ) 0\n0       1 0      0\n-sin(θ) 0 cos(θ) 0\n0       0 0      1\n\t\t</code>"
        },
        "makeRotationZ": {
          "!type": "fn(theta: number) -> +THREE.Matrix4",
          "!doc": "[page:Float theta] — Rotation angle in radians.<br><br>\n\n\t\tSets this matrix as a rotational transformation around the Z axis by [page:Float theta] (θ) radians.\n\t\tThe resulting matrix will be:\n\t\t<code>\ncos(θ) -sin(θ) 0 0\nsin(θ) cos(θ)  0 0\n0      0       1 0\n0      0       0 1\n\t\t</code>"
        },
        "makeScale": {
          "!type": "fn(x: number, y: number, z: number) -> +THREE.Matrix4",
          "!doc": "[page:Float x] - the amount to scale in the X axis.<br>\n\t\t\t[page:Float y] - the amount to scale in the Y axis.<br>\n\t\t\t[page:Float z] - the amount to scale in the Z axis.<br><br>\n\n\t\t\tSets this matrix as scale transform:\n\t\t\t<code>\nx, 0, 0, 0,\n0, y, 0, 0,\n0, 0, z, 0,\n0, 0, 0, 1\n\t\t\t</code>"
        },
        "makeShear": {
          "!type": "fn(x: number, y: number, z: number) -> +THREE.Matrix4",
          "!doc": "[page:Float x] - the amount to shear in the X axis.<br>\n\t\t[page:Float y] - the amount to shear in the Y axis.<br>\n\t\t[page:Float z] - the amount to shear in the Z axis.<br><br>\n\n\t\tSets this matrix as a shear transform:\n<code>\n1, y, z, 0,\nx, 1, z, 0,\nx, y, 1, 0,\n0, 0, 0, 1\n</code>"
        },
        "makeTranslation": {
          "!type": "fn(x: number, y: number, z: number) -> +THREE.Matrix4",
          "!doc": "[page:Float x] - the amount to translate in the X axis.<br>\n\t\t\t[page:Float y] - the amount to translate in the Y axis.<br>\n\t\t\t[page:Float z] - the amount to translate in the Z axis.<br><br>\n\n\t\tSets this matrix as a translation transform:\n\t\t<code>\n1, 0, 0, x,\n0, 1, 0, y,\n0, 0, 1, z,\n0, 0, 0, 1\n\t\t</code>"
        },
        "multiply": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix4",
          "!doc": "Post-multiplies this matrix by [page:Matrix4 m]."
        },
        "multiplyMatrices": {
          "!type": "fn(a: +THREE.Matrix4, b: +THREE.Matrix4) -> +THREE.Matrix4",
          "!doc": "Sets this matrix to [page:Matrix4 a] x [page:Matrix4 b]."
        },
        "multiplyScalar": {
          "!type": "fn(s: number) -> +THREE.Matrix4",
          "!doc": "Multiplies every component of the matrix by a scalar value [page:Float s]."
        },
        "multiplyToArray": {
          "!type": "fn(a: +THREE.Matrix4, b: +THREE.Matrix4, r: []) -> +THREE.Matrix4",
          "!doc": "Sets this matrix to [page:Matrix4 a] x [page:Matrix4 b] and stores the result into the flat array [page:Array r],\n\t\tin [link:https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major] order.\n\n\t\t[page:Array r] can be either a regular Array or a [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays TypedArray]."
        },
        "premultiply": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Matrix4",
          "!doc": "Pre-multiplies this matrix by [page:Matrix4 m]."
        },
        "scale": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Matrix4",
          "!doc": "Multiplies the columns of this matrix by vector [page:Vector3 v]."
        },
        "set": {
          "!type": "fn(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number) -> +THREE.Matrix4",
          "!doc": "Set the [page:.elements elements] of this matrix to the supplied row-major values [page:Float n11],\n\t\t\t[page:Float n12], ... [page:Float n44]."
        },
        "setPosition": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Matrix4",
          "!doc": "Sets the position component for this matrix from vector [page:Vector3 v], without affecting the\n\t\t\trest of the matrix - i.e. if the matrix is currently:\n<code>\na, b, c, d,\ne, f, g, h,\ni, j, k, l,\nm, n, o, p\n</code>\nThis becomes:\n<code>\na, b, c, v.x,\ne, f, g, v.y,\ni, j, k, v.z,\nm, n, o, p\n</code>"
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - (optional) array to store the resulting vector in.<br>\n\t\t[page:Integer offset] - (optional) offset in the array at which to put the result.<br><br>\n\n\t\tWrites the elements of this matrix to an array in\n\t\t[link:https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major] format."
        },
        "transpose": {
          "!type": "fn() -> +THREE.Matrix4",
          "!doc": "[link:https://en.wikipedia.org/wiki/Transpose Transposes] this matrix."
        }
      },
      "!doc": "A class representing a 4x4 [link:https://en.wikipedia.org/wiki/Matrix_(mathematics) matrix].<br><br>\n\n\t\t\tThe most common use of a 4x4 matrix in 3D computer graphics is as a\n\t\t\t[link:https://en.wikipedia.org/wiki/Transformation_matrix Transformation Matrix].\n\t\t\tFor an introduction to transformation matrices as used in WebGL, check out\n\t\t\t[link:http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices this tutorial].<br><br>\n\n\t\t\tThis allows a [page:Vector3] representing a point in 3D space to undergo transformations\n\t\t\tsuch as translation, rotation, shear, scale, reflection, orthogonal or perspective projection\n\t\t\tand so on, by being multiplied by the matrix. This is known as\t<em>applying</em>\n\t\t\tthe matrix to the vector.<br><br>\n\n\t\t\tEvery [page:Object3D] has three associated Matrix4s:\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t[page:Object3D.matrix]: This stores the local transform of the object.\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t[page:Object3D.matrixWorld]: The global or world transform of the object. This is the objects transformation relative to its parent.\n\t\t\t\t\tIf the object has no parent, then this is identical to the local transform.\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t[page:Object3D.modelViewMatrix]:\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t[page:Camera Cameras] have two additional matrix4s:\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t[page:Object3D.matrixWorldInverse]: The inverse of the [page:Object3D.matrixWorld] described above.\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t[page:Object3D.projectionMatrix]:\n\t\t\t\t</li>\n\t\t\t</ul>",
      "!type": "fn()"
    },
    "Plane": {
      "!url": "http://threejs.org/docs/#Reference/math/Plane",
      "prototype": {
        "normal": "+THREE.Vector3",
        "constant": "number",
        "applyMatrix4": {
          "!type": "fn(matrix: +THREE.Matrix4, optionalNormalMatrix: +THREE.Matrix3) -> +THREE.Plane",
          "!doc": "[page:Matrix4 matrix] - the [Page:Matrix4] to apply.<br>\n\t\t[page:Matrix3 optionalNormalMatrix] - (optional) pre-computed normal [Page:Matrix3] of the Matrix4 being applied.<br><br>\n\n\t\tApply a Matrix4 to the plane. The matrix must be an affine, homogeneous transform.<br>\n\t\tIf supplying an [page:Matrix3 optionalNormalMatrix], it can be created like so:\n\t\t<code>\n\t\tvar optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );\n\t\t</code>"
        },
        "clone": {
          "!type": "fn() -> +THREE.Plane",
          "!doc": "Returns a new plane with the same [page:.normal normal] and [page:.constant constant] as this one."
        },
        "coplanarPoint": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturns a [page:Vector3] coplanar to the plane, by calculating the projection of the\n\t\tnormal vector at the origin onto the plane."
        },
        "copy": {
          "!type": "fn(plane: +THREE.Plane) -> +THREE.Plane",
          "!doc": "Copies the values of the passed plane's [page:.normal normal] and [page:.constant constant]\n\t\tproperties to this plane."
        },
        "distanceToPoint": {
          "!type": "fn(point: +THREE.Vector3) -> number",
          "!doc": "Returns the smallest distance from the [page:Vector3 point] to the plane."
        },
        "distanceToSphere": {
          "!type": "fn(sphere: +THREE.Sphere) -> number",
          "!doc": "Returns the smallest distance from the [page:Sphere sphere] to the plane."
        },
        "equals": {
          "!type": "fn(plane: +THREE.Plane) -> bool",
          "!doc": "Checks to see if two planes are equal (their [page:.normal normal] and\n\t\t\t[page:.constant constant] properties match)."
        },
        "intersectLine": {
          "!type": "fn(line: +THREE.Line3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Line3 line] - the [page:Line3] to check for intersection.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturns the intersection point of the passed line and the plane. Returns undefined\n\t\t if the line does not intersect. Returns the line's starting point if the line is\n\t\t coplanar with the plane."
        },
        "intersectsBox": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - the [page:Box3] to check for intersection.<br><br>\n\n\t\tDetermines whether or not this plane intersects [page:Box3 box]."
        },
        "intersectsLine": {
          "!type": "fn(line: +THREE.Line3) -> bool",
          "!doc": "[page:Line3 line] - the [page:Line3] to check for intersection.<br><br>\n\n\t\tTests whether a line segment intersects with (passes through) the plane."
        },
        "intersectsSphere": {
          "!type": "fn(sphere: +THREE.Sphere) -> bool",
          "!doc": "[page:Sphere sphere]  - the [page:Sphere] to check for intersection.<br><br>\n\n\t\tDetermines whether or not this plane intersects [page:Sphere sphere]."
        },
        "negate": {
          "!type": "fn() -> +THREE.Plane",
          "!doc": "Negates both the normal vector and constant, effectively mirroring the plane across\n\t\tthe origin."
        },
        "normalize": {
          "!type": "fn() -> +THREE.Plane",
          "!doc": "Normalizes the [page:.normal normal] vector, and adjusts the [page:.constant constant]\n\t\t\tvalue accordingly."
        },
        "orthoPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - [page:Vector3] <br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied\n\t\tinto this [page:Vector3], otherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturns a vector in the same direction as the Plane's normal, but with magnitude\n\t\tequal to the passed point's original distance to the plane."
        },
        "projectPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - the [page:Vector3] to project onto the plane.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tProjects a [page:Vector3 point] onto the plane. The projected point is the closest\n\t\t point on the plane to the passed point, so a line drawn from the projected point\n\t\t and the passed point would be orthogonal to the plane."
        },
        "set": {
          "!type": "fn(normal: +THREE.Vector3, constant: number) -> +THREE.Plane",
          "!doc": "[page:Vector3 normal] -  a [page:Vector3] defining the direction of the\tplane.<br>\n\t\t\t[page:Float constant] - (optional) the negative distance from the origin to the plane along\n\t\t\t the [page:Vector3 normal] vector. Default is *0*.<br><br>\n\n\t\t\t Sets the plane's [page:.normal normal] and [page:.constant constant] properties."
        },
        "setComponents": {
          "!type": "fn(x: number, y: number, z: number, w: number) -> +THREE.Plane",
          "!doc": "[page:Float x] - x value of the normal vector.<br>\n\t\t[page:Float y] - y value of the normal vector.<br>\n\t\t[page:Float z] - z value of the normal vector.<br>\n\t\t[page:Float w] - the value of the plane's [page:.constant constant] property.<br><br>\n\n\t\tSet the individual components that make up the plane."
        },
        "setFromCoplanarPoints": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3, c: +THREE.Vector3) -> +THREE.Plane",
          "!doc": "[page:Vector3 a] - first point on the plane.<br>\n\t\t [page:Vector3 a] - second point on the plane.<br>\n\t\t [page:Vector3 a] - third point on the plane.<br><br>\n\n\t\tDefines the plane based on the 3 provided points. The winding order is counter\n\t\tclockwise, and determines which direction the [page:.normal normal] will point."
        },
        "setFromNormalAndCoplanarPoint": {
          "!type": "fn(normal: +THREE.Vector3, point: +THREE.Vector3) -> +THREE.Plane",
          "!doc": "[page:Vector3 normal] - a [page:Vector3] defining the direction of the plane.<br>\n\t\t[page:Vector3 point] - [page:Vector3]<br><br>\n\n\t\tSets the plane's properties as defined by a [page:Vector3 normal] and an arbitrary coplanar [page:Vector3 point]."
        },
        "translate": {
          "!type": "fn(offset: +THREE.Vector3) -> +THREE.Plane",
          "!doc": "[page:Vector3 offset] - the amount to move the plane by.<br><br>\n\n\t\tTranslates the plane the distance defined by the [page:Vector3 offset] vector.\n\t\tNote that this only affects\tthe constant (distance from origin) and will not affect\n\t\tthe normal vector."
        }
      },
      "!doc": "A two dimensional surface that extends infinitely in 3d space, defined by\n\t\t\ta [link:https://en.wikipedia.org/wiki/Normal_(geometry) normal vector], and a\n\t\t\tdistance from the origin along the normal.",
      "!type": "fn(normal: +THREE.Vector3, constant: number)"
    },
    "Quaternion": {
      "!url": "http://threejs.org/docs/#Reference/math/Quaternion",
      "prototype": {
        "x": {
          "!type": "number",
          "!doc": "Changing this property will result in [page:.onChangeCallback onChangeCallback] being called."
        },
        "y": {
          "!type": "number",
          "!doc": "Changing this property will result in [page:.onChangeCallback onChangeCallback] being called."
        },
        "z": {
          "!type": "number",
          "!doc": "Changing this property will result in [page:.onChangeCallback onChangeCallback] being called."
        },
        "w": {
          "!type": "number",
          "!doc": "Changing this property will result in [page:.onChangeCallback onChangeCallback] being called."
        },
        "clone": {
          "!type": "fn() -> +THREE.Quaternion",
          "!doc": "Creates a new Quaternion with identical [page:.x x], [page:.y y],\n\t\t\t[page:.z z] and [page:.w w] properties to this one."
        },
        "conjugate": {
          "!type": "fn() -> +THREE.Quaternion",
          "!doc": "Returns the rotational conjugate of this quaternion. The conjugate of a quaternion\n\t\trepresents the same rotation in the opposite direction about the rotational axis."
        },
        "copy": {
          "!type": "fn(q: +THREE.Quaternion) -> +THREE.Quaternion",
          "!doc": "Copies the [page:.x x], [page:.y y],\t[page:.z z] and [page:.w w] properties\n\t\t\tof [page:Quaternion q] into this quaternion."
        },
        "equals": {
          "!type": "fn(v: +THREE.Quaternion) -> bool",
          "!doc": "[page:Quaternion v] - Quaternion that this quaternion will be compared to.<br><br>\n\n\t\tCompares the [page:.x x], [page:.y y],\t[page:.z z] and [page:.w w] properties of\n\t\t[page:Quaternion v] to the equivalent properties of this quaternion to determine if they\n\t\trepresent the same rotation."
        },
        "dot": {
          "!type": "fn(v: +THREE.Quaternion) -> number",
          "!doc": "Calculate the [link:https://en.wikipedia.org/wiki/Dot_product dot product] of\n\t\t\tquaternions [page:Quaternion v] and this one."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Quaternion",
          "!doc": "[page:Array array] - array of format (x, y, z, w) used to construct the quaternion.<br>\n\t\t[page:Integer offset] - (optional) an offset into the array.<br><br>\n\n\t\tSets this quaternion's [page:.x x], [page:.y y],\t[page:.z z] and [page:.w w] properties\n\t\tfrom an array."
        },
        "inverse": {
          "!type": "fn() -> +THREE.Quaternion",
          "!doc": "Inverts this quaternion - calculate the [page:.conjugate conjugate] and then\n\t\t\t[page:.normalize normalizes] the result."
        },
        "length": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) of this quaternion, considered as a 4 dimensional vector."
        },
        "lengthSq": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t\t(straight-line length) of this quaternion, considered as a 4 dimensional\n\t\t\tvector. This can be useful if you are comparing the lengths of two quaternions,\n\t\t\tas this is a slightly more efficient calculation than [page:.length length]()."
        },
        "normalize": {
          "!type": "fn() -> +THREE.Quaternion",
          "!doc": "[link:https://en.wikipedia.org/wiki/Normalized_vector Normalizes] this quaternion - that is,\n\t\tcalculated the quaternion that performs the same rotation as this one, but has  [page:.length length]\n\t\tequal to *1*."
        },
        "multiply": {
          "!type": "fn(q: +THREE.Quaternion) -> +THREE.Quaternion",
          "!doc": "Multiplies this quaternion by [page:Quaternion q]."
        },
        "multiplyQuaternions": {
          "!type": "fn(a: +THREE.Quaternion, b: +THREE.Quaternion) -> +THREE.Quaternion",
          "!doc": "Sets this quaternion to [page:Quaternion a] x [page:Quaternion b].<br>\n\t\tAdapted from the method outlined [link:http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm here]."
        },
        "onChange": {
          "!type": "fn(onChangeCallback: function) -> +THREE.Quaternion",
          "!doc": "Set the [page:.onChangeCallback onChangeCallback]() method."
        },
        "onChangeCallback": {
          "!type": "fn() -> +THREE.Quaternion",
          "!doc": "This function is called whenever and of the following occur:\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\tThe [page:.x x], [page:.y y], [page:.z z] or\n\t\t\t\t  [page:.w w] properties are changed.\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tThe [page:.set set](), [page:.copy copy](), [page:.clone clone](),\n\t\t\t\t\t[page:.setFromAxisAngle setFromAxisAngle](),  [page:.setFromRotationMatrix setFromRotationMatrix](),\n\t\t\t\t\t[page:.conjugate conjugate](), [page:.normalize normalize](),\n\t\t\t\t\t[page:.multiplyQuaternions multiplyQuaternions](), [page:.slerp slerp]() or [page:.fromArray fromArray]()\n\t\t\t\t\tfunctions are called.\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t[page:.setFromEuler setFromEuler]() function is called with its *update* argument set to true.\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\tBy default it is the empty function, however you can change it if needed using [page:.onChange onChange]( [page:Function onChangeCallback] )."
        },
        "premultiply": {
          "!type": "fn(q: +THREE.Quaternion) -> +THREE.Quaternion",
          "!doc": "Pre-multiplies this quaternion by [page:Quaternion q]."
        },
        "slerp": {
          "!type": "fn(qStart: +THREE.Quaternion, qEnd: +THREE.Quaternion, qTarget: +THREE.Quaternion, t: number) -> +THREE.Quaternion",
          "!doc": "[page:Quaternion qStart] - The starting quaternion (where [page:Float t] is 0)<br>\n\t\t\t[page:Quaternion qEnd] - The ending quaternion (where [page:Float t] is 1)<br>\n\t\t\t[page:Quaternion qTarget] - The target quaternion that gets set with the result<br>\n\t\t\t[page:float t] - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\t\tUnlike the normal method, the static version of slerp sets a target quaternion to the result of the slerp operation.\n\t\t\t<code>\n\t\t\t// Code setup\n\t\t\tvar startQuaternion = new THREE.Quaternion().set( 0, 0, 0, 1 ).normalize();\n\t\t\tvar endQuaternion = new THREE.Quaternion().set( 1, 1, 1, 1 ).normalize();\n\t\t\tvar t = 0;\n\n\t\t\t// Update a mesh's rotation in the loop\n\t\t\tt = ( t + 0.01 ) % 1; // constant angular momentum\n\t\t\tTHREE.Quaternion.slerp( startQuaternion, endQuaternion, mesh.quaternion, t );\n\t\t\t</code>"
        },
        "set": {
          "!type": "fn(x: number, y: number, z: number, w: number) -> +THREE.Quaternion",
          "!doc": "Sets [page:.x x], [page:.y y], [page:.z z], [page:.w w] properties of this quaternion."
        },
        "setFromAxisAngle": {
          "!type": "fn(axis: +THREE.Vector3, angle: number) -> +THREE.Quaternion",
          "!doc": "Sets this quaternion from rotation specified by [page:Vector3 axis] and [page:Float angle].<br>\n\t\tAdapted from the method [link:http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm here].<br>\n\t\t*Axis* is asumed to be normalized, *angle* is in radians."
        },
        "setFromEuler": {
          "!type": "fn(euler: +THREE.Euler) -> +THREE.Quaternion",
          "!doc": "Sets this quaternion from the rotation specified by [page:Euler] angle."
        },
        "setFromRotationMatrix": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Quaternion",
          "!doc": "Sets this quaternion from rotation component of [page:Matrix4 m].<br>\n\t\tAdapted from the method [link:http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm here]."
        },
        "setFromUnitVectors": {
          "!type": "fn(vFrom: +THREE.Vector3, vTo: +THREE.Vector3) -> +THREE.Quaternion",
          "!doc": "Sets this quaternion to the rotation required to rotate direction vector [page:Vector3 vFrom] to\n\t\tdirection vector [page:Vector3 vTo].<br>\n\t\tAdapted from the method [link:http://lolengine.net/blog/2013/09/18/beautiful-maths-quaternion-from-vectors here].<br>\n\t\t[page:Vector3 vFrom] and [page:Vector3 vTo] are assumed to be normalized."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - An optional array to store the quaternion. If not specified a new array will be created.<br>\n\t\t[page:Integer offset] - optional) if specified, the result will be copied\n\t\tinto this [page:Array].<br><br>\n\n\t\tReturns the numerical elements of this quaternion in an array of format [x, y, z, w]."
        },
        "slerpFlat": {
          "!type": "fn(dst: [], dstOffset: number, src0: [], srcOffset0: number, src1: [], srcOffset1: number, t: number)",
          "!doc": "[page:Array dst] - The output array.<br>\n\t\t[page:Integer dstOffset] - An offset into the output array.<br>\n\t\t[page:Array src0] - The source array of the starting quaternion.<br>\n\t\t[page:Integer srcOffset0] - An offset into the array *src0*.<br>\n\t\t[page:Array src1] - The source array of the target quatnerion.<br>\n\t\t[page:Integer srcOffset1] - An offset into the array *src1*.<br>\n\t\t[page:float t] - Normalized interpolation factor (between 0 and 1).<br><br>\n\t\t<div>\n\t\tLike the static *slerp* method above, but operates directly on flat arrays of numbers.\n\t\t</div>\n\n\t\t<!-- Note: Do not add non-static methods to the bottom of this page. Put them above the <h2>Static Methods</h2> -->\n\n\t\t<h2>Source</h2>\n\n\t\t[link:https://github.com/mrdoob/three.js/blob/master/src/[path].js src/[path].js]"
        }
      },
      "!doc": "Implementation of a [link:http://en.wikipedia.org/wiki/Quaternion quaternion].\n\t\t\tThis is used for [link:https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation rotating things]\n\t\t\twithout encountering the dreaded\n\t\t\t[link:http://en.wikipedia.org/wiki/Gimbal_lock gimbal lock] issue, amongst other\n\t\t\tadvantages.",
      "!type": "fn(x: number, y: number, z: number, w: number)"
    },
    "Ray": {
      "!url": "http://threejs.org/docs/#Reference/math/Ray",
      "prototype": {
        "origin": {
          "!type": "+THREE.Vector3",
          "!doc": "The origin of the [page:Ray]. Default is a [page:Vector3] at (0, 0, 0)."
        },
        "direction": {
          "!type": "+THREE.Vector3",
          "!doc": "The direction of the [page:Ray]. This must be normalized (with [page:Vector3.normalize])\n\t\tfor the methods to operate properly. Default is a [page:Vector3] at (0, 0, 0)."
        },
        "applyMatrix4": {
          "!type": "fn(matrix4: +THREE.Matrix4) -> +THREE.Ray",
          "!doc": "[page:Matrix4 matrix4] - the [page:Matrix4] to apply to this [page:Ray].<br><br>\n\n\t\tTransform this [page:Ray] by the [page:Matrix4]."
        },
        "at": {
          "!type": "fn(t: number, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Float t] - the distance along the [page:Ray] to retrieve a position for.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tGet a [page:Vector3] that is a given distance along this [page:Ray]."
        },
        "clone": {
          "!type": "fn() -> +THREE.Ray",
          "!doc": "Creates a new Ray with identical [page:.origin origin] and [page:.direction direction]  to this one."
        },
        "closestPointToPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - the point to get the closest approach to. <br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tGet the point along this [page:Ray] that is closest to the [page:Vector3] provided."
        },
        "copy": {
          "!type": "fn(ray: +THREE.Ray) -> +THREE.Ray",
          "!doc": "Copies the [page:.origin origin] and [page:.direction direction] properties\n\t\t\tof [page:Ray ray] into this ray."
        },
        "distanceSqToPoint": {
          "!type": "fn(point: +THREE.Vector3) -> number",
          "!doc": "[page:Vector3 point] - the [page:Vector3] to compute a distance to.<br><br>\n\n\t\tGet the squared distance of the closest approach between the [page:Ray] and the [page:Vector3]."
        },
        "distanceSqToSegment": {
          "!type": "fn(v0: +THREE.Vector3, v1: +THREE.Vector3, optionalPointOnRay: +THREE.Vector3, optionalPointOnSegment: +THREE.Vector3) -> number",
          "!doc": "[page:Vector3 v0] - the start of the line segment.<br>\n\t\t[page:Vector3 v1] - the end of the line segment.<br>\n\t\toptionalPointOnRay - (optional) if this is provided, it receives the point on this\n\t\t\t[page:Ray] that is closest to the segment.<br>\n\t\toptionalPointOnSegment - (optional) if this is provided, it receives the point\n\t\t\ton the line segment that is closest to this [page:Ray].<br><br>\n\n\t\tGet the squared distance between this [page:Ray] and a line segment."
        },
        "distanceToPlane": {
          "!type": "fn(plane: +THREE.Plane) -> number",
          "!doc": "[page:Plane plane] - the [page:Plane] to get the distance to.<br><br>\n\n\t\tGet the distance from [page:.origin origin] to the [page:Plane], or *null* if the [page:Ray] doesn't intersect the [page:Plane]."
        },
        "distanceToPoint": {
          "!type": "fn(point: +THREE.Vector3) -> number",
          "!doc": "[page:Vector3 point] - [page:Vector3] The [page:Vector3] to compute a distance to.<br><br>\n\n\t\tGet the distance of the closest approach between the [page:Ray] and the [page:Vector3 point]."
        },
        "equals": {
          "!type": "fn(ray: +THREE.Ray) -> bool",
          "!doc": "[page:Ray ray] - the [page:Ray] to compare to.<br><br>\n\n\t\tReturns true if this and the other [page:Ray ray] have equal [page:.offset offset]\n\t\t and [page:.direction direction]."
        },
        "intersectBox": {
          "!type": "fn(box: +THREE.Box3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Box3 box] - the [page:Box3] to intersect with.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tIntersect this [page:Ray] with a [page:Box3], returning the intersection point or\n\t\t*null* if there is no intersection."
        },
        "intersectPlane": {
          "!type": "fn(plane: +THREE.Plane, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Plane plane] - the [page:Plane] to intersect with.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tIntersect this [page:Ray] with a [page:Plane], returning the intersection point or\n\t\t*null* if there is no intersection."
        },
        "intersectSphere": {
          "!type": "fn(sphere: +THREE.Sphere, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Sphere sphere] - the [page:Sphere] to intersect with.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tIntersect this [page:Ray] with a [page:Sphere], returning the intersection point or\n\t\t*null* if there is no intersection."
        },
        "intersectTriangle": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3, c: +THREE.Vector3, backfaceCulling: bool, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 a], [page:Vector3 b], [page:Vector3 c] - The [page:Vector3] points making up the triangle.<br>\n\t\t[page:Boolean backfaceCulling] - whether to use backface culling.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tIntersect this [page:Ray] with a triangle, returning the intersection point or *null*\n\t\tif there is no intersection."
        },
        "intersectsBox": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - the [page:Box3] to intersect with.<br><br>\n\n\t\tReturn true if this [page:Ray] intersects with the [page:Box3]."
        },
        "intersectsPlane": {
          "!type": "fn(plane: +THREE.Plane) -> bool",
          "!doc": "[page:Plane plane] - the [page:Plane] to intersect with.<br><br>\n\n\t\tReturn true if this [page:Ray] intersects with the [page:Plane]."
        },
        "intersectsSphere": {
          "!type": "fn(sphere: +THREE.Sphere) -> bool",
          "!doc": "[page:Sphere sphere] - the [page:Sphere] to intersect with.<br><br>\n\n\t\tReturn true if this [page:Ray] intersects with the [page:Sphere]."
        },
        "lookAt": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Ray",
          "!doc": "[page:Vector3 v] - The [page:Vector3] to look at.<br><br>\n\n\t\tAdjusts the direction of the ray to point at the vector in world coordinates."
        },
        "recast": {
          "!type": "fn(t: number) -> +THREE.Ray",
          "!doc": "[page:Float t] - The distance along the [page:Ray] to interpolate.<br><br>\n\n\t\tShift the origin of this [page:Ray] along its direction by the distance given."
        },
        "set": {
          "!type": "fn(origin: +THREE.Vector3, direction: +THREE.Vector3) -> +THREE.Ray",
          "!doc": "[page:Vector3 origin] - the [page:.origin origin] of the [page:Ray].<br>\n\t\t[page:Vector3 origin] - the [page:.direction direction] of the [page:Ray].\n\t\tThis must be normalized (with [page:Vector3.normalize]) for the methods to operate\n\t\tproperly.<br><br>\n\n\t\tCopy the parameters to the [page:.origin origin] and [page:.direction direction] properties\n\t\tof this ray."
        }
      },
      "!doc": "A ray that emits from an origin in a certain direction. This is used by the\n\t\t\t[page:RayCaster] to assist with [link:https://en.wikipedia.org/wiki/Ray_casting raycasting].\n\t\t\tRaycasting is used for mouse picking (working out what objects in the 3D space the mouse is over) amongst\n\t\t\tother things.",
      "!type": "fn(origin: +THREE.Vector3, direction: +THREE.Vector3)"
    },
    "Sphere": {
      "!url": "http://threejs.org/docs/#Reference/math/Sphere",
      "prototype": {
        "center": {
          "!type": "+THREE.Vector3",
          "!doc": "A [page:Vector3] defining the center of the sphere. Default is (0, 0, 0)."
        },
        "radius": {
          "!type": "number",
          "!doc": "The radius of the sphere. Default is 0."
        },
        "applyMatrix4": {
          "!type": "fn(matrix: +THREE.Matrix4) -> +THREE.Sphere",
          "!doc": "[page:Matrix4 matrix] - the [Page:Matrix4] to apply <br><br>\n\n\t\t\tTransforms this sphere with the provided [page:Matrix4]."
        },
        "clampPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - [page:Vector3] The point to clamp.<br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3],\n\t\totherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tClamps a point within the sphere. If the point is is outside the sphere, it will clamp it to the\n\t\tclosets point on the edge of the sphere. Points already inside the sphere will not be affected."
        },
        "clone": {
          "!type": "fn() -> +THREE.Sphere",
          "!doc": "Returns a new sphere with the same [page:.center center] and [page:.radius radius] as this one."
        },
        "containsPoint": {
          "!type": "fn(point: +THREE.Vector3) -> bool",
          "!doc": "[page:Vector3 point] - the [page:Vector3] to be checked<br><br>\n\n\t\tChecks to see if the sphere contains the provided [page:Vector3 point] inclusive of the\n\t\tsurface of the sphere."
        },
        "copy": {
          "!type": "fn(sphere: +THREE.Sphere) -> +THREE.Sphere",
          "!doc": "Copies the values of the passed sphere's [page:.center center] and [page:.radius radius]\n\t\tproperties to this sphere."
        },
        "distanceToPoint": {
          "!type": "fn(point: +THREE.Vector3) -> number",
          "!doc": "Returns the closest distance from the boundary of the sphere to the [page:Vector3 point]. If the sphere contains the point,\n\t\tthe distance will be negative."
        },
        "empty": {
          "!type": "fn() -> bool",
          "!doc": "Checks to see if the sphere is empty (the radius set to 0)."
        },
        "equals": {
          "!type": "fn(sphere: +THREE.Sphere) -> bool",
          "!doc": "Checks to see if the two spheres' centers and radii are equal."
        },
        "getBoundingBox": {
          "!type": "fn(optionalTarget: +THREE.Box3) -> +THREE.Box3",
          "!doc": "[page:Box3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3], otherwise a new [page:Box3] will be created.<br><br>\n\n\t\t\tReturns a[link:https://en.wikipedia.org/wiki/Minimum_bounding_box Minimum Bounding Box] for the sphere."
        },
        "intersectsBox": {
          "!type": "fn(box: +THREE.Box3) -> bool",
          "!doc": "[page:Box3 box] - [page:Box3] to check for intersection against.<br><br>\n\n\t\tDetermines whether or not this sphere intersects a given [page:Box3 box]."
        },
        "intersectsPlane": {
          "!type": "fn(plane: +THREE.Plane) -> bool",
          "!doc": "[page:Plane plane] - Plane to check for intersection against.<br><br>\n\n\t\tDetermines whether or not this sphere intersects a given [page:Plane plane]."
        },
        "intersectsSphere": {
          "!type": "fn(sphere: +THREE.Sphere) -> bool",
          "!doc": "[page:Sphere sphere] - Sphere to check for intersection against.<br><br>\n\n\t\tChecks to see if two spheres intersect."
        },
        "set": {
          "!type": "fn(center: +THREE.Vector3, radius: number) -> +THREE.Sphere",
          "!doc": "[page:Vector3 center] - center of the sphere.<br>\n\t\t\t[page:Float radius] - radius of the sphere.<br><br>\n\n\t\tSets the [page:.center center] and [page:.radius radius] properties of this sphere."
        },
        "setFromPoints": {
          "!type": "fn(points: [], optionalCenter: +THREE.Vector3) -> +THREE.Sphere",
          "!doc": "[page:Array points] - an [page:Array] of [page:Vector3] positions.<br>\n\t\t[page:Vector3 optionalCenter] - Optional [page:Vector3] position for the sphere's center.<br><br>\n\n\t\tComputes the minimum bounding sphere for an array of [page:Array points]. If  [page:Vector3 optionalCenter]is given,\n\t\tit is used as the sphere's center. Otherwise, the center of the axis-aligned bounding box encompassing\n\t\t[page:Array points] is calculated."
        },
        "translate": {
          "!type": "fn(offset: +THREE.Vector3) -> +THREE.Sphere",
          "!doc": "[page:Array points] - an [page:Array] of [page:Vector3] positions.<br>\n\t\t[page:Vector3 optionalCenter] - Optional [page:Vector3] position for the sphere's center.<br><br>\n\n\t\tComputes the minimum bounding sphere for an array of [page:Array points]. If  [page:Vector3 optionalCenter]is given,\n\t\tit is used as the sphere's center. Otherwise, the center of the axis-aligned bounding box encompassing\n\t\t[page:Array points] is calculated."
        }
      },
      "!doc": "A sphere defined by a center and radius.",
      "!type": "fn(center: +THREE.Vector3, radius: number)"
    },
    "Spherical": {
      "!url": "http://threejs.org/docs/#Reference/math/Spherical",
      "prototype": {
        "radius": "number",
        "phi": "number",
        "theta": "number",
        "clone": {
          "!type": "fn() -> +THREE.Spherical",
          "!doc": "Returns a new plane with the same [page:.radius radius], [page:.phi phi]\n\t\tand [page:.theta theta] properties as this one."
        },
        "copy": {
          "!type": "fn(s: +THREE.Spherical) -> +THREE.Spherical",
          "!doc": "Copies the values of the passed Spherical's [page:.radius radius], [page:.phi phi]\n\t\t\tand [page:.theta theta] properties to this spherical."
        },
        "makeSafe": {
          "!type": "fn() -> +THREE.Spherical",
          "!doc": "Restricts the polar angle page:.phi phi] to be between 0.000001 and pi - 0.000001."
        },
        "set": {
          "!type": "fn(radius: number, phi: number, theta: number) -> +THREE.Spherical",
          "!doc": "Sets values of this spherical's [page:.radius radius], [page:.phi phi]\n\t\tand [page:.theta theta] properties."
        },
        "setFromVector3": {
          "!type": "fn(vec3: +THREE.Vector3) -> +THREE.Spherical",
          "!doc": "Sets values of this spherical's [page:.radius radius], [page:.phi phi]\n\t\t\tand [page:.theta theta] properties from the [page:Vector3 Vector3].<br><br>\n\n\t\t\tThe [page:.radius radius] is set the vector's [page:Vector3.length], while the\n\t\t\t[page:.phi phi] and [page:.theta theta] properties are set from its direction."
        }
      },
      "!doc": "A point's [link:https://en.wikipedia.org/wiki/Spherical_coordinate_system spherical coordinates].",
      "!type": "fn(radius: number, phi: number, theta: number)"
    },
    "Triangle": {
      "!url": "http://threejs.org/docs/#Reference/math/Triangle",
      "prototype": {
        "a": {
          "!type": "+THREE.Vector3",
          "!doc": "The first corner of the triangle. Default is a [page:Vector3] at (0, 0, 0)."
        },
        "b": {
          "!type": "+THREE.Vector3",
          "!doc": "The second corner of the triangle. Default is a [page:Vector3] at (0, 0, 0)."
        },
        "c": {
          "!type": "+THREE.Vector3",
          "!doc": "the final corner of the triangle. Default is a [page:Vector3] at (0, 0, 0)"
        },
        "area": {
          "!type": "fn() -> number",
          "!doc": "Return the area of the triangle."
        },
        "barycoordFromPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 point] - [page:Vector3] <br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3], otherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturn a [link:https://en.wikipedia.org/wiki/Barycentric_coordinate_system barycentric coordinate]\n\t\t from the given vector. <br><br>\n\n\t\t[link:http://commons.wikimedia.org/wiki/File:Barycentric_coordinates_1.png Picture of barycentric coordinates]"
        },
        "clone": {
          "!type": "fn() -> +THREE.Triangle",
          "!doc": "Returns a new triangle with the same [page:.a a], [page:.b b] and  [page:.c c] properties as this one."
        },
        "closestPointToPoint": {
          "!type": "fn(point: +THREE.Vector3, optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "point - [page:Vector3] <br>\n\t\t[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3], otherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tReturns the closest point on the triangle to [page:Vector3 point]."
        },
        "containsPoint": {
          "!type": "fn(point: +THREE.Vector3) -> bool",
          "!doc": "[page:Vector3 point] - [page:Vector3] to check.<br><br>\n\n\t\tReturns true if the passed vector is within the triangle."
        },
        "copy": {
          "!type": "fn(triangle: +THREE.Triangle) -> +THREE.Triangle",
          "!doc": "Copies the values of the passed triangles's [page:.a a], [page:.b b] and [page:.c c]\n\t\t\tproperties to this triangle."
        },
        "equals": {
          "!type": "fn(triangle: +THREE.Triangle) -> bool",
          "!doc": "Returns true if the two triangles have identical [page:.a a], [page:.b b] and [page:.c c] properties."
        },
        "midpoint": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3], otherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tCalculate the midpoint of the triangle."
        },
        "normal": {
          "!type": "fn(optionalTarget: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 optionalTarget] - (optional) if specified, the result will be copied into this [page:Vector3], otherwise a new [page:Vector3] will be created.<br><br>\n\n\t\tCalculate the [link:https://en.wikipedia.org/wiki/Normal_(geometry) normal vector] of the triangle."
        },
        "plane": {
          "!type": "fn(optionalTarget: +THREE.Plane) -> +THREE.Plane",
          "!doc": "[page:Plane optionalTarget] - (optional) if specified, the result will be copied into this [page:Plane], otherwise a new [page:Plane] will be created.<br><br>\n\n\t\tCreate a [page:Plane plane] based on the triangle. ."
        },
        "set": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3, c: +THREE.Vector3) -> +THREE.Triangle",
          "!doc": "Sets the triangle's [page:.a a], [page:.b b] and [page:.c c] properties to the passed [page:vector3 vector3s]."
        },
        "setFromPointsAndIndices": {
          "!type": "fn(points: [], i0: number, i1: number, i2: number) -> +THREE.Triangle",
          "!doc": "points - [page:Array] of [page:Vector3]s <br>\n\t\ti0 - [page:Integer] index <br>\n\t\ti1 - [page:Integer] index <br>\n\t\ti2 - [page:Integer] index<br><br>\n\n\t\tSets the triangle's vectors to the vectors in the array."
        }
      },
      "!doc": "A geometric triangle as defined by three [page:Vector3 Vector3s] representing its\n\t\t\tthree corners.",
      "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3, c: +THREE.Vector3)"
    },
    "Vector2": {
      "!url": "http://threejs.org/docs/#Reference/math/Vector2",
      "prototype": {
        "isVector2": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Vector2s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "height": {
          "!type": "number",
          "!doc": "Alias for [page:.y y]."
        },
        "width": {
          "!type": "number",
          "!doc": "Alias for [page:.x x]."
        },
        "x": {
          "!type": "number",
          "!doc": "Alias for [page:.x x]."
        },
        "y": {
          "!type": "number",
          "!doc": "Alias for [page:.x x]."
        },
        "add": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Adds [page:Vector2 v] to this vector."
        },
        "addScalar": {
          "!type": "fn(s: number) -> +THREE.Vector2",
          "!doc": "Add the scalar value s to this vector's [page:.x x] and [page:.y y] values."
        },
        "addScaledVector": {
          "!type": "fn(v: +THREE.Vector2, s: number) -> +THREE.Vector2",
          "!doc": "Adds the multiple of [page:Vector2 v] and [page:Float s] to this vector."
        },
        "addVectors": {
          "!type": "fn(a: +THREE.Vector2, b: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Sets this vector to [page:Vector2 a] + [page:Vector2 b]."
        },
        "angle": {
          "!type": "fn() -> number",
          "!doc": "Computes the angle in radians of this vector with respect to the positive x-axis."
        },
        "ceil": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "The [page:.x x] and [page:.y y] components of the vector are rounded up to the nearest integer value."
        },
        "clamp": {
          "!type": "fn(min: +THREE.Vector2, max: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "[page:Vector2 min] - the minimum x and y values.<br>\n\t\t[page:Vector2 max] - the maximum x and y values in the desired range<br><br>\n\n\t\tIf this vector's x or y value is greater than the max vector's x or y value, it is replaced by the corresponding value. <br><br>\n\t\tIf this vector's x or y value is less than the min vector's x or y value, it is replaced by the corresponding value."
        },
        "clampLength": {
          "!type": "fn(min: number, max: number) -> +THREE.Vector2",
          "!doc": "[page:Float min] - the minimum value the length will be clamped to <br>\n\t\t[page:Float max] - the maximum value the length will be clamped to<br><br>\n\n\t\tIf this vector's length is greater than the max value, it is replaced by the max value. <br><br>\n\t\tIf this vector's length is less than the min value, it is replaced by the min value."
        },
        "clampScalar": {
          "!type": "fn(min: number, max: number) -> +THREE.Vector2",
          "!doc": "[page:Float min] - the minimum value the components will be clamped to <br>\n\t\t[page:Float max] - the maximum value the components will be clamped to<br><br>\n\n\t\tIf this vector's x or y values are greater than the max value, they are replaced by the max value. <br><br>\n\t\tIf this vector's x or y values are less than the min value, they are replaced by the min value."
        },
        "clone": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "Returns a new vector2 with the same [page:.x x] and [page:.y y] values as this one."
        },
        "copy": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Copies the values of the passed vector2's [page:.x x] and [page:.y y]\n\t\t\tproperties to this vector2."
        },
        "distanceTo": {
          "!type": "fn(v: +THREE.Vector2) -> number",
          "!doc": "Computes the distance from this vector to [page:Vector2 v]."
        },
        "distanceToManhattan": {
          "!type": "fn(v: +THREE.Vector2) -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Taxicab_geometry Manhattan distance] from this vector to [page:Vector2 v]."
        },
        "distanceToSquared": {
          "!type": "fn(v: +THREE.Vector2) -> number",
          "!doc": "Computes the squared distance from this vector to [page:Vector2 v]. If you are just\n\t\tcomparing the distance with another distance, you should compare the distance squared instead\n\t\tas it is slightly more efficient to calculate."
        },
        "divide": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Divides this vector by [page:Vector2 v]."
        },
        "divideScalar": {
          "!type": "fn(s: number) -> +THREE.Vector2",
          "!doc": "Divides this vector by scalar [page:Float s].<br>\n\t\tSets vector to *( 0, 0 )* if [page:Float s] = 0."
        },
        "dot": {
          "!type": "fn(v: +THREE.Vector2) -> number",
          "!doc": "Calculate the [link:https://en.wikipedia.org/wiki/Dot_product dot product] of this\n\t  vector and [page:Vector2 v]."
        },
        "equals": {
          "!type": "fn(v: +THREE.Vector2) -> bool",
          "!doc": "Checks for strict equality of this vector and [page:Vector2 v]."
        },
        "floor": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "The components of the vector are rounded down to the nearest integer value."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Vector2",
          "!doc": "[page:Array array] - the source array.<br>\n\t\t[page:Integer offset] - ( optional) offset into the array. Default is 0.<br><br>\n\n\t\tSets this vector's [page:.x x] value to be array[0] and [page:.y y] value to be array[1]."
        },
        "fromBufferAttribute": {
          "!type": "fn(attribute: +THREE.BufferAttribute, index: number) -> +THREE.Vector2",
          "!doc": "[page:BufferAttribute attribute] - the source attribute.<br>\n\t\t[page:Integer index] - index in the attribute.<br><br>\n\n\t\tSets this vector's [page:.x x] and [page:.y y] values from the [page:BufferAttribute attribute]."
        },
        "getComponent": {
          "!type": "fn(index: number) -> number",
          "!doc": "[page:Integer index] - 0 or 1.<br><br>\n\n\t\tIf index equals 0 returns the [page:.x x] value. <br>\n\t\tIf index equals 1 returns the [page:.y y] value."
        },
        "length": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) from (0, 0) to (x, y)."
        },
        "lengthManhattan": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:http://en.wikipedia.org/wiki/Taxicab_geometry Manhattan length] of this vector."
        },
        "lengthSq": {
          "!type": "fn() -> number",
          "!doc": "Computes the square of the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) from (0, 0) to (x, y). If you are \tcomparing the lengths of\n\t\tvectors, you should compare the length squared instead as it is slightly more efficient to calculate."
        },
        "lerp": {
          "!type": "fn(v: +THREE.Vector2, alpha: number) -> +THREE.Vector2",
          "!doc": "[page:Vector2 v] - [page:Vector2] to interpolate towards.<br>\n\t\talpha - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tLinearly interpolate between this vector and [page:Vector2 v], where alpha is the\n\t\tdistance along the line - alpha = 0 will be this vector, and alpha = 1 will be [page:Vector2 v]."
        },
        "lerpVectors": {
          "!type": "fn(v1: +THREE.Vector2, v2: +THREE.Vector2, alpha: number) -> +THREE.Vector2",
          "!doc": "[page:Vector2 v1] - the starting [page:Vector2].<br>\n\t\t[page:Vector2 v2] - [page:Vector2] to interpolate towards.<br>\n\t\t[page:Float alpha] - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tSets this vector to be the vector linearly interpolated between [page:Vector2 v1] and\n\t\t[page:Vector2 v2] where alpha is the distance along the line connecting the two vectors\n\t\t- alpha = 0 will be [page:Vector2 v1], and alpha = 1 will be [page:Vector2 v2]."
        },
        "negate": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "Inverts this vector - i.e. sets x = -x and y = -y."
        },
        "normalize": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "Convert this vector to a [link:https://en.wikipedia.org/wiki/Unit_vector unit vector] - that is, sets it equal to the vector with the same direction\n\t\tas this one, but [page:.length length] 1."
        },
        "max": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "If this vector's x or y value is less than [page:Vector2 v's] x or y value, replace\n\t\tthat value with the corresponding max value."
        },
        "min": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "If this vector's x or y value is greater than [page:Vector2 v's] x or y value, replace\n\t\tthat value with the corresponding min value."
        },
        "multiply": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Multiplies this vector by [page:Vector2 v]."
        },
        "multiplyScalar": {
          "!type": "fn(s: number) -> +THREE.Vector2",
          "!doc": "Multiplies this vector by scalar [page:Float s]."
        },
        "rotateAround": {
          "!type": "fn(center: +THREE.Vector2, angle: float) -> +THREE.Vector2",
          "!doc": "[page:Vector2 center] - the point around which to rotate.<br>\n\t\t\t[page:float angle] - the angle to rotate, in radians.<br><br>\n\n\t\t\tRotate the vector arounf [page:Vector2 center] by [page:float angle] radians."
        },
        "round": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "The components of the vector are rounded to the nearest integer value."
        },
        "roundToZero": {
          "!type": "fn() -> +THREE.Vector2",
          "!doc": "The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value."
        },
        "set": {
          "!type": "fn(x: number, y: number) -> +THREE.Vector2",
          "!doc": "Sets the [page:.x x] and [page:.y y] components of this vector."
        },
        "setComponent": {
          "!type": "fn(index: number, value: number)",
          "!doc": "[page:Integer index] - 0 or 1.<br>\n\t\t[page:Float value] - [page:Float]<br><br>\n\n\t\tIf index equals 0 set [page:.x x] to [page:Float value]. <br>\n\t\tIf index equals 1 set [page:.y y] to [page:Float value]"
        },
        "setLength": {
          "!type": "fn(l: number) -> +THREE.Vector2",
          "!doc": "Set this vector to the vector with the same direction as this one, but [page:.length length]\n\t\t[page:Float l]."
        },
        "setScalar": {
          "!type": "fn(scalar: number) -> +THREE.Vector2",
          "!doc": "Set the [page:.x x] and [page:.y y] values of this vector both equal to [page:Float scalar]."
        },
        "setX": {
          "!type": "fn(x: number) -> +THREE.Vector2",
          "!doc": "Replace this vector's [page:.x x] value with [page:Float x]."
        },
        "setY": {
          "!type": "fn(y: number) -> +THREE.Vector2",
          "!doc": "Replace this vector's [page:.y y] value with [page:Float y]."
        },
        "sub": {
          "!type": "fn(v: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Subtracts [page:Vector2 v] from this vector."
        },
        "subScalar": {
          "!type": "fn(s: number) -> +THREE.Vector2",
          "!doc": "Subtracts [page:Float s]  from this vector's [page:.x x] and [page:.y y] compnents."
        },
        "subVectors": {
          "!type": "fn(a: +THREE.Vector2, b: +THREE.Vector2) -> +THREE.Vector2",
          "!doc": "Sets this vector to [page:Vector2 a] - [page:Vector2 b]."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - (optional) array to store the vector to. If this is not provided\n\t\ta new array will be created.<br>\n\t\t[page:Integer offset] - (optional) optional offset into the array.<br><br>\n\n\t\tReturns an array [x, y], or copies x and y into the provided [page:Array array]."
        }
      },
      "!doc": "Class representing a 2D [link:https://en.wikipedia.org/wiki/Vector_space vector].\n\n\t\t\tA 2D vector is an ordered pair of numbers (labeled x and y), which can be used to\n\t\t\trepresent a number of things, such as:\n\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\tA point in 2D space (i.e. a position on a plane).\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tA direction and length across a plane. In three.js the length will always be the\n\t\t\t\t\t[link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean distance]\n\t\t\t\t\t(straight-line distance) from (0, 0) to (x, y) and the direction is also\n\t\t\t\t\tmeasured from (0, 0) towards (x, y).\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tAny arbitrary ordered pair of numbers.\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\tThere are other things a 2D vector can be used to represent, such as momentum\n\t\t\tvectors, complex numbers and so on,\thowever these are the most common uses in three.js.",
      "!type": "fn(x: number, y: number)"
    },
    "Vector3": {
      "!url": "http://threejs.org/docs/#Reference/math/Vector3",
      "prototype": {
        "isVector3": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Vector3s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "x": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector3s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "y": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector3s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "z": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector3s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "add": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Adds [page:Vector3 v] to this vector."
        },
        "addScalar": {
          "!type": "fn(s: number) -> +THREE.Vector3",
          "!doc": "Add the scalar value s to this vector's [page:.x x], [page:.y y] and [page:.z z] values."
        },
        "addScaledVector": {
          "!type": "fn(v: +THREE.Vector3, s: number) -> +THREE.Vector3",
          "!doc": "Adds the multiple of [page:Vector3 v] and [page:Float s] to this vector."
        },
        "addVectors": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Sets this vector to [page:Vector3 a] + [page:Vector3 b]."
        },
        "applyAxisAngle": {
          "!type": "fn(axis: +THREE.Vector3, angle: number) -> +THREE.Vector3",
          "!doc": "[page:Vector3 axis] - A normalized [page:Vector3].<br>\n\t\t[page:Float angle] - An angle in radians.<br><br>\n\n\t\tApplies a rotation specified by an axis and an angle to this vector."
        },
        "applyEuler": {
          "!type": "fn(euler: +THREE.Euler) -> +THREE.Vector3",
          "!doc": "Applies euler transform to this vector by converting the [page:Euler] object to a\n\t\t[page:Quaternion] and applying."
        },
        "applyMatrix3": {
          "!type": "fn(m: +THREE.Matrix3) -> +THREE.Vector3",
          "!doc": "Multiply this vector by [page:Matrix3 m]"
        },
        "applyMatrix4": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Vector3",
          "!doc": "Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective."
        },
        "applyQuaternion": {
          "!type": "fn(quaternion: +THREE.Quaternion) -> +THREE.Vector3",
          "!doc": "Applies a [page:Quaternion] transform to this vector."
        },
        "angleTo": {
          "!type": "fn(v: +THREE.Vector3) -> number",
          "!doc": "Returns the angle between this vector and vector [page:Vector3 v] in radians."
        },
        "ceil": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "The [page:.x x], [page:.y y] and [page:.z z] components of the vector are rounded up to the nearest integer value."
        },
        "clamp": {
          "!type": "fn(min: +THREE.Vector3, max: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 min] - the minimum [page:.x x], [page:.y y] and [page:.z z] values.<br>\n\t\t[page:Vector3 max] - the maximum [page:.x x], [page:.y y] and [page:.z z] values in the desired range<br><br>\n\n\t\tIf this vector's x, y or z value is greater than the max vector's x, y or z value, it is replaced by the corresponding value. <br><br>\n\t\tIf this vector's x, y or z value is less than the min vector's x, y or z value, it is replaced by the corresponding value."
        },
        "clampLength": {
          "!type": "fn(min: number, max: number) -> +THREE.Vector3",
          "!doc": "[page:Float min] - the minimum value the length will be clamped to <br>\n\t\t[page:Float max] - the maximum value the length will be clamped to<br><br>\n\n\t\tIf this vector's length is greater than the max value, it is replaced by the max value. <br><br>\n\t\tIf this vector's length is less than the min value, it is replaced by the min value."
        },
        "clampScalar": {
          "!type": "fn(min: number, max: number) -> +THREE.Vector3",
          "!doc": "[page:Float min] - the minimum value the components will be clamped to <br>\n\t\t[page:Float max] - the maximum value the components will be clamped to<br><br>\n\n\t\tIf this vector's x, y or z values are greater than the max value, they are replaced by the max value. <br><br>\n\t\tIf this vector's x, y or z values are less than the min value, they are replaced by the min value."
        },
        "clone": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "Returns a new vector3 with the same [page:.x x], [page:.y y] and [page:.z z] values as this one."
        },
        "copy": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Copies the values of the passed vector3's [page:.x x], [page:.y y] and [page:.z z]\n\t\t\tproperties to this vector3."
        },
        "cross": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Sets this vector to [link:https://en.wikipedia.org/wiki/Cross_product cross product] of itself and [page:Vector3 v]."
        },
        "crossVectors": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Sets this vector to [link:https://en.wikipedia.org/wiki/Cross_product cross product] of [page:Vector3 a] and [page:Vector3 b]."
        },
        "distanceTo": {
          "!type": "fn(v: +THREE.Vector3) -> number",
          "!doc": "Computes the distance from this vector to [page:Vector3 v]."
        },
        "distanceToManhattan": {
          "!type": "fn(v: +THREE.Vector3) -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Taxicab_geometry Manhattan distance] from this vector to [page:Vector3 v]."
        },
        "distanceToSquared": {
          "!type": "fn(v: +THREE.Vector3) -> number",
          "!doc": "Computes the squared distance from this vector to [page:Vector3 v]. If you are just\n\t\tcomparing the distance with another distance, you should compare the distance squared instead\n\t\tas it is slightly more efficient to calculate."
        },
        "divide": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Divides this vector by [page:Vector3 v]."
        },
        "divideScalar": {
          "!type": "fn(s: number) -> +THREE.Vector3",
          "!doc": "Divides this vector by scalar [page:Float s].<br>\n\t\tSets vector to *( 0, 0 )* if *[page:Float s] = 0*."
        },
        "dot": {
          "!type": "fn(v: +THREE.Vector3) -> number",
          "!doc": "Calculate the [link:https://en.wikipedia.org/wiki/Dot_product dot product] of this\n\t\tvector and [page:Vector3 v]."
        },
        "equals": {
          "!type": "fn(v: +THREE.Vector3) -> bool",
          "!doc": "Checks for strict equality of this vector and [page:Vector3 v]."
        },
        "floor": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "The components of the vector are rounded down to the nearest integer value."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Vector3",
          "!doc": "[page:Array array] - the source array.<br>\n\t\t[page:Integer offset] - ( optional) offset into the array. Default is 0.<br><br>\n\n\t\tSets this vector's [page:.x x] value to be array[ offset + 0 ], [page:.y y] value to be array[ offset + 1 ]\n\t\tand [page:.z z] value to be array[ offset + 2 ]."
        },
        "fromBufferAttribute": {
          "!type": "fn(attribute: +THREE.BufferAttribute, index: number) -> +THREE.Vector3",
          "!doc": "[page:BufferAttribute attribute] - the source attribute.<br>\n\t\t[page:Integer index] - index in the attribute.<br><br>\n\n\t\tSets this vector's [page:.x x], [page:.y y] and [page:.z z] values from the [page:BufferAttribute attribute]."
        },
        "getComponent": {
          "!type": "fn(index: number) -> number",
          "!doc": "[page:Integer index] - 0, 1 or 2.<br><br>\n\n\t\tIf index equals 0 returns the [page:.x x] value. <br>\n\t\tIf index equals 1 returns the [page:.y y] value. <br>\n\t\tIf index equals 2 returns the [page:.z z] value."
        },
        "length": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) from (0, 0, 0) to (x, y, z)."
        },
        "lengthManhattan": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:http://en.wikipedia.org/wiki/Taxicab_geometry Manhattan length] of this vector."
        },
        "lengthSq": {
          "!type": "fn() -> number",
          "!doc": "Computes the square of the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) from (0, 0, 0) to (x, y, z). If you are \tcomparing the lengths of\n\t\tvectors, you should compare the length squared instead as it is slightly more efficient to calculate."
        },
        "lerp": {
          "!type": "fn(v: +THREE.Vector3, alpha: number) -> +THREE.Vector3",
          "!doc": "[page:Vector3 v] - [page:Vector3] to interpolate towards.<br>\n\t\talpha - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tLinearly interpolate between this vector and [page:Vector3 v], where alpha is the\n\t\tdistance along the line - alpha = 0 will be this vector, and alpha = 1 will be [page:Vector3 v]."
        },
        "lerpVectors": {
          "!type": "fn(v1: +THREE.Vector3, v2: +THREE.Vector3, alpha: number) -> +THREE.Vector3",
          "!doc": "[page:Vector3 v1] - the starting [page:Vector3].<br>\n\t\t[page:Vector3 v2] - [page:Vector3] to interpolate towards.<br>\n\t\t[page:Float alpha] - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tSets this vector to be the vector linearly interpolated between [page:Vector3 v1] and\n\t\t[page:Vector3 v2] where alpha is the distance along the line connecting the two vectors\n\t\t- alpha = 0 will be [page:Vector3 v1], and alpha = 1 will be [page:Vector3 v2]."
        },
        "negate": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "Inverts this vector - i.e. sets x = -x, y = -y and z = -z."
        },
        "normalize": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "Convert this vector to a [link:https://en.wikipedia.org/wiki/Unit_vector unit vector] - that is, sets it equal to the vector with the same direction\n\t\tas this one, but [page:.length length] 1."
        },
        "max": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "If this vector's x, y or z value is less than [page:Vector3 v's] x, y or z value, replace\n\t\tthat value with the corresponding max value."
        },
        "min": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "If this vector's x, y or z value is greater than [page:Vector3 v's] x, y or z value, replace\n\t\tthat value with the corresponding min value."
        },
        "multiply": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Multiplies this vector by [page:Vector3 v]."
        },
        "multiplyScalar": {
          "!type": "fn(s: number) -> +THREE.Vector3",
          "!doc": "Multiplies this vector by scalar [page:Float s]."
        },
        "multiplyVectors": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Sets this vector equal to [page:Vector3 a] x [page:Vector3 b]."
        },
        "project": {
          "!type": "fn(camera: +THREE.Camera) -> +THREE.Vector3",
          "!doc": "[page:Camera camera] — camera to use in the projection.<br><br>\n\n\t\t[link:https://en.wikipedia.org/wiki/Vector_projection Projects] the vector with the camera."
        },
        "projectOnPlane": {
          "!type": "fn(planeNormal: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 planeNormal] - A vector representing a plane normal.<br><br>\n\n\t\t[link:https://en.wikipedia.org/wiki/Vector_projection Projects] this vector onto a plane by subtracting this vector projected onto the plane's\n\t\tnormal from this vector."
        },
        "projectOnVector": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "[link:https://en.wikipedia.org/wiki/Vector_projection Projects] this vector onto another vector."
        },
        "reflect": {
          "!type": "fn(normal: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "[page:Vector3 normal] - the normal to the reflecting plane<br><br>\n\n\t\tReflect the vector off of plane orthogonal to [page:Vector3 normal]. Normal is assumed to\n\t\thave unit length."
        },
        "round": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "The components of the vector are rounded to the nearest integer value."
        },
        "roundToZero": {
          "!type": "fn() -> +THREE.Vector3",
          "!doc": "The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value."
        },
        "set": {
          "!type": "fn(x: number, y: number, z: number) -> +THREE.Vector3",
          "!doc": "Sets the [page:.x x], [page:.y y] and [page:.z z] components of this vector."
        },
        "setComponent": {
          "!type": "fn(index: number, value: number)",
          "!doc": "[page:Integer index] - 0, 1 or 2.<br>\n\t\t[page:Float value] - [page:Float]<br><br>\n\n\t\tIf index equals 0 set [page:.x x] to [page:Float value].<br>\n\t\tIf index equals 1 set [page:.y y] to [page:Float value].<br>\n\t\tIf index equals 2 set [page:.z z] to [page:Float value]"
        },
        "setFromCylindrical": {
          "!type": "fn(c: +THREE.Cylindrical) -> +THREE.Vector3",
          "!doc": "Sets this vector from the cylindrical coordinates [page:Cylindrical c]."
        },
        "setFromMatrixColumn": {
          "!type": "fn(matrix: +THREE.Matrix4, index: number) -> +THREE.Vector3",
          "!doc": "Sets this vector's [page:.x x], [page:.y y] and [page:.z z] equal to the column of\n\t\tthe [page:Matrix4 matrix] specified by the [page:Integer index]."
        },
        "setFromMatrixPosition": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Vector3",
          "!doc": "Sets this vector to the position elements of the\n\t\t[link:https://en.wikipedia.org/wiki/Transformation_matrix transformation matrix] [page:Matrix4 m]."
        },
        "setFromMatrixScale": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Vector3",
          "!doc": "Sets this vector to the scale elements of the\n\t\t[link:https://en.wikipedia.org/wiki/Transformation_matrix transformation matrix] [page:Matrix4 m]."
        },
        "setFromSpherical": {
          "!type": "fn(s: +THREE.Spherical) -> +THREE.Vector3",
          "!doc": "Sets this vector from the spherical coordinates [page:Spherical s]."
        },
        "setLength": {
          "!type": "fn(l: number) -> +THREE.Vector3",
          "!doc": "Set this vector to the vector with the same direction as this one, but [page:.length length]\n\t\t[page:Float l]."
        },
        "setScalar": {
          "!type": "fn(scalar: number) -> +THREE.Vector3",
          "!doc": "Set the [page:.x x], [page:.y y] and [page:.z z] values of this vector both equal to [page:Float scalar]."
        },
        "setX": {
          "!type": "fn(x: number) -> +THREE.Vector3",
          "!doc": "Replace this vector's [page:.x x] value with [page:Float x]."
        },
        "setY": {
          "!type": "fn(y: number) -> +THREE.Vector3",
          "!doc": "Replace this vector's [page:.y y] value with [page:Float y]."
        },
        "setZ": {
          "!type": "fn(z: number) -> +THREE.Vector3",
          "!doc": "Replace this vector's [page:.z z] value with [page:Float z]."
        },
        "sub": {
          "!type": "fn(v: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Subtracts [page:Vector3 v] from this vector."
        },
        "subScalar": {
          "!type": "fn(s: number) -> +THREE.Vector3",
          "!doc": "Subtracts [page:Float s]  from this vector's [page:.x x], [page:.y y] and [page:.z z] compnents."
        },
        "subVectors": {
          "!type": "fn(a: +THREE.Vector3, b: +THREE.Vector3) -> +THREE.Vector3",
          "!doc": "Sets this vector to [page:Vector3 a] - [page:Vector3 b]."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - (optional) array to store the vector to. If this is not provided\n\t\ta new array will be created.<br>\n\t\t[page:Integer offset] - (optional) optional offset into the array.<br><br>\n\n\t\tReturns an array [x, y, z], or copies x, y and z into the provided [page:Array array]."
        },
        "transformDirection": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Vector3",
          "!doc": "Transforms the direction of this vector by a matrix (the upper left 3 x 3 subset of a [page:Matrix4 m])\n\t\tand then [page:.normalize normalizes] the result."
        },
        "unproject": {
          "!type": "fn(camera: +THREE.Camera) -> +THREE.Vector3",
          "!doc": "[page:Camera camera] — camera to use in the projection.<br><br>\n\n\t\t[link:https://en.wikipedia.org/wiki/Vector_projection Unprojects] the vector with the\n\t\tcamera's projection matrix."
        }
      },
      "!doc": "Class representing a 3D [link:https://en.wikipedia.org/wiki/Vector_space vector].\n\n\t\tA 3D vector is an ordered triplet of numbers (labeled x, y, and z), which can be used to\n\t\trepresent a number of things, such as:\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\tA point in 3D space.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tA direction and length in 3D space. In three.js the length will always be the\n\t\t\t\t[link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean distance]\n\t\t\t\t(straight-line distance) from (0, 0, 0) to (x, y, z) and the direction is also\n\t\t\t\tmeasured from (0, 0, 0) towards (x, y, z).\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tAny arbitrary ordered triplet of numbers.\n\t\t\t</li>\n\t\t</ul>\n\n\t\tThere are other things a 3D vector can be used to represent, such as momentum\n\t\tvectors and so on, however these are the most common uses in three.js.",
      "!type": "fn(x: number, y: number, z: number)"
    },
    "Vector4": {
      "!url": "http://threejs.org/docs/#Reference/math/Vector4",
      "prototype": {
        "isVector4": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are Vector4s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "x": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector4s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "y": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector4s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "z": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector4s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "w": {
          "!type": "number",
          "!doc": "Used to check whether this or derived classes are Vector4s. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "add": {
          "!type": "fn(v: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "Adds [page:Vector4 v] to this vector."
        },
        "addScalar": {
          "!type": "fn(s: number) -> +THREE.Vector4",
          "!doc": "Add the scalar value s to this vector's [page:.x x], [page:.y y], [page:.z z] and [page:.w w] values."
        },
        "addScaledVector": {
          "!type": "fn(v: +THREE.Vector4, s: number) -> +THREE.Vector4",
          "!doc": "Adds the multiple of [page:Vector4 v] and [page:Float s] to this vector."
        },
        "addVectors": {
          "!type": "fn(a: +THREE.Vector4, b: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "Sets this vector to [page:Vector4 a] + [page:Vector4 b]."
        },
        "applyMatrix4": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Vector4",
          "!doc": "Multiply this vector by 4 x 4 [page:Matrix4 m]."
        },
        "ceil": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "The [page:.x x], [page:.y y], [page:.z z] and [page:.w w] components of the vector are rounded up to the nearest integer value."
        },
        "clamp": {
          "!type": "fn(min: +THREE.Vector4, max: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "[page:Vector4 min] - the minimum [page:.x x], [page:.y y], [page:.z z] and [page:.w w] values.<br>\n\t\t[page:Vector4 max] - the maximum [page:.x x], [page:.y y], [page:.z z] and [page:.w w] values in the desired range<br><br>\n\n\t\tIf this vector's x, y, z or w value is greater than the max vector's x, y, z or w value, it is replaced by the corresponding value. <br><br>\n\t\tIf this vector's x, y, z or w value is less than the min vector's x, y, z or w value, it is replaced by the corresponding value."
        },
        "clampScalar": {
          "!type": "fn(min: number, max: number) -> +THREE.Vector4",
          "!doc": "[page:Float min] - the minimum value the components will be clamped to <br>\n\t\t[page:Float max] - the maximum value the components will be clamped to<br><br>\n\n\t\tIf this vector's x, y, z or w values are greater than the max value, they are replaced by the max value. <br><br>\n\t\tIf this vector's x, y, z or w values are less than the min value, they are replaced by the min value."
        },
        "clone": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "Returns a new Vector4 with the same [page:.x x], [page:.y y], [page:.z z] and [page:.w w] values as this one."
        },
        "copy": {
          "!type": "fn(v: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "Copies the values of the passed Vector4's [page:.x x], [page:.y y], [page:.z z] and [page:.w w]\n\t\t\tproperties to this Vector4."
        },
        "divideScalar": {
          "!type": "fn(s: number) -> +THREE.Vector4",
          "!doc": "Divides this vector by scalar [page:Float s].<br>\n\t\tSets vector to *( 0, 0 )* if *[page:Float s] = 0*."
        },
        "dot": {
          "!type": "fn(v: +THREE.Vector4) -> number",
          "!doc": "Calculate the [link:https://en.wikipedia.org/wiki/Dot_product dot product] of this\n\t\tvector and [page:Vector4 v]."
        },
        "equals": {
          "!type": "fn(v: +THREE.Vector4) -> bool",
          "!doc": "Checks for strict equality of this vector and [page:Vector4 v]."
        },
        "floor": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "The components of the vector are rounded down to the nearest integer value."
        },
        "fromArray": {
          "!type": "fn(array: [], offset: number) -> +THREE.Vector4",
          "!doc": "[page:Array array] - the source array.<br>\n\t\t[page:Integer offset] - ( optional) offset into the array. Default is 0.<br><br>\n\n\t\tSets this vector's [page:.x x] value to be array[ offset + 0 ], [page:.y y] value to be array[ offset + 1 ]\n\t\t[page:.z z] value to be array[ offset + 2 ] and [page:.w w ] value to be array[ offset + 3 ]."
        },
        "fromBufferAttribute": {
          "!type": "fn(attribute: +THREE.BufferAttribute, index: number) -> +THREE.Vector4",
          "!doc": "[page:BufferAttribute attribute] - the source attribute.<br>\n\t\t[page:Integer index] - index in the attribute.<br><br>\n\n\t\tSets this vector's [page:.x x], [page:.y y], [page:.z z] and [page:.w w] values from the [page:BufferAttribute attribute]."
        },
        "getComponent": {
          "!type": "fn(index: number) -> number",
          "!doc": "[page:Integer index] - 0, 1 or 2.<br><br>\n\n\t\tIf index equals 0 returns the [page:.x x] value. <br>\n\t\tIf index equals 1 returns the [page:.y y] value. <br>\n\t\tIf index equals 2 returns the [page:.z z] value.<br>\n\t\tIf index equals 3 returns the [page:.w w] value."
        },
        "length": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) from (0, 0, 0, 0) to (x, y, z, w)."
        },
        "lengthManhattan": {
          "!type": "fn() -> number",
          "!doc": "Computes the [link:http://en.wikipedia.org/wiki/Taxicab_geometry Manhattan length] of this vector."
        },
        "lengthSq": {
          "!type": "fn() -> number",
          "!doc": "Computes the square of the [link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean length]\n\t\t(straight-line length) from (0, 0, 0, 0) to (x, y, z, w). If you are \tcomparing the lengths of\n\t\tvectors, you should compare the length squared instead as it is slightly more efficient to calculate."
        },
        "lerp": {
          "!type": "fn(v: +THREE.Vector4, alpha: number) -> +THREE.Vector4",
          "!doc": "[page:Vector4 v] - [page:Vector4] to interpolate towards.<br>\n\t\talpha - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tLinearly interpolate between this vector and [page:Vector4 v], where alpha is the\n\t\tdistance along the line - alpha = 0 will be this vector, and alpha = 1 will be [page:Vector4 v]."
        },
        "lerpVectors": {
          "!type": "fn(v1: +THREE.Vector4, v2: +THREE.Vector4, alpha: number) -> +THREE.Vector4",
          "!doc": "[page:Vector4 v1] - the starting [page:Vector4].<br>\n\t\t[page:Vector4 v2] - [page:Vector4] to interpolate towards.<br>\n\t\t[page:Float alpha] - interpolation factor in the closed interval [0, 1].<br><br>\n\n\t\tSets this vector to be the vector linearly interpolated between [page:Vector4 v1] and\n\t\t[page:Vector4 v2] where alpha is the distance along the line connecting the two vectors\n\t\t- alpha = 0 will be [page:Vector4 v1], and alpha = 1 will be [page:Vector4 v2]."
        },
        "negate": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "Inverts this vector - i.e. sets x = -x, y = -y, z = -z and w = -w."
        },
        "normalize": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "Convert this vector to a [link:https://en.wikipedia.org/wiki/Unit_vector unit vector] - that is, sets it equal to the vector with the same direction\n\t\tas this one, but [page:.length length] 1."
        },
        "max": {
          "!type": "fn(v: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "If this vector's x, y, z or w value is less than [page:Vector4 v's] x, y, z or w value, replace\n\t\tthat value with the corresponding max value."
        },
        "min": {
          "!type": "fn(v: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "If this vector's x, y, z or w value is greater than [page:Vector4 v's] x, y, z or w value, replace\n\t\tthat value with the corresponding min value."
        },
        "multiplyScalar": {
          "!type": "fn(s: number) -> +THREE.Vector4",
          "!doc": "Multiplies this vector by scalar [page:Float s]."
        },
        "round": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "The components of the vector are rounded to the nearest integer value."
        },
        "roundToZero": {
          "!type": "fn() -> +THREE.Vector4",
          "!doc": "The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value."
        },
        "set": {
          "!type": "fn(x: number, y: number, z: number, w: number) -> +THREE.Vector4",
          "!doc": "Sets the [page:.x x], [page:.y y], [page:.z z] and [page:.w w] components of this vector."
        },
        "setAxisAngleFromQuaternion": {
          "!type": "fn(q: Quaterion) -> +THREE.Vector4",
          "!doc": "[page:Quaterion q] - a normalized [page:Quaterion]<br><br>\n\n\t\t\tSet the [page:.x x], [page:.y y] and [page:.z z] components of this vector to the\n\t\t\tquaternion's axis and [page:.w w] to the angle."
        },
        "setAxisAngleFromRotationMatrix": {
          "!type": "fn(m: +THREE.Matrix4) -> +THREE.Vector4",
          "!doc": "[page:Matrix4 m] - a [page:Matrix4] of which the upper left 3x3 matrix is a pure rotation matrix.<br><br>\n\n\t\t\tSet the [page:.x x], [page:.y y] and [page:.z z] to the axis of rotation and [page:.w w] to the angle."
        },
        "setComponent": {
          "!type": "fn(index: number, value: number)",
          "!doc": "[page:Integer index] - 0, 1 or 2.<br>\n\t\t[page:Float value] - [page:Float]<br><br>\n\n\t\tIf index equals 0 set [page:.x x] to [page:Float value].<br>\n\t\tIf index equals 1 set [page:.y y] to [page:Float value].<br>\n\t\tIf index equals 2 set [page:.z z] to [page:Float value].<br>\n\t\tIf index equals 3 set [page:.w w] to [page:Float value]."
        },
        "setLength": {
          "!type": "fn(l: number) -> +THREE.Vector4",
          "!doc": "Set this vector to the vector with the same direction as this one, but [page:.length length]\n\t\t[page:Float l]."
        },
        "setScalar": {
          "!type": "fn(scalar: number) -> +THREE.Vector4",
          "!doc": "Set the [page:.x x], [page:.y y], [page:.z z] and [page:.w w] values of this vector both equal to [page:Float scalar]."
        },
        "setX": {
          "!type": "fn(x: number) -> +THREE.Vector4",
          "!doc": "Replace this vector's [page:.x x] value with [page:Float x]."
        },
        "setY": {
          "!type": "fn(y: number) -> +THREE.Vector4",
          "!doc": "Replace this vector's [page:.y y] value with [page:Float y]."
        },
        "setZ": {
          "!type": "fn(z: number) -> +THREE.Vector4",
          "!doc": "Replace this vector's [page:.z z] value with [page:Float z]."
        },
        "setW": {
          "!type": "fn(w: number) -> +THREE.Vector4",
          "!doc": "Replace this vector's [page:.w w] value with [page:Float w]."
        },
        "sub": {
          "!type": "fn(v: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "Subtracts [page:Vector4 v] from this vector."
        },
        "subScalar": {
          "!type": "fn(s: number) -> +THREE.Vector4",
          "!doc": "Subtracts [page:Float s]  from this vector's [page:.x x], [page:.y y], [page:.z z] and [page:.w w] compnents."
        },
        "subVectors": {
          "!type": "fn(a: +THREE.Vector4, b: +THREE.Vector4) -> +THREE.Vector4",
          "!doc": "Sets this vector to [page:Vector4 a] - [page:Vector4 b]."
        },
        "toArray": {
          "!type": "fn(array: [], offset: number) -> []",
          "!doc": "[page:Array array] - (optional) array to store the vector to. If this is not provided\n\t\ta new array will be created.<br>\n\t\t[page:Integer offset] - (optional) optional offset into the array.<br><br>\n\n\t\tReturns an array [x, y, z, w], or copies x, y, z and w into the provided [page:Array array]."
        }
      },
      "!doc": "Class representing a 4D [link:https://en.wikipedia.org/wiki/Vector_space vector].\n\n\t\tA 4D vector is an ordered quadruplet of numbers (labeled x, y, z, and w), which can be used to\n\t\trepresent a number of things, such as:\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\tA point in 4D space.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tA direction and length in 4D space. In three.js the length will always be the\n\t\t\t\t[link:https://en.wikipedia.org/wiki/Euclidean_distance Euclidean distance]\n\t\t\t\t(straight-line distance) from (0, 0, 0, 0, 0) to (x, y, z, w) and the direction is also\n\t\t\t\tmeasured from (0, 0, 0, 0) towards (x, y, z, w).\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tAny arbitrary ordered quadruplet of numbers.\n\t\t\t</li>\n\t\t</ul>\n\n\t\tThere are other things a 4D vector can be used to represent, however these are the most common uses in three.js.",
      "!type": "fn(x: number, y: number, z: number, w: number)"
    },
    "Bone": {
      "!url": "http://threejs.org/docs/#Reference/objects/Bone",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "isBone": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are bones. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "type": {
          "!type": "string",
          "!doc": "Set to 'Bone', this can be used to find all Bones in a scene."
        }
      },
      "!doc": "A bone which is part of a [page:Skeleton]. The skeleton in turn is used by the [page:SkinnedMesh].\n\t\tBones are almost identical to a blank [page:Object3D].",
      "!type": "fn()"
    },
    "Group": {
      "!url": "http://threejs.org/docs/#Reference/objects/Group",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "type": {
          "!type": "string",
          "!doc": "A string 'Group'. This should not be changed."
        }
      },
      "!doc": "This is almost identical to an [page:Object3D Object3D]. It's purpose is to make working\n\t\t\twith groups of objects syntactically clearer.",
      "!type": "fn()"
    },
    "LensFlare": {
      "!url": "http://threejs.org/docs/#Reference/objects/LensFlare",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "isLensFlare": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are lens flares. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "lensFlares": {
          "!type": "array",
          "!doc": "The array of flares as set by [page:LensFlare.add] or passed in the constructor.\n\t\t\tEach flare is an object with the following defaults:\n\t\t\t<code>\n{\n\ttexture: texture,\t// texture passed in the constructor or [page:.add add] method\n\tsize: size, \t\t// if not passed in, default is -1\n\tdistance: distance, \t// if not passed in, default is 0\n\tx: 0, y: 0, z: 0,\t// screen position (-1 =&gt; 1) z = 0 is in front z = 1 is back\n\tscale: 1,\n\trotation: 0,\n\topacity: opacity,\t// if not passed in, default is 1\n\tcolor: color,\t\t// if not passed in, default is new Color( 0xffffff ) (white)\n\tblending: blending\t// if not passed in, default is NormalBlending\n}\n\t\t\t</code>"
        },
        "positionScreen": {
          "!type": "+THREE.Vector3",
          "!doc": "The position of the lens flare on the screen."
        },
        "customUpdateCallback": {
          "!type": "function",
          "!doc": "A custom update callback. Default is undefined, set this to override [page:.updateLensFlares updateLensFlares]()."
        },
        "add": {
          "!type": "fn(texture: +THREE.Texture, size: number, distance: number, blending: +THREE.Materials, color: +THREE.Color)",
          "!doc": "Adds a lens flare. Takes the same parameters as the constructor."
        },
        "clone": {
          "!type": "fn() -> +THREE.LensFlare",
          "!doc": "Return a new LensFlare with the same parameters as this one."
        },
        "copy": {
          "!type": "fn(source: +THREE.LensFlare) -> +THREE.LensFlare",
          "!doc": "Copy the parameters from the [page:LensFlare source] LensFlare into this one."
        },
        "updateLensFlares": {
          "!type": "fn()",
          "!doc": "Updates [page:.lensFlares lensFlares] based on the [page:LensFlare.positionScreen positionScreen] \n\t\tproperty.<br><br>\n\n\t\tCan be overridden by setting the [page:.customUpdateCallback customUpdateCallback] function."
        }
      },
      "!doc": "Creates a simulated lens flare that tracks a light.<br><br>\n\n\t\t\tNote: [page:WebGLRenderer.alpha] must be set to *true* for LensFlare to work.",
      "!type": "fn(texture: +THREE.Texture, size: number, distance: number, blending: +THREE.Materials, color: +THREE.Color)"
    },
    "Line": {
      "!url": "http://threejs.org/docs/#Reference/objects/Line",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "isLine": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are lines. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "geometry": {
          "!type": "+THREE.Geometry",
          "!doc": "Vertices representing the line segment(s)."
        },
        "material": {
          "!type": "+THREE.Material",
          "!doc": "Material for the line."
        },
        "raycast": {
          "!type": "fn(raycaster: +THREE.Raycaster, intersects: []) -> []",
          "!doc": "Get intersections between a casted [page:Ray] and this Line.\n\t\t[page:Raycaster.intersectObject] will call this method."
        },
        "clone": {
          "!type": "fn() -> +THREE.Line",
          "!doc": "Returns a clone of this Line object and its descendants."
        }
      },
      "!doc": "A continuous line.<br><br>\n\n\t\t\tThis is nearly the same\n\t\t\tas [page:LineSegments]; the only difference is that it is rendered using\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.LINE_STRIP]\n\t\t\tinstead of [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.LINES]",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material)"
    },
    "LineLoop": {
      "!url": "http://threejs.org/docs/#Reference/objects/LineLoop",
      "prototype": {
        "!proto": "THREE.Line.prototype",
        "isLineLoop": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are line loops. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        }
      },
      "!doc": "A continuous line that connects back to the start.<br><br>\n\n\t\t\tThis is nearly the same\tas [page:Line]; the only difference is that it is rendered using\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.LINE_LOOP]\n\t\t\tinstead of [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.LINE_STRIP],\n\t\t\twhich draws a straight line to the next vertex, and connects the last vertex back to the first.",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material)"
    },
    "LineSegments": {
      "!url": "http://threejs.org/docs/#Reference/objects/LineSegments",
      "prototype": {
        "!proto": "THREE.Line.prototype",
        "isLineSegments": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are line segments. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        }
      },
      "!doc": "A series of lines drawn between pairs of vertices.<br><br>\n\n\t\t\tThis is nearly the same\tas [page:Line]; the only difference is that it is rendered using\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.LINES]\n\t\t\tinstead of [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.LINE_STRIP].",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material)"
    },
    "LOD": {
      "!url": "http://threejs.org/docs/#Reference/objects/LOD",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "levels": {
          "!type": "array",
          "!doc": "An array of [page:object level] objects<br><br>\n\n\t\tEach level is an object with two properties:<br>\n\t\t[page:Object3D object] - The [page:Object3D] to display at this level.<br>\n\t\t[page:Float distance] - The distance at which to display this level of detail."
        },
        "addLevel": {
          "!type": "fn(object: +THREE.Object3D, distance: number)",
          "!doc": "[page:Object3D object] - The [page:Object3D] to display at this level.<br>\n\t\t[page:Float distance] - The distance at which to display this level of detail.<br><br>\n\n\t\tAdds a mesh that will display at a certain distance and greater. Typically the further away the distance,\n\t\tthe lower the detail on the mesh."
        },
        "clone": {
          "!type": "fn() -> +THREE.LOD",
          "!doc": "Returns a clone of this LOD object and its associated distance specific objects."
        },
        "getObjectForDistance": {
          "!type": "fn(distance: number) -> +THREE.Object3D",
          "!doc": "Get a reference to the first [page:Object3D] (mesh) that is greater than [page:Float distance]."
        },
        "raycast": {
          "!type": "fn(raycaster: +THREE.Raycaster, intersects: []) -> []",
          "!doc": "Get intersections between a casted [page:Ray] and this LOD.\n\t\t[page:Raycaster.intersectObject] will call this method."
        },
        "toJSON": {
          "!type": "fn(meta)",
          "!doc": "Create a JSON structure with details of this LOD object."
        },
        "update": {
          "!type": "fn(camera: +THREE.Camera)",
          "!doc": "Set the visibility of each [page:levels level]'s [page:Object3D object] based on\n\t\t\tdistance from the [page:Camera camera]. This needs to be called in the render loop\n\t\t\tfor levels of detail to be updated dynamically."
        }
      },
      "!doc": "Level of Detail - show meshes with more or less geometry based on distance from the camera.<br><br>\n\n\t\t  Every level is associated with an object, and rendering can be switched between them at the distances\n\t\t\tspecified. Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail)\n\t\t\tand one for close up (high detail).",
      "!type": "fn()"
    },
    "Mesh": {
      "!url": "http://threejs.org/docs/#Reference/objects/Mesh",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "drawMode": {
          "!type": "number",
          "!doc": "Determines how the mesh triangles are constructed from the vertices.\n\t\tSee the draw mode [page:DrawModes constants] for all possible values.\n\t\tDefault is [page:DrawModes TrianglesDrawMode]."
        },
        "isMesh": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are meshes. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "geometry": {
          "!type": "+THREE.Geometry",
          "!doc": "An instance of [page:Geometry] or [page:BufferGeometry] (or derived classes),\n\t\t\tdefining the object's structure.<br><br>\n\n\t\t\tIts recommended to always use a [page:BufferGeometry] if possible for best performance."
        },
        "material": {
          "!type": "+THREE.Material",
          "!doc": "An instance of material derived from the [page:Material] base class, defining the\n\t\t\tobject's appearance. Default is a [page:MeshBasicMaterial] with a random colour."
        },
        "morphTargetInfluences": {
          "!type": "[]",
          "!doc": "An array of weights typically from 0-1 that specify how much of the morph is applied.\n\t\tUndefined by default, but reset to a blank array by [page:Mesh.updateMorphTargets updateMorphTargets]."
        },
        "morphTargetDictionary": {
          "!type": "[]",
          "!doc": "A dictionary of morphTargets based on the morphTarget.name property.\n\t\tUndefined by default, but rebuilt [page:Mesh.updateMorphTargets updateMorphTargets]."
        },
        "setDrawMode": {
          "!type": "fn()",
          "!doc": "Set the value of [page:.drawMode drawMode]."
        },
        "clone": {
          "!type": "fn() -> +THREE.Mesh",
          "!doc": "Returns a clone of this [name] object and its descendants."
        },
        "raycast": {
          "!type": "fn(raycaster: +THREE.Raycaster, intersects: []) -> []",
          "!doc": "Get intersections between a casted ray and this mesh.\n\t\t[page:Raycaster.intersectObject] will call this method."
        },
        "updateMorphTargets": {
          "!type": "fn()",
          "!doc": "Updates the morphtargets to have no influence on the object. Resets the\n\t\t[page:Mesh.morphTargetInfluences morphTargetInfluences] and\n\t\t[page:Mesh.morphTargetDictionary morphTargetDictionary] properties."
        }
      },
      "!doc": "Class representing triangular [link:https://en.wikipedia.org/wiki/Polygon_mesh polygon mesh] based objects.\n\t\t  Also serves as a base for other classes such as [page:MorphBlendMesh] and [page:SkinnedMesh].",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material)"
    },
    "Points": {
      "!url": "http://threejs.org/docs/#Reference/objects/Points",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "geometry": {
          "!type": "+THREE.Geometry",
          "!doc": "An instance of [page:Geometry] or [page:BufferGeometry] (or derived classes),\n\t\t\tdefining the object's structure.<br><br>\n\n\t\t\tIts recommended to always use a [page:BufferGeometry] if possible for best performance."
        },
        "isPoints": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are points. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "material": {
          "!type": "+THREE.Material",
          "!doc": "An instance of [page:Material], defining the object's appearance.\n\t\t\tDefault is a [page:PointsMaterial] with a random colour."
        },
        "raycast": {
          "!type": "fn(raycaster: +THREE.Raycaster, intersects: []) -> []",
          "!doc": "Get intersections between a casted ray and this Points.\n\t\t[page:Raycaster.intersectObject] will call this method."
        },
        "clone": {
          "!type": "fn() -> +THREE.Points",
          "!doc": "Returns a clone of this Points object and its descendants."
        }
      },
      "!doc": "A class for displaying points.\n\t\t\tThe points are rendered by the [page:WebGLRenderer] using\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements gl.POINTS].",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material)"
    },
    "Skeleton": {
      "!url": "http://threejs.org/docs/#Reference/objects/Skeleton",
      "prototype": {
        "bones": {
          "!type": "[]",
          "!doc": "The array of [page:bone bones]. Note this is a copy of the original array, not a reference,\n\t\tso you can modify the original array without effecting this one."
        },
        "boneInverses": {
          "!type": "[]",
          "!doc": "An array of [page:Matrix4 Matrix4s] that represent the inverse of the [page:Matrix4 matrixWorld]\n\t\tof the individual bones."
        },
        "boneMatrices": {
          "!type": "Float32Array",
          "!doc": "The array buffer holding the bone data when using a vertex texture."
        },
        "boneTexture": {
          "!type": "+THREE.DataTexture",
          "!doc": "The [page:DataTexture] holding the bone data when using a vertex texture."
        },
        "boneTextureHeight": {
          "!type": "number",
          "!doc": "The height of the vertex data texture."
        },
        "boneTextureWidth": {
          "!type": "number",
          "!doc": "The width of the vertex data texture."
        },
        "useVertexTexture": {
          "!type": "bool",
          "!doc": "Whether or not to use a vertex texture in the shader, set in the constructor.\n\t\tNot all devices\tsupport floating point pixel textures. If this option is set then\n\t\tthe bone matrices will be packed into\ta texture and sent to the shader. This method\n\t\tallows a much larger set of bones to be used. Otherwise\tthe vertex shader will use\n\t\tuniforms, which do not allow for as many bones to be used. The exact numbers vary\n\t\tbetween devices."
        },
        "clone": {
          "!type": "fn() -> +THREE.Skeleton",
          "!doc": "Returns a clone of this Skeleton object."
        },
        "calculateInverses": {
          "!type": "fn()",
          "!doc": "Generates the [page:.boneInverses boneInverses] array if not provided in the constructor."
        },
        "pose": {
          "!type": "fn()",
          "!doc": "Returns the skeleton to the base pose."
        },
        "update": {
          "!type": "fn()",
          "!doc": "Updates the [page:Float32Array boneMatrices] and [page:DataTexture boneTexture] after changing the bones.\n\t\tThis is called automatically by the [page:WebGLRenderer] if the skeleton is used with a [page:SkinnedMesh]."
        }
      },
      "!doc": "Use an array of [page:Bone bones] to create a skeleton that can be used by a\n\t\t[page:SkinnedMesh].",
      "!type": "fn(bones: [], boneInverses: [], useVertexTexture: bool)"
    },
    "SkinnedMesh": {
      "!url": "http://threejs.org/docs/#Reference/objects/SkinnedMesh",
      "prototype": {
        "!proto": "THREE.Mesh.prototype",
        "bindMode": {
          "!type": "string",
          "!doc": "Either \"attached\" or \"detached\". \"attached\" uses the [page:SkinnedMesh.matrixWorld]\n\t\tproperty for the base transform\tmatrix of the bones. \"detached\" uses the\n\t\t[page:SkinnedMesh.bindMatrix]. Default is \"attached\"."
        },
        "bindMatrix": {
          "!type": "+THREE.Matrix4",
          "!doc": "The base matrix that is used for the bound bone transforms."
        },
        "bindMatrixInverse": {
          "!type": "+THREE.Matrix4",
          "!doc": "The base matrix that is used for resetting the bound bone transforms."
        },
        "bones": {
          "!type": "array",
          "!doc": "This contains the array of [page:Bone bones] for this mesh. These should be set in\n\t\tthe constructor."
        },
        "isSkinnedMesh": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are skinned meshes. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "skeleton": {
          "!type": "+THREE.Skeleton",
          "!doc": "[page:Skeleton] created from the [page:Geometry.bones bones] of the [page:Geometry] passed in the\n\t\tconstructor."
        },
        "bind": {
          "!type": "fn(skeleton: +THREE.Skeleton, bindMatrix: +THREE.Matrix4)",
          "!doc": "[page:Skeleton skeleton] - [page:Skeleton] created from a [page:Bone Bones] tree.<br>\n\t\t[page:Matrix4 bindMatrix] - [page:Matrix4] that represents the base transform of the skeleton.<br><br>\n\n\t\tBind a skeleton to the skinned mesh. The bindMatrix gets saved to .bindMatrix property\n\t\tand the .bindMatrixInverse gets calculated. This is called automatically in the constructor, and the skeleton\n\t\tis created from the [page:Geometry.bones bones] of the [page:Geometry] passed in the\n\t\tconstructor."
        },
        "clone": {
          "!type": "fn() -> +THREE.SkinnedMesh",
          "!doc": "Returns a clone of this SkinnedMesh object and any descendants."
        },
        "normalizeSkinWeights": {
          "!type": "fn()",
          "!doc": "Normalizes the [page:Geometry.skinWeights] vectors. Does not affect [page:BufferGeometry]."
        },
        "pose": {
          "!type": "fn()",
          "!doc": "This method sets the skinned mesh in the rest pose (resets the pose)."
        },
        "updateMatrixWorld": {
          "!type": "fn(force: bool)",
          "!doc": "Updates the [page:Matrix4 MatrixWorld]."
        }
      },
      "!doc": "A mesh that has a [page:Skeleton] with [page:Bone bones] that can then be used to animate the vertices of the geometry.",
      "!type": "fn(geometry: +THREE.Geometry, material: +THREE.Material, useVertexTexture: boolean)"
    },
    "Sprite": {
      "!url": "http://threejs.org/docs/#Reference/objects/Sprite",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "isSprite": {
          "!type": "bool",
          "!doc": "Used to check whether this or derived classes are sprites. Default is *true*.<br><br>\n\n\t\t\tYou should not change this, as it used internally for optimisation."
        },
        "material": {
          "!type": "+THREE.SpriteMaterial",
          "!doc": "An instance of [page:SpriteMaterial], defining the object's appearance.\n\t\tDefault is a white [page:SpriteMaterial]."
        },
        "clone": {
          "!type": "fn() -> +THREE.Sprite",
          "!doc": "Returns a clone of this Sprite object and any descendants."
        },
        "raycast": {
          "!type": "fn(raycaster: +THREE.Raycaster, intersects: []) -> []",
          "!doc": "Get intersections between a casted ray and this sprite.\n\t\t[page:Raycaster.intersectObject] will call this method."
        }
      },
      "!doc": "A sprite is a plane that always faces towards the camera, generally with a\n\t\t\tpartially transparent texture applied.<br><br>\n\n\t\t\tSprites do not cast shadows, setting <code>castShadow = true</code> will have no effect.",
      "!type": "fn(material: +THREE.Material)"
    },
    "Polyfills": {
      "!url": "http://threejs.org/docs/#Reference/Polyfills",
      "prototype": {},
      "!doc": "Three.js includes polyfills for the following functions and constants."
    },
    "ShaderChunk": {
      "!url": "http://threejs.org/docs/#Reference/renderers/shaders/ShaderChunk",
      "prototype": {},
      "!doc": "Shader chunks for WebLG Shader library"
    },
    "ShaderLib": {
      "!url": "http://threejs.org/docs/#Reference/renderers/shaders/ShaderLib",
      "prototype": {},
      "!doc": "Webgl Shader Library for three.js"
    },
    "UniformsLib": {
      "!url": "http://threejs.org/docs/#Reference/renderers/shaders/UniformsLib",
      "prototype": {},
      "!doc": "Uniforms library for shared webgl shaders"
    },
    "UniformsUtils": {
      "!url": "http://threejs.org/docs/#Reference/renderers/shaders/UniformsUtils",
      "prototype": {},
      "!doc": "Uniform Utilities. Support merging and cloning of uniform variables"
    },
    "LensFlarePlugin": {
      "!url": "http://threejs.org/docs/#Reference/renderers/webgl/plugins/LensFlarePlugin",
      "prototype": {
        "render": {
          "!type": "fn(scene: +THREE.Scene, camera: +THREE.Camera, viewportWidth: number, viewportHeight: number)",
          "!doc": "Renders the lensflares defined in the scene. This gets automatically called as post render function to draw the lensflares."
        }
      },
      "!doc": "The Webglrenderer plugin class that allows lensflares to be rendered in the WebglRenderer. This plugin is automatically loaded in the Webglrenderer.",
      "!type": "fn()"
    },
    "SpritePlugin": {
      "!url": "http://threejs.org/docs/#Reference/renderers/webgl/plugins/SpritePlugin",
      "prototype": {
        "render": {
          "!type": "fn(scene: +THREE.Scene, camera: +THREE.Camera)",
          "!doc": "Renders the sprites defined in the scene. This gets automatically called as post-render function to draw the lensflares."
        }
      },
      "!doc": "The Webglrenderer plugin class that allows Sprites to be rendered in the WebglRenderer. This plugin is automatically loaded in the Webglrenderer.",
      "!type": "fn()"
    },
    "WebGLProgram": {
      "!url": "http://threejs.org/docs/#Reference/renderers/webgl/WebGLProgram",
      "prototype": {
        "id": "string",
        "code": "string",
        "usedTimes": "number",
        "program": "object",
        "vertexShader": "+THREE.WebGLShader",
        "fragmentShader": "+THREE.WebGLShader",
        "getUniforms": {
          "!type": "fn() -> object",
          "!doc": "Returns a name-value mapping of all active uniform locations."
        },
        "getAttributes": {
          "!type": "fn() -> object",
          "!doc": "Returns a name-value mapping of all active vertex attribute locations."
        }
      },
      "!doc": "Constructor for the GLSL program sent to vertex and fragment shaders, including default uniforms and attributes.",
      "!type": "fn(renderer: +THREE.WebGLRenderer, code: object, material: +THREE.Material, parameters: object)"
    },
    "WebGLShader": {
      "!url": "http://threejs.org/docs/#Reference/renderers/webgl/WebGLShader",
      "prototype": {},
      "!doc": "A lower level function to compile either a vertex or fragment shader."
    },
    "WebGLState": {
      "!url": "http://threejs.org/docs/#Reference/renderers/webgl/WebGLState",
      "prototype": {
        "enable": {
          "!type": "fn(id: integer, boolean: boolean)",
          "!doc": "TODO"
        },
        "disable": {
          "!type": "fn(id: integer, boolean: boolean)",
          "!doc": "TODO"
        },
        "setDepthTest": {
          "!type": "fn(depthTest: boolean)",
          "!doc": "This sets, based on depthTest, whether or not the depth data needs to be tested against the depth buffer."
        },
        "setDepthWrite": {
          "!type": "fn(depthWrite: boolean)",
          "!doc": "This sets, based on depthWrite, whether or not the depth data needs to be written in the depth buffer."
        },
        "setBlending": {
          "!type": "fn(blending: number, blendEquation: number, blendSrc: number, blendDst: number)",
          "!doc": "This method sets the correct blending."
        }
      },
      "!doc": ""
    },
    "WebGLRenderer": {
      "!url": "http://threejs.org/docs/#Reference/renderers/WebGLRenderer",
      "prototype": {
        "autoClear": {
          "!type": "bool",
          "!doc": "Defines whether the renderer should automatically clear its output before rendering a frame."
        },
        "autoClearColor": {
          "!type": "bool",
          "!doc": "If [page:.autoClear autoClear] is true, defines whether the renderer should clear the color buffer.\n\t\t\tDefault is *true*."
        },
        "autoClearDepth": {
          "!type": "bool",
          "!doc": "If [page:.autoClear autoClear] is true, defines whether the renderer should clear the depth buffer.\n\t\t\tDefault is *true*."
        },
        "autoClearStencil": {
          "!type": "bool",
          "!doc": "If [page:.autoClear autoClear] is true, defines whether the renderer should clear the stencil buffer.\n\t\t\tDefault is *true*."
        },
        "capabilities": {
          "!type": "object",
          "!doc": "An object containing details about the capabilities of the current [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext RenderingContext].<br>\n\n\t\t- [property:Boolean floatFragmentTextures]: whether the context supports the [link:https://developer.mozilla.org/en-US/docs/Web/API/OES_texture_float OES_texture_float] extension.\n\t\t\tAccording to [link:https://webglstats.com/ WebGLStats], as of February 2016 over 95% of WebGL enabled devices support this.<br>\n\t\t- [property:Boolean floatVertexTextures]: *true* if [property:Boolean floatFragmentTextures] and [property:Boolean vertexTextures] are both true.<br>\n\t\t- [property:Method getMaxAnisotropy](): see [page:WebGLRenderer.getMaxAnisotropy getMaxAnisotropy] below. <br>\n\t\t- [property:Method getMaxPrecision](): see [page:WebGLRenderer.getMaxPrecision getMaxPrecision] below. <br>\n\t\t- [property:Boolean logarithmicDepthBuffer]: *true* if the [property:parameter logarithmicDepthBuffer] was set to true in the constructor and\n\t\tthe context supports the [link:https://developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth EXT_frag_depth] extension.\n\t\t\tAccording to [link:https://webglstats.com/ WebGLStats], as of February 2016 around 66% of WebGL enabled devices support this.<br>\n\t\t- [property:Integer maxAttributes]: The value of *gl.MAX_VERTEX_ATTRIBS*.<br>\n\t\t- [property:Integer maxCubemapSize]: The value of *gl.MAX_CUBE_MAP_TEXTURE_SIZE*.\n\t\tMaximum height * width of cube map textures that a shader can use.<br>\n\t\t- [property:Integer maxFragmentUniforms]: The value of *gl.MAX_FRAGMENT_UNIFORM_VECTORS*.\n\t\t  The number of uniforms that can be used by a fragment shader.<br>\n\t\t- [property:Integer maxTextureSize]: The value of *gl.MAX_TEXTURE_SIZE*.\n\t\tMaximum height * width of a texture that a shader use.<br>\n\t\t- [property:Integer maxTextures]: The value of *gl.MAX_TEXTURE_IMAGE_UNITS*.\n\t\t  The maximum number of textures that can be used by a shader.<br>\n\t\t- [property:Integer maxVaryings]: The value of *gl.MAX_VARYING_VECTORS*.\n\t\t  The number of varying vectors that can used by shaders.<br>\n\t\t- [property:Integer maxVertexTextures]: The value of *gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS*.\n\t\t   The number of textures that can be used in a vertex shader.<br>\n\t\t- [property:Integer maxVertexUniforms]: The value of *gl.MAX_VERTEX_UNIFORM_VECTORS*.\n\t\t   The maximum number of uniforms that can be used in a vertex shader.<br>\n\t\t- [property:String precision]: The shader precision currently being used by the renderer.<br>\n\t\t- [property:Boolean vertexTextures]: *true* if [property:Integer maxVertexTextures] is greater than 0 (i.e. vertext textures can be used).<br>"
        },
        "clippingPlanes": {
          "!type": "[]",
          "!doc": "User-defined clipping planes specified as THREE.Plane objects in world space.\n\t\t\tThese planes apply globally. Points in space whose dot product with the plane is negative are cut away.\n\t\t Default is []."
        },
        "context": {
          "!type": "WebGLRenderingContext",
          "!doc": "The renderer obtains a [link:https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext RenderingContext] context\n\t\t  from its [page:WebGLRenderer.domElement domElement][page:WebGLRenderer.domElement domElement] by default, using\n\t\t\t[link:https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext HTMLCanvasElement.getContext]().<br><br>\n\n\t\tYou can create this manually, however it must correspond to the\n\t\t[page:WebGLRenderer.domElement domElement] in order to render to the screen."
        },
        "domElement": {
          "!type": "DOMElement",
          "!doc": "A [link:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas canvas] where the renderer draws its output.<br>\n\t\t\tThis is automatically created by the renderer in the constructor (if not provided already);\n\t\t\tyou just need to add it to your page like so:<br>\n\t\t<code>\n\t\t\tdocument.body.appendChild( renderer.domElement );\n\t\t</code>"
        },
        "extensions": {
          "!type": "object",
          "!doc": "A wrapper for the [page:WebGLRenderer.extensions.get .extensions.get] method, used to check whether\n\t\tvarious WebGL extensions are supported."
        },
        "gammaFactor": {
          "!type": "bool",
          "!doc": "Default is *2*."
        },
        "gammaInput": {
          "!type": "bool",
          "!doc": "If set, then it expects that all textures and colors are premultiplied gamma. Default is *false*."
        },
        "gammaOutput": {
          "!type": "bool",
          "!doc": "If set, then it expects that all textures and colors need to be outputted in premultiplied gamma. Default is *false*."
        },
        "info": {
          "!type": "object",
          "!doc": "<ul>\n\t\t\t<li>memory:\n\t\t\t\t<ul>\n\t\t\t\t\t<li>geometries</li>\n\t\t\t\t\t<li>textures</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li>render:\n\t\t\t\t<ul>\n\t\t\t\t\t<li>calls</li>\n\t\t\t\t\t<li>vertices</li>\n\t\t\t\t\t<li>faces</li>\n\t\t\t\t\t<li>points</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li>programs\n\t\t\t</li>\n\t\t</ul>"
        },
        "localClippingEnabled": {
          "!type": "bool",
          "!doc": "Defines whether the renderer respects object-level clipping planes. Default is *false*."
        },
        "maxMorphTargets": {
          "!type": "number",
          "!doc": "Default is 8. The maximum number of MorphTargets allowed in a shader.\n\t\t\tKeep in mind that the standard materials only allow 8 MorphTargets."
        },
        "maxMorphNormals": {
          "!type": "number",
          "!doc": "Default is 4. The maximum number of MorphNormals allowed in a shader.\n\t\t\tKeep in mind that the standard materials only allow 4 MorphNormals."
        },
        "physicallyCorrectLights": {
          "!type": "number",
          "!doc": "Whether to use physically correct lighting mode. Default is *false*.\n\t\tSee the [example:webgl_lights_physical lights / physical] example."
        },
        "properties": {
          "!type": "object",
          "!doc": "Used internally by the renderer to keep track of various sub object properties."
        },
        "shadowMap": {
          "!type": "WebGLShadowMap",
          "!doc": "This contains the reference to the shadow map, if used."
        },
        "shadowMap.enabled": {
          "!type": "bool",
          "!doc": "If set, use shadow maps in the scene. Default is *false*."
        },
        "shadowMap.type": {
          "!type": "number",
          "!doc": "Options are THREE.BasicShadowMap, THREE.PCFShadowMap (default), THREE.PCFSoftShadowMap. See [page:WebGLRenderer WebGLRenderer constants] for details."
        },
        "shadowMap.renderReverseSided": {
          "!type": "bool",
          "!doc": "Whether to render the opposite side as specified by the material into the shadow map.\n\t\t\tWhen disabled, an appropriate shadow.bias must be set on the light source for surfaces that can\n\t\t\tboth cast and receive shadows at the same time to render correctly. Default is *true*."
        },
        "shadowMap.renderSingleSided": {
          "!type": "bool",
          "!doc": "Whether to treat materials specified as double-sided as if they were specified as front-sided\n\t\twhen rendering the shadow map. When disabled, an appropriate shadow.bias must be set on the light\n\t\tsource for surfaces that can both cast and receive shadows at the same time to render correctly.\n\t\tDefault is *true*."
        },
        "sortObjects": {
          "!type": "bool",
          "!doc": "Defines whether the renderer should sort objects. Default is *true*.<br><br>\n\n\t\tNote: Sorting is used to attempt to properly render objects that have some degree of transparency.\n\t\tBy definition, sorting objects may not work in all cases.  Depending on the needs of application,\n\t\tit may be neccessary to turn off sorting and use other methods to deal with transparency\n\t\trendering e.g. manually determining each object's rendering order."
        },
        "state": {
          "!type": "object",
          "!doc": "Contains functions for setting various properties of the [page:WebGLRenderer.context] state."
        },
        "toneMapping": {
          "!type": "Constant",
          "!doc": "Default is [page:Renderer LinearToneMapping]. See the [page:Renderer Renderer constants] for other choices."
        },
        "toneMappingExposure": {
          "!type": "number",
          "!doc": "Exposure level of tone mapping. Default is *1*."
        },
        "toneMappingWhitePoint": {
          "!type": "number",
          "!doc": "Tone mapping white point. Default is *1*."
        },
        "clear": {
          "!type": "fn(color: bool, depth: bool, stencil: bool)",
          "!doc": "Tells the renderer to clear its color, depth or stencil drawing buffer(s).\n\t\t\tThis method initializes the color buffer to the current clear color value.<br>\n\t\tArguments default to *true*."
        },
        "clearColor": {
          "!type": "fn()",
          "!doc": "Clear the color buffer. Equivalent to calling [page:WebGLRenderer.clear .clear]( true, false, false )."
        },
        "clearDepth": {
          "!type": "fn()",
          "!doc": "Clear the depth buffer. Equivalent to calling [page:WebGLRenderer.clear .clear]( false, true, false )."
        },
        "clearStencil": {
          "!type": "fn()",
          "!doc": "Clear the stencil buffers. Equivalent to calling [page:WebGLRenderer.clear .clear]( false, false, true )."
        },
        "clearTarget": {
          "!type": "fn(renderTarget: +THREE.WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean)",
          "!doc": "This method clears a rendertarget. To do this, it activates the rendertarget."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Dispose of the current rendering context."
        },
        "extensions.get": {
          "!type": "fn(extensionName: string) -> object",
          "!doc": "Used to check whether various extensions are supported and returns an object with details of the extension if available.\n\t\tThis method can check for the following extensions:<br><br>\n\n\t\t- *WEBGL_depth_texture*<br>\n\t\t- *EXT_texture_filter_anisotropic*<br>\n\t\t- *WEBGL_compressed_texture_s3tc*<br>\n\t\t- *WEBGL_compressed_texture_pvrtc*<br>\n\t\t- *WEBGL_compressed_texture_etc1*"
        },
        "forceContextLoss": {
          "!type": "fn()",
          "!doc": "Simulate loss of the WebGL context. This requires support for the\n\t\t\t[link:https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context WEBGL_lose_context] extensions.\n\t\tAccording to [link:https://webglstats.com/ WebGLStats], as of February 2016 90% of WebGL enabled devices support this."
        },
        "getClearAlpha": {
          "!type": "fn() -> number",
          "!doc": "Returns a [page:Float float] with the current clear alpha. Ranges from 0 to 1."
        },
        "getClearColor": {
          "!type": "fn() -> +THREE.Color",
          "!doc": "Returns a [page:Color THREE.Color] instance with the current clear color."
        },
        "getContext": {
          "!type": "fn() -> WebGLRenderingContext",
          "!doc": "Return the current WebGL context."
        },
        "getContextAttributes": {
          "!type": "fn() -> WebGLContextAttributes",
          "!doc": "Returns an object that describes the attributes set on the WebGL context when it was created."
        },
        "getCurrentRenderTarget": {
          "!type": "fn() -> RenderTarget",
          "!doc": "Returns the current RenderTarget, if any."
        },
        "getMaxAnisotropy": {
          "!type": "fn() -> number",
          "!doc": "This returns the anisotropy level of the textures."
        },
        "getPixelRatio": {
          "!type": "fn() -> number",
          "!doc": "Returns current device pixel ratio used."
        },
        "getPrecision": {
          "!type": "fn() -> string",
          "!doc": "This gets the precision used by the shaders. It returns \"highp\",\"mediump\" or \"lowp\"."
        },
        "getSize": {
          "!type": "fn() -> object",
          "!doc": "Returns an object containing the width and height of the renderer's output canvas, in pixels."
        },
        "resetGLState": {
          "!type": "fn()",
          "!doc": "Reset the GL state to default. Called internally if the WebGL context is lost."
        },
        "readRenderTargetPixels": {
          "!type": "fn(renderTarget: +THREE.WebGLRenderTarget, x: number, y: number, width: number, height: number, buffer)",
          "!doc": "Reads the pixel data from the renderTarget into the buffer you pass in.\n\t\t\tBuffer should be a Javascript Uint8Array instantiated with\n\t\t\tnew Uint8Array( renderTargetWidth * renderTargetWidth * 4 ) to account for size and color\n\t\t\tinformation. This is a wrapper around gl.readPixels.<br>\n\t\tSee the [example:webgl_interactive_cubes_gpu interactive / cubes / gpu] example."
        },
        "render": {
          "!type": "fn(scene: +THREE.Scene, camera: +THREE.Camera, renderTarget: +THREE.WebGLRenderTarget, forceClear: bool)",
          "!doc": "Render a [page:Scene scene] using a [page:Camera camera].<br>\n\n\t\t\tThe render is done to the [page:WebGLRenderTarget renderTarget] (if specified) or to the canvas as usual.<br>\n\n\t\t\tIf [page:Boolean forceClear] is *true*, the depth, stencil and color buffers will be cleared\n\t\t\tbefore rendering even if the renderer's [page:WebGLRenderer.autoClear autoClear] property is false.<br>\n\n\t\t\tEven with forceClear set to true you can prevent certain buffers being cleared by setting\n\t\t\teither the [page:WebGLRenderer.autoClearColor autoClearColor], [page:WebGLRenderer.autoClearStencil autoClearStencil] or [page:WebGLRenderer.autoClearDepth autoClearDepth] properties to false."
        },
        "renderBufferDirect": {
          "!type": "fn(camera: +THREE.Camera, lights: [], fog: +THREE.Fog, material: +THREE.Material, geometryGroup: object, object: +THREE.Object3D)",
          "!doc": "Render a buffer geometry group using the camera and with the specified material."
        },
        "renderBufferImmediate": {
          "!type": "fn(object: +THREE.Object3D, program: shaderprogram, shading: +THREE.Material)",
          "!doc": "object - an instance of [page:Object3D]<br>\n\t\tprogram - an instance of shaderProgram<br>\n\t\tshading - an instance of Material<br><br>\n\n\t\tRender an immediate buffer. Gets called by renderImmediateObject."
        },
        "setClearAlpha": {
          "!type": "fn(alpha: number)",
          "!doc": "Sets the clear alpha. Valid input is a float between *0.0* and *1.0*."
        },
        "setClearColor": {
          "!type": "fn(color: +THREE.Color, alpha: number)",
          "!doc": "Sets the clear color and opacity."
        },
        "setFaceCulling": {
          "!type": "fn(cullFace: +THREE.Renderer, frontFace: +THREE.Renderer)",
          "!doc": "See [page:Renderer WebGLRenderer constants] for all possible values for [page:Renderer cullFace] and [page:Renderer frontFace].<br>\n\t\tUsed for setting the gl.frontFace and gl.cullFace states in the GPU, thus enabling/disabling face culling when rendering.<br>\n\t\tIf cullFace is set to [page:Renderer CullFaceNone], culling will be disabled.<br>"
        },
        "setPixelRatio": {
          "!type": "fn(value: number)",
          "!doc": "Sets device pixel ratio. This is usually used for HiDPI device to prevent bluring output canvas."
        },
        "setRenderTarget": {
          "!type": "fn(renderTarget: +THREE.WebGLRenderTarget)",
          "!doc": "renderTarget -- The [page:WebGLRenderTarget renderTarget] that needs to be activated (optional).<br><br>\n\t\tThis method sets the active rendertarget. If the parameter is omitted the canvas is set as the active rendertarget."
        },
        "setScissor": {
          "!type": "fn(x: number, y: number, width: number, height: number)",
          "!doc": "Sets the scissor area from (x, y) to (x + width, y + height)"
        },
        "setScissorTest": {
          "!type": "fn(boolean: bool)",
          "!doc": "Enable or disable the scissor test. When this is enabled, only the pixels within\n\t\t\tthe defined scissor area will be affected by further renderer actions..<br><br>\n\n\t\tNOTE: The point (x, y) is the lower left corner of the area to be set for both of these methods.\n\t\t\tThe area is defined from left to right in width but bottom to top in height.\n\t\t\tThe sense of the vertical definition is opposite to the fill direction of an HTML canvas element."
        },
        "supportsVertexTextures": {
          "!type": "fn() -> bool",
          "!doc": "Return a [page:Boolean] true if the context supports vertex textures.\n\t\tThis has been deprecated in favour of [page:WebGLRenderer.capabilities capabilities.vertexTexures]."
        },
        "setSize": {
          "!type": "fn(width: number, height: number, updateStyle: bool)",
          "!doc": "Resizes the output canvas to (width, height) with device pixel ratio taken into account,\n\t\t\tand also sets the viewport to fit that size, starting in (0, 0).\n\t\t\tSetting [page:Boolean updateStyle] to true adds explicit pixel units to the output canvas style."
        },
        "setTexture2D": {
          "!type": "fn(texture: +THREE.Texture, slot: number)",
          "!doc": "texture -- The [page:Texture texture] that needs to be set.<br>\n\t\tslot -- The number indicating which slot should be used by the texture.<br><br>\n\n\t\tThis method sets the correct texture to the correct slot for the WebGL shader.\n\t\tThe slot number can be found as a value of the uniform of the sampler.<br><br>\n\n\t\tNote: This method replaces the older [method:null setTexture] method."
        },
        "setTextureCube": {
          "!type": "fn(cubeTexture: +THREE.CubeTexture, slot: number)",
          "!doc": "texture -- The [page:CubeTexture cubeTexture] that needs to be set.<br>\n\t\tslot -- The number indicating which slot should be used by the texture.<br><br>\n\n\t\tThis method sets the correct texture to the correct slot for the WebGL shader.\n\t\tThe slot number can be found as a value of the uniform of the sampler."
        },
        "setViewport": {
          "!type": "fn(x: number, y: number, width: number, height: number)",
          "!doc": "Sets the viewport to render from (x, y) to (x + width, y + height)."
        }
      },
      "!doc": "The WebGL renderer displays your beautifully crafted scenes using\n\t\t\t[link:https://en.wikipedia.org/wiki/WebGL WebGL].",
      "!type": "fn(parameters: object)"
    },
    "WebGLRenderTarget": {
      "!url": "http://threejs.org/docs/#Reference/renderers/WebGLRenderTarget",
      "prototype": {
        "uuid": {
          "!type": "number",
          "!doc": "A unique number for this render target instance."
        },
        "width": {
          "!type": "number",
          "!doc": "The width of the render target."
        },
        "height": {
          "!type": "number",
          "!doc": "The height of the render target."
        },
        "scissor": {
          "!type": "+THREE.Vector4",
          "!doc": "A rectangular area inside the render target's viewport. Fragments that are outside the area will be discarded."
        },
        "scissorTest": {
          "!type": "boolean",
          "!doc": "Indicates whether the scissor test is active or not."
        },
        "viewport": {
          "!type": "+THREE.Vector4",
          "!doc": "The viewport of this render target."
        },
        "texture": {
          "!type": "+THREE.Texture",
          "!doc": "This texture instance holds the rendered pixels. Use it as input for further processing."
        },
        "depthBuffer": {
          "!type": "boolean",
          "!doc": "Renders to the depth buffer. Default is true."
        },
        "stencilBuffer": {
          "!type": "boolean",
          "!doc": "Renders to the stencil buffer. Default is true."
        },
        "depthTexture": {
          "!type": "+THREE.DepthTexture",
          "!doc": "If set, the scene depth will be rendered to this texture. Default is null."
        },
        "setSize": {
          "!type": "fn(width: number, height: number)",
          "!doc": "Sets the size of the render target."
        },
        "clone": {
          "!type": "fn() -> +THREE.WebGLRenderTarget",
          "!doc": "Creates a copy of this render target."
        },
        "copy": {
          "!type": "fn(source: +THREE.WebGLRenderTarget) -> +THREE.WebGLRenderTarget",
          "!doc": "Adopts the settings of the given render target."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Dispatches a dispose event."
        }
      },
      "!doc": "A [link:https://msdn.microsoft.com/en-us/library/bb976073.aspx render target] is a buffer\n\t\t\twhere the video card draws pixels for a scene that\tis being rendered in the background.\n\t\t\tIt is used in different effects, such as applying postprocessing to a rendered image\n\t\t\tbefore displaying it on the screen.",
      "!type": "fn(width: number, height: number, options: object)"
    },
    "WebGLRenderTargetCube": {
      "!url": "http://threejs.org/docs/#Reference/renderers/WebGLRenderTargetCube",
      "prototype": {
        "!proto": "THREE.WebGLRenderTarget.prototype",
        "activeCubeFace": {
          "!type": "integer",
          "!doc": "The activeCubeFace property corresponds to a cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) and is\n\t\tused and set internally by the [page:CubeCamera]."
        }
      },
      "!doc": "Used by the [page:CubeCamera] as its [page:WebGLRenderTarget].",
      "!type": "fn(width: number, height: number, options: object)"
    },
    "Fog": {
      "!url": "http://threejs.org/docs/#Reference/scenes/Fog",
      "prototype": {
        "name": {
          "!type": "string",
          "!doc": "Optional name of the object (doesn't need to be unique). Default is an empty string."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "Fog color.  Example: If set to black, far away objects will be rendered black."
        },
        "near": {
          "!type": "number",
          "!doc": "Default is 1."
        },
        "far": {
          "!type": "number",
          "!doc": "Default is 1000."
        },
        "clone": {
          "!type": "fn() -> +THREE.Fog",
          "!doc": "Returns a new fog instance with the same parameters as this one."
        },
        "toJSON": {
          "!type": "fn() -> +THREE.Fog",
          "!doc": "Return fog data in JSON format."
        }
      },
      "!doc": "This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.",
      "!type": "fn(hex: number, near: number, far: number)"
    },
    "FogExp2": {
      "!url": "http://threejs.org/docs/#Reference/scenes/FogExp2",
      "prototype": {
        "name": {
          "!type": "string",
          "!doc": "Optional name of the object (doesn't need to be unique). Default is an empty string."
        },
        "color": {
          "!type": "+THREE.Color",
          "!doc": "Fog color. Example: If set to black, far away objects will be rendered black."
        },
        "density": {
          "!type": "number",
          "!doc": "Default is 0.00025."
        },
        "clone": {
          "!type": "fn() -> +THREE.FogExp2",
          "!doc": "Returns a new FogExp2 instance with the same parameters as this one."
        },
        "toJSON": {
          "!type": "fn() -> +THREE.FogExp2",
          "!doc": "Return FogExp2 data in JSON format."
        }
      },
      "!doc": "This class contains the parameters that define exponential fog, i.e., that grows exponentially denser with the distance.",
      "!type": "fn(hex: number, density: number)"
    },
    "Scene": {
      "!url": "http://threejs.org/docs/#Reference/scenes/Scene",
      "prototype": {
        "!proto": "THREE.Object3D.prototype",
        "fog": {
          "!type": "+THREE.Fog",
          "!doc": "A [page:Fog fog] instance defining the type of fog that affects everything rendered in the scene. Default is null."
        },
        "overrideMaterial": {
          "!type": "+THREE.Material",
          "!doc": "If not null, it will force everything in the scene to be rendered with that material. Default is null."
        },
        "autoUpdate": {
          "!type": "boolean",
          "!doc": "Default is true. If set, then the renderer checks every frame if the scene and its objects needs matrix updates.\n\t\tWhen it isn't, then you have to maintain all matrices in the scene yourself."
        },
        "background": {
          "!type": "object",
          "!doc": "If not null, sets the background used when rendering the scene, and is always rendered first. Can be set to a [page:Color] which sets the clear color, a [page:Texture] covering the canvas, or a [page:CubeTexture]. Default is null."
        }
      },
      "!doc": "Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.",
      "!type": "fn()"
    },
    "Template": {
      "!url": "http://threejs.org/docs/#Reference/Template",
      "prototype": {
        "!proto": "THREE.Geometry.prototype",
        "todo": {
          "!type": "fn()",
          "!doc": "todo"
        }
      },
      "!doc": "todo",
      "!type": "fn(todo: number)"
    },
    "CanvasTexture": {
      "!url": "http://threejs.org/docs/#Reference/textures/CanvasTexture",
      "prototype": {
        "!proto": "THREE.Texture.prototype",
        "needsUpdate": {
          "!type": "boolean",
          "!doc": "True by default. This is required so that the canvas data is loaded."
        }
      },
      "!doc": "Creates a texture from a canvas element.<br><br>\n\n\t\tThis is almost the same as the base [page:Texture Texture] class, except that it sets [page:Texture.needsUpdate needsUpdate] to *true* immediately.",
      "!type": "fn(canvas: HTMLElement, mapping: Constant, wrapS: Constant, wrapT: Constant, magFilter: Constant, minFilter: Constant, format: Constant, type: Constant, anisotropy: number)"
    },
    "CompressedTexture": {
      "!url": "http://threejs.org/docs/#Reference/textures/CompressedTexture",
      "prototype": {
        "!proto": "THREE.Texture.prototype",
        "flipY": {
          "!type": "boolean",
          "!doc": "False by default. Flipping textures does not work for compressed textures."
        },
        "generateMipmaps": {
          "!type": "boolean",
          "!doc": "False by default. Mipmaps can't be generated for compressed textures"
        }
      },
      "!doc": "Creates a texture based on data in compressed form, for example from a <a href=\"https://en.wikipedia.org/wiki/DirectDraw_Surface\">DDS</a> file.<br><br>\n\n\t\t\n\t\tFor use with the [page:CompressedTextureLoader CompressedTextureLoader].",
      "!type": "fn(mipmaps: [], width: number, height: number, format: Constant, type: Constant, mapping: Constant, wrapS: Constant, wrapT: Constant, magFilter: Constant, minFilter: Constant, anisotropy: number)"
    },
    "CubeTexture": {
      "!url": "http://threejs.org/docs/#Reference/textures/CubeTexture",
      "prototype": {
        "!proto": "THREE.Texture.prototype"
      },
      "!doc": "Creates a cube texture made up of six images.",
      "!type": "fn(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy)"
    },
    "DataTexture": {
      "!url": "http://threejs.org/docs/#Reference/textures/DataTexture",
      "prototype": {
        "!proto": "THREE.Texture.prototype",
        "image": {
          "!type": "Image",
          "!doc": "Overridden with a record type holding data, width and height."
        }
      },
      "!doc": "Creates a texture directly from raw data, width and height.",
      "!type": "fn(data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy)"
    },
    "DepthTexture": {
      "!url": "http://threejs.org/docs/#Reference/textures/DepthTexture",
      "prototype": {
        "!proto": "THREE.Texture.prototype"
      },
      "!doc": "Creates a texture for use as a Depth Texture. Require support for the\n    <a href=\"https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/\">WEBGL_depth_texture</a>\n    extension. According to <a href=\"https://webglstats.com/\">WebGLStats</a>, as of February 2016 around 85%\n    of WebGL enabled devices support this.\n    <br><br>",
      "!type": "fn(width: number, height: number, type: Constant, wrapS: Constant, wrapT: Constant, magFilter: Constant, minFilter: Constant, anisotropy: number, format: Constant)"
    },
    "Texture": {
      "!url": "http://threejs.org/docs/#Reference/textures/Texture",
      "prototype": {
        "id": {
          "!type": "number",
          "!doc": "Readonly - unique number for this texture instance."
        },
        "uuid": {
          "!type": "string",
          "!doc": "[link:http://en.wikipedia.org/wiki/Universally_unique_identifier UUID] of this object instance.\n\t\tThis gets automatically assigned, so this shouldn't be edited."
        },
        "name": {
          "!type": "string",
          "!doc": "Optional name of the object (doesn't need to be unique). Default is an empty string."
        },
        "image": {
          "!type": "Image",
          "!doc": "An image object, typically created using the [page:TextureLoader.load] method.\n\t\tThis can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.<br><br>\n\n\t\tTo use video as a texture you need to have a playing HTML5\n\t\tvideo element as a source for your texture image and continuously update this texture\n\t\tas long as video is playing - the [page:VideoTexture VideoTexture] class handles this automatically."
        },
        "mipmaps": {
          "!type": "array",
          "!doc": "Array of user-specified mipmaps (optional)."
        },
        "mapping": {
          "!type": "object",
          "!doc": "How the image is applied to the object. An object type of [page:Textures THREE.UVMapping] is the default,\n\t\twhere the U,V coordinates are used to apply the map.<br>\n\n\t\tSee the [page:Textures texture constants] page for other mapping types."
        },
        "wrapS": {
          "!type": "number",
          "!doc": "This defines how the texture is wrapped horizontally and corresponds to *U* in UV mapping.<br>\n\t\tThe default is [page:Textures THREE.ClampToEdgeWrapping], where the edge is clamped to the outer edge texels.\n\t\tThe other two choices are [page:Textures THREE.RepeatWrapping] and [page:Textures THREE.MirroredRepeatWrapping].\n\t\tSee the [page:Textures texture constants] page for details."
        },
        "wrapT": {
          "!type": "number",
          "!doc": "This defines how the texture is wrapped vertically and corresponds to *V* in UV mapping.<br>\n\t\tThe same choices are available as for [property:number wrapS].<br><br>\n\n\t\tNOTE: tiling of images in textures only functions if image dimensions are powers of two\n\t\t (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...) in terms of pixels.\n\t\t Individual dimensions need not be equal, but each must be a power of two.\n\t\t This is a limitation of WebGL, not three.js."
        },
        "magFilter": {
          "!type": "number",
          "!doc": "How the texture is sampled when a texel covers more than one pixel. The default is\n\t\t [page:Textures THREE.LinearFilter], which takes the four closest texels and bilinearly interpolates among them.\n\t\t The other option is [page:Textures THREE.NearestFilter], which uses the value of the closest texel.<br>\n\t\t See the [page:Textures texture constants] page for details."
        },
        "minFilter": {
          "!type": "number",
          "!doc": "How the texture is sampled when a texel covers less than one pixel. The default is\n\t\t[page:Textures THREE.LinearMipMapLinearFilter], which uses mipmapping and a trilinear filter. <br><br>\n\n\t\tSee the [page:Textures texture constants] page for all possible choices."
        },
        "anisotropy": {
          "!type": "number",
          "!doc": "The number of samples taken along the axis through the pixel that has the highest density of texels.\n\t\tBy default, this value is 1. A higher value gives a less blurry result than a basic mipmap,\n\t\tat the cost of more texture samples being used. Use [page:WebGLRenderer.getMaxAnisotropy renderer.getMaxAnisotropy]() to\n\t\tfind the maximum valid anisotropy value for the GPU; this value is usually a power of 2."
        },
        "format": {
          "!type": "number",
          "!doc": "The default is [page:Textures THREE.RGBAFormat], although the [page:TextureLoader TextureLoader] will automatically\n\t\tet this to [page:Textures THREE.RGBFormat] for JPG images. <br><br>\n\n\t\tSee the [page:Textures texture constants] page for details of other formats."
        },
        "type": {
          "!type": "number",
          "!doc": "This must correspond to the [page:Texture.format .format]. The default is [page:Textures THREE.UnsignedByteType],\n\t\twhich will be used for most texture formats.<br><br>\n\n\t\tSee the [page:Textures texture constants] page for details of other formats."
        },
        "offset": {
          "!type": "+THREE.Vector2",
          "!doc": "How much a single repetition of the texture is offset from the beginning, in each direction U and V.\n\t\tTypical range is *0.0* to *1.0*."
        },
        "repeat": {
          "!type": "+THREE.Vector2",
          "!doc": "How many times the texture is repeated across the surface, in each direction U and V."
        },
        "generateMipmaps": {
          "!type": "boolean",
          "!doc": "Whether to generate mipmaps (if possible) for a texture. True by default. Set this to false if you are\n\t\tcreating mipmaps manually."
        },
        "premultiplyAlpha": {
          "!type": "boolean",
          "!doc": "False by default, which is the norm for PNG images. Set to true if the RGB values have\n\t\tbeen stored premultiplied by alpha."
        },
        "flipY": {
          "!type": "boolean",
          "!doc": "True by default. Flips the image's Y axis to match the WebGL texture coordinate space."
        },
        "unpackAlignment": {
          "!type": "number",
          "!doc": "4 by default. Specifies the alignment requirements for the start of each pixel row in memory.\n\t\tThe allowable values are 1 (byte-alignment), 2 (rows aligned to even-numbered bytes),\n\t\t4 (word-alignment), and 8 (rows start on double-word boundaries).\n\t\tSee <a href=\"http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml\">glPixelStorei</a>\n\t\tfor more information."
        },
        "encoding": {
          "!type": "number",
          "!doc": "[page:Textures THREE.LinearEncoding] is the default.\n\t\tSee the [page:Textures texture constants] page for details of other formats.<br><br>\n\n\t\tNote that ff this value is changed on a texture after the material has been used,\n\t\tit is necessary to trigger a Material.needsUpdate for this value to be realized in the shader."
        },
        "version": {
          "!type": "number",
          "!doc": "This starts at *0* and counts how many times [property:Boolean needsUpdate] is set to *true*."
        },
        "onUpdate": {
          "!type": "function",
          "!doc": "A callback function, called when the texture is updated (e.g., when needsUpdate has been set to true\n\t\tand then the texture is used)."
        },
        "needsUpdate": {
          "!type": "bool",
          "!doc": "Set this to *true* to trigger an update next time the texture is used. Particularly important for setting the wrap mode."
        },
        "clone": {
          "!type": "fn(texture: +THREE.Texture) -> +THREE.Texture",
          "!doc": "Make copy of the texture. Note this is not a \"deep copy\", the image is shared."
        },
        "toJSON": {
          "!type": "fn(meta) -> +THREE.Texture",
          "!doc": "meta -- optional object containing metadata.<br>\n\t\tConvert the material to three.js JSON format."
        },
        "dispose": {
          "!type": "fn()",
          "!doc": "Call [page:EventDispatcher EventDispatcher].dispatchEvent with a 'dispose' event type."
        },
        "transformUv": {
          "!type": "fn(uv)",
          "!doc": "Transform the uv based on the value of this texture's [page:Texture.repeat .repeat], [page:Texture.offset .offset],\n\t\t[page:Texture.wrapS .wrapS], [page:Texture.wrapT .wrapT] and [page:Texture.flipY .flipY] properties."
        }
      },
      "!doc": "Create a texture to apply to a surface or as a reflection or refraction map.",
      "!type": "fn(image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy)"
    },
    "VideoTexture": {
      "!url": "http://threejs.org/docs/#Reference/textures/VideoTexture",
      "prototype": {
        "!proto": "THREE.Texture.prototype",
        "needsUpdate": {
          "!type": "boolean",
          "!doc": "You will not need to set this manually here as it is handled by the [page:VideoTexture.update update] method."
        },
        "update": {
          "!type": "fn()",
          "!doc": "This is called automatically and sets [property:boolean needsUpdate] to *true* every time\n    a new frame is available."
        }
      },
      "!doc": "Creates a texture for use with a video texture.<br><br>\n\n\t\tThis is almost the same as the base [page:Texture Texture] class,\n    except that it continuosly sets [page:Texture.needsUpdate needsUpdate] to *true*\n    (using <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame\">requestAnimationFrame</a>)\n    so that the texture is updated as the video plays. Automatic creation of [page:Texture.mipmaps mipmaps]\n    is also disabled.",
      "!type": "fn(video: Video, mapping: Constant, wrapS: Constant, wrapT: Constant, magFilter: Constant, minFilter: Constant, format: Constant, type: Constant, anisotropy: number)"
    }
  }
}
    };
  });
});