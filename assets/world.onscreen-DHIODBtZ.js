import{t as e}from"./index-CU7HbYkA.js";import{$ as t,A as n,B as r,C as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as g,P as _,Q as v,R as y,S as b,T as x,U as ee,V as S,W as te,X as ne,Y as re,Z as ie,_ as ae,a as C,at as oe,b as se,c as w,ct as T,d as E,dt as D,et as ce,f as O,ft as le,g as ue,h as de,i as k,it as fe,j as pe,k as A,l as me,lt as he,m as ge,mt as _e,n as ve,nt as j,o as ye,ot as be,p as xe,q as Se,r as Ce,rt as we,s as M,st as N,t as Te,tt as Ee,u as De,ut as Oe,v as ke,w as Ae,x as je,y as Me,z as P}from"./Dice-CeAPt0tZ.js";var Ne=Object.defineProperty,Pe=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fe=(e,t,n)=>(Pe(e,typeof t==`symbol`?t:t+``,n),n),Ie=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},F=(e,t,n)=>(Ie(e,t,`read from private field`),n?n.call(e):t.get(e)),I=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},L=(e,t,n,r)=>(Ie(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Le=(e,t,n,r)=>({set _(r){L(e,t,r,n)},get _(){return F(e,t,r)}}),Re=(e,t,n)=>(Ie(e,t,`access private method`),n),ze=class{constructor(e){if(this._keys=[],this._isDirty=!0,this._areLightsDirty=!0,this._areLightsDisposed=!1,this._areAttributesDirty=!0,this._areTexturesDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._arePrePassDirty=!0,this._areImageProcessingDirty=!0,this._normals=!1,this._uvs=!1,this._needNormals=!1,this._needUVs=!1,this._externalProperties=e,e)for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this._setDefaultValue(t)}get isDirty(){return this._isDirty}markAsProcessed(){this._isDirty=!1,this._areAttributesDirty=!1,this._areTexturesDirty=!1,this._areFresnelDirty=!1,this._areLightsDirty=!1,this._areLightsDisposed=!1,this._areMiscDirty=!1,this._arePrePassDirty=!1,this._areImageProcessingDirty=!1}markAsUnprocessed(){this._isDirty=!0}markAllAsDirty(){this._areTexturesDirty=!0,this._areAttributesDirty=!0,this._areLightsDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._areImageProcessingDirty=!0,this._isDirty=!0}markAsImageProcessingDirty(){this._areImageProcessingDirty=!0,this._isDirty=!0}markAsLightDirty(e=!1){this._areLightsDirty=!0,this._areLightsDisposed=this._areLightsDisposed||e,this._isDirty=!0}markAsAttributesDirty(){this._areAttributesDirty=!0,this._isDirty=!0}markAsTexturesDirty(){this._areTexturesDirty=!0,this._isDirty=!0}markAsFresnelDirty(){this._areFresnelDirty=!0,this._isDirty=!0}markAsMiscDirty(){this._areMiscDirty=!0,this._isDirty=!0}markAsPrePassDirty(){this._arePrePassDirty=!0,this._isDirty=!0}rebuild(){this._keys.length=0;for(let e of Object.keys(this))e[0]!==`_`&&this._keys.push(e);if(this._externalProperties)for(let e in this._externalProperties)this._keys.indexOf(e)===-1&&this._keys.push(e)}isEqual(e){if(this._keys.length!==e._keys.length)return!1;for(let t=0;t<this._keys.length;t++){let n=this._keys[t];if(this[n]!==e[n])return!1}return!0}cloneTo(e){this._keys.length!==e._keys.length&&(e._keys=this._keys.slice(0));for(let t=0;t<this._keys.length;t++){let n=this._keys[t];e[n]=this[n]}}reset(){this._keys.forEach(e=>this._setDefaultValue(e))}_setDefaultValue(e){let t=this._externalProperties?.[e]?.type??typeof this[e],n=this._externalProperties?.[e]?.default;switch(t){case`number`:this[e]=n??0;break;case`string`:this[e]=n??``;break;default:this[e]=n??!1}}toString(){let e=``;for(let t=0;t<this._keys.length;t++){let n=this._keys[t],r=this[n];switch(typeof r){case`number`:case`string`:e+=`#define `+n+` `+r+`
`;break;default:r&&(e+=`#define `+n+`
`)}}return e}};function Be(e){return new o(e,!0,{preserveDrawingBuffer:!0,stencil:!0})}var Ve=class{getDescription(){return``}apply(e,t){return!0}constructor(e=0){this.priority=e}},He=class extends Ve{getDescription(){return`Reducing render target texture size to `+this.maximumSize}constructor(e=0,t=1024,n=.5){super(e),this.priority=e,this.maximumSize=t,this.step=n}apply(e,t){let n=!0;for(let t=0;t<e.textures.length;t++){let r=e.textures[t];if(!r.canRescale||r.getContext)continue;let i=r.getSize();Math.max(i.width,i.height)>this.maximumSize&&(r.scale(this.step),n=!1)}return n}},Ue=class extends Ve{getDescription(){return`Setting hardware scaling level to `+this._currentScale}constructor(e=0,t=2,n=.25){super(e),this.priority=e,this.maximumScale=t,this.step=n,this._currentScale=-1,this._directionOffset=1}apply(e,t){return this._currentScale===-1&&(this._currentScale=e.getEngine().getHardwareScalingLevel(),this._currentScale>this.maximumScale&&(this._directionOffset=-1)),this._currentScale+=this._directionOffset*this.step,e.getEngine().setHardwareScalingLevel(this._currentScale),this._directionOffset===1?this._currentScale>=this.maximumScale:this._currentScale<=this.maximumScale}},We=class extends Ve{getDescription(){return`Turning shadows on/off`}apply(e,t){return e.shadowsEnabled=t.isInImprovementMode,!0}},Ge=class extends Ve{getDescription(){return`Turning post-processes on/off`}apply(e,t){return e.postProcessesEnabled=t.isInImprovementMode,!0}},Ke=class extends Ve{getDescription(){return`Turning lens flares on/off`}apply(e,t){return e.lensFlaresEnabled=t.isInImprovementMode,!0}},qe=class extends Ve{getDescription(){return this.onGetDescription?this.onGetDescription():`Running user defined callback`}apply(e,t){return!this.onApply||this.onApply(e,t)}},Je=class extends Ve{getDescription(){return`Turning particles on/off`}apply(e,t){return e.particlesEnabled=t.isInImprovementMode,!0}},Ye=class extends Ve{getDescription(){return`Turning render targets off`}apply(e,t){return e.renderTargetsEnabled=t.isInImprovementMode,!0}},Xe=class e extends Ve{constructor(){super(...arguments),this._canBeMerged=e=>{if(!(e instanceof h))return!1;let t=e;return!(t.isDisposed()||!t.isVisible||!t.isEnabled()||t.instances.length>0||t.skeleton||t.hasLODLevels||t.getTotalVertices()===0)}}static get UpdateSelectionTree(){return e._UpdateSelectionTree}static set UpdateSelectionTree(t){e._UpdateSelectionTree=t}getDescription(){return`Merging similar meshes together`}apply(t,n,r){let i=t.meshes.slice(0),a=i.length;for(let e=0;e<a;e++){let t=[],n=i[e];if(this._canBeMerged(n)){t.push(n);for(let r=e+1;r<a;r++){let e=i[r];this._canBeMerged(e)&&e.material===n.material&&e.checkCollisions===n.checkCollisions&&(t.push(e),a--,i.splice(r,1),r--)}t.length<2||h.MergeMeshes(t,void 0,!0)}}let o=t;return o.createOrUpdateSelectionOctree&&(r==null?e.UpdateSelectionTree&&o.createOrUpdateSelectionOctree():r&&o.createOrUpdateSelectionOctree()),!0}};Xe._UpdateSelectionTree=!1;var Ze=class e{constructor(e=60,t=2e3){this.targetFrameRate=e,this.trackerDuration=t,this.optimizations=[]}addOptimization(e){return this.optimizations.push(e),this}addCustomOptimization(e,t,n=0){let r=new qe(n);return r.onApply=e,r.onGetDescription=t,this.optimizations.push(r),this}static LowDegradationAllowed(t){let n=new e(t),r=0;return n.addOptimization(new Xe(r)),n.addOptimization(new We(r)),n.addOptimization(new Ke(r)),r++,n.addOptimization(new Ge(r)),n.addOptimization(new Je(r)),r++,n.addOptimization(new He(r,1024)),n}static ModerateDegradationAllowed(t){let n=new e(t),r=0;return n.addOptimization(new Xe(r)),n.addOptimization(new We(r)),n.addOptimization(new Ke(r)),r++,n.addOptimization(new Ge(r)),n.addOptimization(new Je(r)),r++,n.addOptimization(new He(r,512)),r++,n.addOptimization(new Ye(r)),r++,n.addOptimization(new Ue(r,2)),n}static HighDegradationAllowed(t){let n=new e(t),r=0;return n.addOptimization(new Xe(r)),n.addOptimization(new We(r)),n.addOptimization(new Ke(r)),r++,n.addOptimization(new Ge(r)),n.addOptimization(new Je(r)),r++,n.addOptimization(new He(r,256)),r++,n.addOptimization(new Ye(r)),r++,n.addOptimization(new Ue(r,4)),n}},Qe=class e{get isInImprovementMode(){return this._improvementMode}set isInImprovementMode(e){this._improvementMode=e}get currentPriorityLevel(){return this._currentPriorityLevel}get currentFrameRate(){return this._currentFrameRate}get targetFrameRate(){return this._targetFrameRate}set targetFrameRate(e){this._targetFrameRate=e}get trackerDuration(){return this._trackerDuration}set trackerDuration(e){this._trackerDuration=e}get optimizations(){return this._options.optimizations}constructor(e,t,n=!0,r=!1){if(this._isRunning=!1,this._currentPriorityLevel=0,this._targetFrameRate=60,this._trackerDuration=2e3,this._currentFrameRate=0,this._improvementMode=!1,this.onSuccessObservable=new D,this.onNewOptimizationAppliedObservable=new D,this.onFailureObservable=new D,this._options=t||new Ze,this._options.targetFrameRate&&(this._targetFrameRate=this._options.targetFrameRate),this._options.trackerDuration&&(this._trackerDuration=this._options.trackerDuration),n){let e=0;for(let t of this._options.optimizations)t.priority=e++}this._improvementMode=r,this._scene=e||ae.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(()=>{this._sceneDisposeObserver=null,this.dispose()})}stop(){this._isRunning=!1}reset(){this._currentPriorityLevel=0}start(){this._isRunning||(this._isRunning=!0,this._scene.executeWhenReady(()=>{setTimeout(()=>{this._checkCurrentState()},this._trackerDuration)}))}_checkCurrentState(){if(!this._isRunning)return;let e=this._scene,t=this._options;if(this._currentFrameRate=Math.round(e.getEngine().getFps()),this._improvementMode&&this._currentFrameRate<=this._targetFrameRate||!this._improvementMode&&this._currentFrameRate>=this._targetFrameRate){this._isRunning=!1,this.onSuccessObservable.notifyObservers(this);return}let n=!0,r=!0;for(let i=0;i<t.optimizations.length;i++){let a=t.optimizations[i];a.priority===this._currentPriorityLevel&&(r=!1,n&&=a.apply(e,this),this.onNewOptimizationAppliedObservable.notifyObservers(a))}if(r){this._isRunning=!1,this.onFailureObservable.notifyObservers(this);return}n&&this._currentPriorityLevel++,e.executeWhenReady(()=>{setTimeout(()=>{this._checkCurrentState()},this._trackerDuration)})}dispose(){this.stop(),this.onSuccessObservable.clear(),this.onFailureObservable.clear(),this.onNewOptimizationAppliedObservable.clear(),this._sceneDisposeObserver&&this._scene.onDisposeObservable.remove(this._sceneDisposeObserver)}static OptimizeAsync(t,n,r,i){let a=new e(t,n||Ze.ModerateDegradationAllowed(),!1);return r&&a.onSuccessObservable.add(()=>{r()}),i&&a.onFailureObservable.add(()=>{i()}),a.start(),a}};function $e(e){let{engine:t}=e,n=new g(t);n.clearColor=new Ae(0,0,0,0),n.pointerMovePredicate=()=>!1,n.pointerDownPredicate=()=>!1,n.pointerUpPredicate=()=>!1,n.clearCachedVertexData(),n.themeData={};let r=Ze.LowDegradationAllowed();return r.optimizations=r.optimizations.splice(1),r.targetFrameRate=60,Qe.OptimizeAsync(n,r),n}var et=class e extends P{constructor(e,t,n,r=!0){super(e,t,n,r),this._tmpUpVector=j.Zero(),this._tmpTargetVector=j.Zero(),this.cameraDirection=new j(0,0,0),this.cameraRotation=new ie(0,0),this.ignoreParentScaling=!1,this.updateUpVectorFromRotation=!1,this._tmpQuaternion=new u,this.rotation=new j(0,0,0),this.speed=2,this.noRotationConstraint=!1,this.invertRotation=!1,this.inverseRotationSpeed=.2,this.lockedTarget=null,this._currentTarget=j.Zero(),this._initialFocalDistance=1,this._viewMatrix=A.Zero(),this._camMatrix=A.Zero(),this._cameraTransformMatrix=A.Zero(),this._cameraRotationMatrix=A.Zero(),this._referencePoint=new j(0,0,1),this._transformedReferencePoint=j.Zero(),this._defaultUp=j.Up(),this._cachedRotationZ=0,this._cachedQuaternionRotationZ=0}getFrontPosition(e){this.getWorldMatrix();let t=this.getTarget().subtract(this.position);return t.normalize(),t.scaleInPlace(e),this.globalPosition.add(t)}_getLockedTargetPosition(){if(!this.lockedTarget)return null;if(this.lockedTarget.absolutePosition){let e=this.lockedTarget;e.computeWorldMatrix().getTranslationToRef(e.absolutePosition)}return this.lockedTarget.absolutePosition||this.lockedTarget}storeState(){return this._storedPosition=this.position.clone(),this._storedRotation=this.rotation.clone(),this.rotationQuaternion&&(this._storedRotationQuaternion=this.rotationQuaternion.clone()),super.storeState()}_restoreStateValues(){return super._restoreStateValues()?(this.position=this._storedPosition.clone(),this.rotation=this._storedRotation.clone(),this.rotationQuaternion&&=this._storedRotationQuaternion.clone(),this.cameraDirection.copyFromFloats(0,0,0),this.cameraRotation.copyFromFloats(0,0),!0):!1}_initCache(){super._initCache(),this._cache.lockedTarget=new j(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotation=new j(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotationQuaternion=new u(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}_updateCache(e){e||super._updateCache();let t=this._getLockedTargetPosition();t?this._cache.lockedTarget?this._cache.lockedTarget.copyFrom(t):this._cache.lockedTarget=t.clone():this._cache.lockedTarget=null,this._cache.rotation.copyFrom(this.rotation),this.rotationQuaternion&&this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)}_isSynchronizedViewMatrix(){if(!super._isSynchronizedViewMatrix())return!1;let e=this._getLockedTargetPosition();return(this._cache.lockedTarget?this._cache.lockedTarget.equals(e):!e)&&(this.rotationQuaternion?this.rotationQuaternion.equals(this._cache.rotationQuaternion):this._cache.rotation.equals(this.rotation))}_computeLocalCameraSpeed(){let e=this.getEngine();return this.speed*Math.sqrt(e.getDeltaTime()/(e.getFps()*100))}setTarget(e){this.upVector.normalize(),this._initialFocalDistance=e.subtract(this.position).length(),this.position.z===e.z&&(this.position.z+=.001),this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance),A.LookAtLHToRef(this.position,e,this._defaultUp,this._camMatrix),this._camMatrix.invert(),this.rotation.x=Math.atan(this._camMatrix.m[6]/this._camMatrix.m[10]);let t=e.subtract(this.position);t.x>=0?this.rotation.y=-Math.atan(t.z/t.x)+Math.PI/2:this.rotation.y=-Math.atan(t.z/t.x)-Math.PI/2,this.rotation.z=0,isNaN(this.rotation.x)&&(this.rotation.x=0),isNaN(this.rotation.y)&&(this.rotation.y=0),isNaN(this.rotation.z)&&(this.rotation.z=0),this.rotationQuaternion&&u.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)}get target(){return this.getTarget()}set target(e){this.setTarget(e)}getTarget(){return this._currentTarget}_decideIfNeedsToMove(){return Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0}_updatePosition(){if(this.parent){this.parent.getWorldMatrix().invertToRef(w.Matrix[0]),j.TransformNormalToRef(this.cameraDirection,w.Matrix[0],w.Vector3[0]),this.position.addInPlace(w.Vector3[0]);return}this.position.addInPlace(this.cameraDirection)}_checkInputs(){let e=this.invertRotation?-this.inverseRotationSpeed:1,t=this._decideIfNeedsToMove(),n=Math.abs(this.cameraRotation.x)>0||Math.abs(this.cameraRotation.y)>0;t&&this._updatePosition(),n&&(this.rotationQuaternion&&this.rotationQuaternion.toEulerAnglesToRef(this.rotation),this.rotation.x+=this.cameraRotation.x*e,this.rotation.y+=this.cameraRotation.y*e,this.noRotationConstraint||(this.rotation.x>1.570796&&(this.rotation.x=1.570796),this.rotation.x<-1.570796&&(this.rotation.x=-1.570796)),this.rotationQuaternion&&this.rotation.lengthSquared()&&u.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)),t&&(Math.abs(this.cameraDirection.x)<this.speed*.001&&(this.cameraDirection.x=0),Math.abs(this.cameraDirection.y)<this.speed*.001&&(this.cameraDirection.y=0),Math.abs(this.cameraDirection.z)<this.speed*.001&&(this.cameraDirection.z=0),this.cameraDirection.scaleInPlace(this.inertia)),n&&(Math.abs(this.cameraRotation.x)<this.speed*.001&&(this.cameraRotation.x=0),Math.abs(this.cameraRotation.y)<this.speed*.001&&(this.cameraRotation.y=0),this.cameraRotation.scaleInPlace(this.inertia)),super._checkInputs()}_updateCameraRotationMatrix(){this.rotationQuaternion?this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix):A.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._cameraRotationMatrix)}_rotateUpVectorWithCameraRotationMatrix(){return j.TransformNormalToRef(this._defaultUp,this._cameraRotationMatrix,this.upVector),this}_getViewMatrix(){return this.lockedTarget&&this.setTarget(this._getLockedTargetPosition()),this._updateCameraRotationMatrix(),this.rotationQuaternion&&this._cachedQuaternionRotationZ!=this.rotationQuaternion.z?(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedQuaternionRotationZ=this.rotationQuaternion.z):this._cachedRotationZ!==this.rotation.z&&(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedRotationZ=this.rotation.z),j.TransformCoordinatesToRef(this._referencePoint,this._cameraRotationMatrix,this._transformedReferencePoint),this.position.addToRef(this._transformedReferencePoint,this._currentTarget),this.updateUpVectorFromRotation&&(this.rotationQuaternion?l.Y.rotateByQuaternionToRef(this.rotationQuaternion,this.upVector):(u.FromEulerVectorToRef(this.rotation,this._tmpQuaternion),l.Y.rotateByQuaternionToRef(this._tmpQuaternion,this.upVector))),this._computeViewMatrix(this.position,this._currentTarget,this.upVector),this._viewMatrix}_computeViewMatrix(e,t,n){if(this.ignoreParentScaling){if(this.parent){let r=this.parent.getWorldMatrix();j.TransformCoordinatesToRef(e,r,this._globalPosition),j.TransformCoordinatesToRef(t,r,this._tmpTargetVector),j.TransformNormalToRef(n,r,this._tmpUpVector),this._markSyncedWithParent()}else this._globalPosition.copyFrom(e),this._tmpTargetVector.copyFrom(t),this._tmpUpVector.copyFrom(n);this.getScene().useRightHandedSystem?A.LookAtRHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix):A.LookAtLHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix);return}if(this.getScene().useRightHandedSystem?A.LookAtRHToRef(e,t,n,this._viewMatrix):A.LookAtLHToRef(e,t,n,this._viewMatrix),this.parent){let e=this.parent.getWorldMatrix();this._viewMatrix.invert(),this._viewMatrix.multiplyToRef(e,this._viewMatrix),this._viewMatrix.getTranslationToRef(this._globalPosition),this._viewMatrix.invert(),this._markSyncedWithParent()}else this._globalPosition.copyFrom(e)}createRigCamera(t,n){if(this.cameraRigMode!==P.RIG_MODE_NONE){let n=new e(t,this.position.clone(),this.getScene());return n.isRigCamera=!0,n.rigParent=this,(this.cameraRigMode===P.RIG_MODE_VR||this.cameraRigMode===P.RIG_MODE_WEBVR)&&(this.rotationQuaternion||=new u,n._cameraRigParams={},n.rotationQuaternion=new u),n.mode=this.mode,n.orthoLeft=this.orthoLeft,n.orthoRight=this.orthoRight,n.orthoTop=this.orthoTop,n.orthoBottom=this.orthoBottom,n}return null}_updateRigCameras(){let e=this._rigCameras[0],t=this._rigCameras[1];switch(this.computeWorldMatrix(),this.cameraRigMode){case P.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case P.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case P.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:case P.RIG_MODE_STEREOSCOPIC_OVERUNDER:case P.RIG_MODE_STEREOSCOPIC_INTERLACED:{let n=this.cameraRigMode===P.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?1:-1,r=this.cameraRigMode===P.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?-1:1;this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*n,e),this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*r,t);break}case P.RIG_MODE_VR:e.rotationQuaternion?(e.rotationQuaternion.copyFrom(this.rotationQuaternion),t.rotationQuaternion.copyFrom(this.rotationQuaternion)):(e.rotation.copyFrom(this.rotation),t.rotation.copyFrom(this.rotation)),e.position.copyFrom(this.position),t.position.copyFrom(this.position)}super._updateRigCameras()}_getRigCamPositionAndTarget(t,n){this.getTarget().subtractToRef(this.position,e._TargetFocalPoint),e._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);let r=e._TargetFocalPoint.addInPlace(this.position);A.TranslationToRef(-r.x,-r.y,-r.z,e._TargetTransformMatrix),e._TargetTransformMatrix.multiplyToRef(A.RotationAxis(n.upVector,t),e._RigCamTransformMatrix),A.TranslationToRef(r.x,r.y,r.z,e._TargetTransformMatrix),e._RigCamTransformMatrix.multiplyToRef(e._TargetTransformMatrix,e._RigCamTransformMatrix),j.TransformCoordinatesToRef(this.position,e._RigCamTransformMatrix,n.position),n.setTarget(r)}getClassName(){return`TargetCamera`}};et._RigCamTransformMatrix=new A,et._TargetTransformMatrix=new A,et._TargetFocalPoint=new j,E([ge()],et.prototype,`rotation`,void 0),E([k()],et.prototype,`speed`,void 0),E([se(`lockedTargetId`)],et.prototype,`lockedTarget`,void 0);function tt(e){let{scene:t}=e,n;return n=new et(`TargetCamera1`,new j(0,36.5,0),t),n.fov=.25,n.minZ=5,n.maxZ=37.5,n.setTarget(j.Zero()),n}var R=class e extends je{get range(){return this._range}set range(e){this._range=e,this._inverseSquaredRange=1/(this.range*this.range)}get intensityMode(){return this._intensityMode}set intensityMode(e){this._intensityMode=e,this._computePhotometricScale()}get radius(){return this._radius}set radius(e){this._radius=e,this._computePhotometricScale()}get shadowEnabled(){return this._shadowEnabled}set shadowEnabled(e){this._shadowEnabled!==e&&(this._shadowEnabled=e,this._markMeshesAsLightDirty())}get includedOnlyMeshes(){return this._includedOnlyMeshes}set includedOnlyMeshes(e){this._includedOnlyMeshes=e,this._hookArrayForIncludedOnly(e)}get excludedMeshes(){return this._excludedMeshes}set excludedMeshes(e){this._excludedMeshes=e,this._hookArrayForExcluded(e)}get excludeWithLayerMask(){return this._excludeWithLayerMask}set excludeWithLayerMask(e){this._excludeWithLayerMask=e,this._resyncMeshes()}get includeOnlyWithLayerMask(){return this._includeOnlyWithLayerMask}set includeOnlyWithLayerMask(e){this._includeOnlyWithLayerMask=e,this._resyncMeshes()}get lightmapMode(){return this._lightmapMode}set lightmapMode(e){this._lightmapMode!==e&&(this._lightmapMode=e,this._markMeshesAsLightDirty())}constructor(t,n){super(t,n),this.diffuse=new N(1,1,1),this.specular=new N(1,1,1),this.falloffType=e.FALLOFF_DEFAULT,this.intensity=1,this._range=Number.MAX_VALUE,this._inverseSquaredRange=0,this._photometricScale=1,this._intensityMode=e.INTENSITYMODE_AUTOMATIC,this._radius=1e-5,this.renderPriority=0,this._shadowEnabled=!0,this._excludeWithLayerMask=0,this._includeOnlyWithLayerMask=0,this._lightmapMode=0,this._shadowGenerators=null,this._excludedMeshesIds=[],this._includedOnlyMeshesIds=[],this._isLight=!0,this.getScene().addLight(this),this._uniformBuffer=new i(this.getScene().getEngine(),void 0,void 0,t),this._buildUniformLayout(),this.includedOnlyMeshes=[],this.excludedMeshes=[],this._resyncMeshes()}transferTexturesToEffect(e,t){return this}_bindLight(e,t,n,r,i=!0){let a=e.toString(),o=!1;if(this._uniformBuffer.bindToEffect(n,`Light`+a),this._renderId!==t.getRenderId()||this._lastUseSpecular!==r||!this._uniformBuffer.useUbo){this._renderId=t.getRenderId(),this._lastUseSpecular=r;let e=this.getScaledIntensity();this.transferToEffect(n,a),this.diffuse.scaleToRef(e,he.Color3[0]),this._uniformBuffer.updateColor4(`vLightDiffuse`,he.Color3[0],this.range,a),r&&(this.specular.scaleToRef(e,he.Color3[1]),this._uniformBuffer.updateColor4(`vLightSpecular`,he.Color3[1],this.radius,a)),o=!0}if(this.transferTexturesToEffect(n,a),t.shadowsEnabled&&this.shadowEnabled&&i){let e=this.getShadowGenerator(t.activeCamera)??this.getShadowGenerator();e&&(e.bindShadowLight(a,n),o=!0)}o?this._uniformBuffer.update():this._uniformBuffer.bindUniformBuffer()}getClassName(){return`Light`}toString(e){let t=`Name: `+this.name;if(t+=`, type: `+[`Point`,`Directional`,`Spot`,`Hemispheric`][this.getTypeID()],this.animations)for(let n=0;n<this.animations.length;n++)t+=`, animation[0]: `+this.animations[n].toString(e);return t}_syncParentEnabledState(){super._syncParentEnabledState(),this.isDisposed()||this._resyncMeshes()}setEnabled(e){super.setEnabled(e),this._resyncMeshes()}getShadowGenerator(e=null){return this._shadowGenerators===null?null:this._shadowGenerators.get(e)??null}getShadowGenerators(){return this._shadowGenerators}getAbsolutePosition(){return j.Zero()}canAffectMesh(e){return!e||!(this.includedOnlyMeshes&&this.includedOnlyMeshes.length>0&&this.includedOnlyMeshes.indexOf(e)===-1||this.excludedMeshes&&this.excludedMeshes.length>0&&this.excludedMeshes.indexOf(e)!==-1||this.includeOnlyWithLayerMask!==0&&!(this.includeOnlyWithLayerMask&e.layerMask)||this.excludeWithLayerMask!==0&&this.excludeWithLayerMask&e.layerMask)}dispose(e,t=!1){if(this._shadowGenerators){let e=this._shadowGenerators.values();for(let t=e.next();t.done!==!0;t=e.next())t.value.dispose();this._shadowGenerators=null}if(this.getScene().stopAnimation(this),this._parentContainer){let e=this._parentContainer.lights.indexOf(this);e>-1&&this._parentContainer.lights.splice(e,1),this._parentContainer=null}for(let e of this.getScene().meshes)e._removeLightSource(this,!0);this._uniformBuffer.dispose(),this.getScene().removeLight(this),super.dispose(e,t)}getTypeID(){return 0}getScaledIntensity(){return this._photometricScale*this.intensity}clone(t,n=null){let r=e.GetConstructorFromName(this.getTypeID(),t,this.getScene());if(!r)return null;let i=f.Clone(r,this);return t&&(i.name=t),n&&(i.parent=n),i.setEnabled(this.isEnabled()),this.onClonedObservable.notifyObservers(i),i}serialize(){let e=f.Serialize(this);return e.uniqueId=this.uniqueId,e.type=this.getTypeID(),this.parent&&this.parent._serializeAsParent(e),this.excludedMeshes.length>0&&(e.excludedMeshesIds=[],this.excludedMeshes.forEach(t=>{e.excludedMeshesIds.push(t.id)})),this.includedOnlyMeshes.length>0&&(e.includedOnlyMeshesIds=[],this.includedOnlyMeshes.forEach(t=>{e.includedOnlyMeshesIds.push(t.id)})),f.AppendSerializedAnimations(this,e),e.ranges=this.serializeAnimationRanges(),e.isEnabled=this.isEnabled(),e}static GetConstructorFromName(e,t,n){return je.Construct(`Light_Type_`+e,t,n)||null}static Parse(t,n){let r=e.GetConstructorFromName(t.type,t.name,n);if(!r)return null;let i=f.Parse(r,t,n);if(t.excludedMeshesIds&&(i._excludedMeshesIds=t.excludedMeshesIds),t.includedOnlyMeshesIds&&(i._includedOnlyMeshesIds=t.includedOnlyMeshesIds),t.parentId!==void 0&&(i._waitingParentId=t.parentId),t.parentInstanceIndex!==void 0&&(i._waitingParentInstanceIndex=t.parentInstanceIndex),t.falloffType!==void 0&&(i.falloffType=t.falloffType),t.lightmapMode!==void 0&&(i.lightmapMode=t.lightmapMode),t.animations){for(let e=0;e<t.animations.length;e++){let n=t.animations[e],r=Se(`BABYLON.Animation`);r&&i.animations.push(r.Parse(n))}je.ParseAnimationRanges(i,t,n)}return t.autoAnimate&&n.beginAnimation(i,t.autoAnimateFrom,t.autoAnimateTo,t.autoAnimateLoop,t.autoAnimateSpeed||1),t.isEnabled!==void 0&&i.setEnabled(t.isEnabled),i}_hookArrayForExcluded(e){let t=e.push;e.push=(...n)=>{let r=t.apply(e,n);for(let e of n)e._resyncLightSource(this);return r};let n=e.splice;e.splice=(t,r)=>{let i=n.apply(e,[t,r]);for(let e of i)e._resyncLightSource(this);return i};for(let t of e)t._resyncLightSource(this)}_hookArrayForIncludedOnly(e){let t=e.push;e.push=(...n)=>{let r=t.apply(e,n);return this._resyncMeshes(),r};let n=e.splice;e.splice=(t,r)=>{let i=n.apply(e,[t,r]);return this._resyncMeshes(),i},this._resyncMeshes()}_resyncMeshes(){for(let e of this.getScene().meshes)e._resyncLightSource(this)}_markMeshesAsLightDirty(){for(let e of this.getScene().meshes)e.lightSources.indexOf(this)!==-1&&e._markSubMeshesAsLightDirty()}_computePhotometricScale(){this._photometricScale=this._getPhotometricScale(),this.getScene().resetCachedMaterial()}_getPhotometricScale(){let t=0,n=this.getTypeID(),r=this.intensityMode;switch(r===e.INTENSITYMODE_AUTOMATIC&&(r=n===e.LIGHTTYPEID_DIRECTIONALLIGHT?e.INTENSITYMODE_ILLUMINANCE:e.INTENSITYMODE_LUMINOUSINTENSITY),n){case e.LIGHTTYPEID_POINTLIGHT:case e.LIGHTTYPEID_SPOTLIGHT:switch(r){case e.INTENSITYMODE_LUMINOUSPOWER:t=1/(4*Math.PI);break;case e.INTENSITYMODE_LUMINOUSINTENSITY:t=1;break;case e.INTENSITYMODE_LUMINANCE:t=this.radius*this.radius}break;case e.LIGHTTYPEID_DIRECTIONALLIGHT:switch(r){case e.INTENSITYMODE_ILLUMINANCE:t=1;break;case e.INTENSITYMODE_LUMINANCE:{let e=this.radius;e=Math.max(e,.001),t=2*Math.PI*(1-Math.cos(e));break}}break;case e.LIGHTTYPEID_HEMISPHERICLIGHT:t=1}return t}_reorderLightsInScene(){let e=this.getScene();this._renderPriority!=0&&(e.requireLightSorting=!0),this.getScene().sortLightsByPriority()}};R.FALLOFF_DEFAULT=v.FALLOFF_DEFAULT,R.FALLOFF_PHYSICAL=v.FALLOFF_PHYSICAL,R.FALLOFF_GLTF=v.FALLOFF_GLTF,R.FALLOFF_STANDARD=v.FALLOFF_STANDARD,R.LIGHTMAP_DEFAULT=v.LIGHTMAP_DEFAULT,R.LIGHTMAP_SPECULAR=v.LIGHTMAP_SPECULAR,R.LIGHTMAP_SHADOWSONLY=v.LIGHTMAP_SHADOWSONLY,R.INTENSITYMODE_AUTOMATIC=v.INTENSITYMODE_AUTOMATIC,R.INTENSITYMODE_LUMINOUSPOWER=v.INTENSITYMODE_LUMINOUSPOWER,R.INTENSITYMODE_LUMINOUSINTENSITY=v.INTENSITYMODE_LUMINOUSINTENSITY,R.INTENSITYMODE_ILLUMINANCE=v.INTENSITYMODE_ILLUMINANCE,R.INTENSITYMODE_LUMINANCE=v.INTENSITYMODE_LUMINANCE,R.LIGHTTYPEID_POINTLIGHT=v.LIGHTTYPEID_POINTLIGHT,R.LIGHTTYPEID_DIRECTIONALLIGHT=v.LIGHTTYPEID_DIRECTIONALLIGHT,R.LIGHTTYPEID_SPOTLIGHT=v.LIGHTTYPEID_SPOTLIGHT,R.LIGHTTYPEID_HEMISPHERICLIGHT=v.LIGHTTYPEID_HEMISPHERICLIGHT,E([le()],R.prototype,`diffuse`,void 0),E([le()],R.prototype,`specular`,void 0),E([k()],R.prototype,`falloffType`,void 0),E([k()],R.prototype,`intensity`,void 0),E([k()],R.prototype,`range`,null),E([k()],R.prototype,`intensityMode`,null),E([k()],R.prototype,`radius`,null),E([k()],R.prototype,`_renderPriority`,void 0),E([O(`_reorderLightsInScene`)],R.prototype,`renderPriority`,void 0),E([k(`shadowEnabled`)],R.prototype,`_shadowEnabled`,void 0),E([k(`excludeWithLayerMask`)],R.prototype,`_excludeWithLayerMask`,void 0),E([k(`includeOnlyWithLayerMask`)],R.prototype,`_includeOnlyWithLayerMask`,void 0),E([k(`lightmapMode`)],R.prototype,`_lightmapMode`,void 0);var nt=class extends R{constructor(){super(...arguments),this._needProjectionMatrixCompute=!0}_setPosition(e){this._position=e}get position(){return this._position}set position(e){this._setPosition(e)}_setDirection(e){this._direction=e}get direction(){return this._direction}set direction(e){this._setDirection(e)}get shadowMinZ(){return this._shadowMinZ}set shadowMinZ(e){this._shadowMinZ=e,this.forceProjectionMatrixCompute()}get shadowMaxZ(){return this._shadowMaxZ}set shadowMaxZ(e){this._shadowMaxZ=e,this.forceProjectionMatrixCompute()}computeTransformedInformation(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||=j.Zero(),j.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||=j.Zero(),j.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1}getDepthScale(){return 50}getShadowDirection(e){return this.transformedDirection?this.transformedDirection:this.direction}getAbsolutePosition(){return this.transformedPosition?this.transformedPosition:this.position}setDirectionToTarget(e){return this.direction=j.Normalize(e.subtract(this.position)),this.direction}getRotation(){this.direction.normalize();let e=j.Cross(this.direction,l.Y),t=j.Cross(e,this.direction);return j.RotationFromAxis(e,t,this.direction)}needCube(){return!1}needProjectionMatrixCompute(){return this._needProjectionMatrixCompute}forceProjectionMatrixCompute(){this._needProjectionMatrixCompute=!0}_initCache(){super._initCache(),this._cache.position=j.Zero()}_isSynchronized(){return!!this._cache.position.equals(this.position)}computeWorldMatrix(e){return!e&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||=A.Identity(),A.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)}getDepthMinZ(e){return this.shadowMinZ===void 0?e.minZ:this.shadowMinZ}getDepthMaxZ(e){return this.shadowMaxZ===void 0?e.maxZ:this.shadowMaxZ}setShadowProjectionMatrix(e,t,n){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(t,n,e):this._setDefaultShadowProjectionMatrix(e,t,n),this}_syncParentEnabledState(){super._syncParentEnabledState(),(!this.parent||!this.parent.getWorldMatrix)&&(this.transformedPosition=null,this.transformedDirection=null)}};E([ge()],nt.prototype,`position`,null),E([ge()],nt.prototype,`direction`,null),E([k()],nt.prototype,`shadowMinZ`,null),E([k()],nt.prototype,`shadowMaxZ`,null),je.AddNodeConstructor(`Light_Type_1`,(e,t)=>()=>new z(e,j.Zero(),t));var z=class extends nt{get shadowFrustumSize(){return this._shadowFrustumSize}set shadowFrustumSize(e){this._shadowFrustumSize=e,this.forceProjectionMatrixCompute()}get shadowOrthoScale(){return this._shadowOrthoScale}set shadowOrthoScale(e){this._shadowOrthoScale=e,this.forceProjectionMatrixCompute()}get orthoLeft(){return this._orthoLeft}set orthoLeft(e){this._orthoLeft=e}get orthoRight(){return this._orthoRight}set orthoRight(e){this._orthoRight=e}get orthoTop(){return this._orthoTop}set orthoTop(e){this._orthoTop=e}get orthoBottom(){return this._orthoBottom}set orthoBottom(e){this._orthoBottom=e}constructor(e,t,n){super(e,n),this._shadowFrustumSize=0,this._shadowOrthoScale=.1,this.autoUpdateExtends=!0,this.autoCalcShadowZBounds=!1,this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE,this.position=t.scale(-1),this.direction=t}getClassName(){return`DirectionalLight`}getTypeID(){return R.LIGHTTYPEID_DIRECTIONALLIGHT}_setDefaultShadowProjectionMatrix(e,t,n){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(e):this._setDefaultAutoExtendShadowProjectionMatrix(e,t,n)}_setDefaultFixedFrustumShadowProjectionMatrix(e){let t=this.getScene().activeCamera;t&&A.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ===void 0?t.minZ:this.shadowMinZ,this.shadowMaxZ===void 0?t.maxZ:this.shadowMaxZ,e,this.getScene().getEngine().isNDCHalfZRange)}_setDefaultAutoExtendShadowProjectionMatrix(e,t,n){let r=this.getScene().activeCamera;if(!r)return;if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){let e=j.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;let r=Number.MAX_VALUE,i=Number.MIN_VALUE;for(let a=0;a<n.length;a++){let o=n[a];if(!o)continue;let s=o.getBoundingInfo().boundingBox;for(let n=0;n<s.vectorsWorld.length;n++)j.TransformCoordinatesToRef(s.vectorsWorld[n],t,e),e.x<this._orthoLeft&&(this._orthoLeft=e.x),e.y<this._orthoBottom&&(this._orthoBottom=e.y),e.x>this._orthoRight&&(this._orthoRight=e.x),e.y>this._orthoTop&&(this._orthoTop=e.y),this.autoCalcShadowZBounds&&(e.z<r&&(r=e.z),e.z>i&&(i=e.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=r,this._shadowMaxZ=i)}let i=this._orthoRight-this._orthoLeft,a=this._orthoTop-this._orthoBottom,o=this.shadowMinZ===void 0?r.minZ:this.shadowMinZ,s=this.shadowMaxZ===void 0?r.maxZ:this.shadowMaxZ,c=this.getScene().getEngine().useReverseDepthBuffer;A.OrthoOffCenterLHToRef(this._orthoLeft-i*this.shadowOrthoScale,this._orthoRight+i*this.shadowOrthoScale,this._orthoBottom-a*this.shadowOrthoScale,this._orthoTop+a*this.shadowOrthoScale,c?s:o,c?o:s,e,this.getScene().getEngine().isNDCHalfZRange)}_buildUniformLayout(){this._uniformBuffer.addUniform(`vLightData`,4),this._uniformBuffer.addUniform(`vLightDiffuse`,4),this._uniformBuffer.addUniform(`vLightSpecular`,4),this._uniformBuffer.addUniform(`shadowsInfo`,3),this._uniformBuffer.addUniform(`depthValues`,2),this._uniformBuffer.create()}transferToEffect(e,t){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4(`vLightData`,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,t),this):(this._uniformBuffer.updateFloat4(`vLightData`,this.direction.x,this.direction.y,this.direction.z,1,t),this)}transferToNodeMaterialEffect(e,t){return this.computeTransformedInformation()?(e.setFloat3(t,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(e.setFloat3(t,this.direction.x,this.direction.y,this.direction.z),this)}getDepthMinZ(e){let t=this._scene.getEngine();return!t.useReverseDepthBuffer&&t.isNDCHalfZRange?0:1}getDepthMaxZ(e){let t=this._scene.getEngine();return t.useReverseDepthBuffer&&t.isNDCHalfZRange?0:1}prepareLightSpecificDefines(e,t){e[`DIRLIGHT`+t]=!0}};E([k()],z.prototype,`shadowFrustumSize`,null),E([k()],z.prototype,`shadowOrthoScale`,null),E([k()],z.prototype,`autoUpdateExtends`,void 0),E([k()],z.prototype,`autoCalcShadowZBounds`,void 0),E([k(`orthoLeft`)],z.prototype,`_orthoLeft`,void 0),E([k(`orthoRight`)],z.prototype,`_orthoRight`,void 0),E([k(`orthoTop`)],z.prototype,`_orthoTop`,void 0),E([k(`orthoBottom`)],z.prototype,`_orthoBottom`,void 0),je.AddNodeConstructor(`Light_Type_3`,(e,t)=>()=>new rt(e,j.Zero(),t));var rt=class extends R{constructor(e,t,n){super(e,n),this.groundColor=new N(0,0,0),this.direction=t||j.Up()}_buildUniformLayout(){this._uniformBuffer.addUniform(`vLightData`,4),this._uniformBuffer.addUniform(`vLightDiffuse`,4),this._uniformBuffer.addUniform(`vLightSpecular`,4),this._uniformBuffer.addUniform(`vLightGround`,3),this._uniformBuffer.addUniform(`shadowsInfo`,3),this._uniformBuffer.addUniform(`depthValues`,2),this._uniformBuffer.create()}getClassName(){return`HemisphericLight`}setDirectionToTarget(e){return this.direction=j.Normalize(e.subtract(j.Zero())),this.direction}getShadowGenerator(){return null}transferToEffect(e,t){let n=j.Normalize(this.direction);return this._uniformBuffer.updateFloat4(`vLightData`,n.x,n.y,n.z,0,t),this._uniformBuffer.updateColor3(`vLightGround`,this.groundColor.scale(this.intensity),t),this}transferToNodeMaterialEffect(e,t){let n=j.Normalize(this.direction);return e.setFloat3(t,n.x,n.y,n.z),this}computeWorldMatrix(){return this._worldMatrix||=A.Identity(),this._worldMatrix}getTypeID(){return R.LIGHTTYPEID_HEMISPHERICLIGHT}prepareLightSpecificDefines(e,t){e[`HEMILIGHT`+t]=!0}};E([le()],rt.prototype,`groundColor`,void 0),E([ge()],rt.prototype,`direction`,void 0);var it=class e{constructor(e,t){this.width=e,this.height=t}toString(){return`{W: ${this.width}, H: ${this.height}}`}getClassName(){return`Size`}getHashCode(){let e=this.width|0;return e=e*397^(this.height|0),e}copyFrom(e){this.width=e.width,this.height=e.height}copyFromFloats(e,t){return this.width=e,this.height=t,this}set(e,t){return this.copyFromFloats(e,t)}multiplyByFloats(t,n){return new e(this.width*t,this.height*n)}clone(){return new e(this.width,this.height)}equals(e){return e?this.width===e.width&&this.height===e.height:!1}get surface(){return this.width*this.height}static Zero(){return new e(0,0)}add(t){return new e(this.width+t.width,this.height+t.height)}subtract(t){return new e(this.width-t.width,this.height-t.height)}static Lerp(t,n,r){let i=t.width+(n.width-t.width)*r,a=t.height+(n.height-t.height)*r;return new e(i,a)}},at=class e{get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get coordinatesMode(){return 0}get isCube(){return this._texture?this._texture.isCube:!1}set isCube(e){this._texture&&(this._texture.isCube=e)}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}getClassName(){return`ThinTexture`}static _IsRenderTargetWrapper(e){return e?._shareDepth!==void 0}constructor(t){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=it.Zero(),this._cachedBaseSize=it.Zero(),this._initialSamplingMode=2,this._texture=e._IsRenderTargetWrapper(t)?t.texture:t,this._texture&&(this._engine=this._texture.getEngine())}isReady(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1}delayLoad(){}getInternalTexture(){return this._texture}getSize(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize}getBaseSize(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)}get samplingMode(){return this._texture?this._texture.samplingMode:this._initialSamplingMode}updateSamplingMode(e){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(e,this._texture)}releaseInternalTexture(){this._texture&&=(this._texture.dispose(),null)}dispose(){this._texture&&(this.releaseInternalTexture(),this._engine=null)}},B=class e extends at{set hasAlpha(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,e=>e.hasTexture(this)))}get hasAlpha(){return this._hasAlpha}set getAlphaFromRGB(e){this._getAlphaFromRGB!==e&&(this._getAlphaFromRGB=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,e=>e.hasTexture(this)))}get getAlphaFromRGB(){return this._getAlphaFromRGB}set coordinatesIndex(e){this._coordinatesIndex!==e&&(this._coordinatesIndex=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,e=>e.hasTexture(this)))}get coordinatesIndex(){return this._coordinatesIndex}set coordinatesMode(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,e=>e.hasTexture(this)))}get coordinatesMode(){return this._coordinatesMode}get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get isCube(){return this._texture?this._texture.isCube:this._isCube}set isCube(e){this._texture?this._texture.isCube=e:this._isCube=e}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}get gammaSpace(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer}set gammaSpace(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this._markAllSubMeshesAsTexturesDirty()}get isRGBD(){return this._texture!=null&&this._texture._isRGBD}set isRGBD(e){this._texture&&(this._texture._isRGBD=e)}get noMipmap(){return!1}get lodGenerationOffset(){return this._texture?this._texture._lodGenerationOffset:0}set lodGenerationOffset(e){this._texture&&(this._texture._lodGenerationOffset=e)}get lodGenerationScale(){return this._texture?this._texture._lodGenerationScale:0}set lodGenerationScale(e){this._texture&&(this._texture._lodGenerationScale=e)}get linearSpecularLOD(){return this._texture?this._texture._linearSpecularLOD:!1}set linearSpecularLOD(e){this._texture&&(this._texture._linearSpecularLOD=e)}get irradianceTexture(){return this._texture?this._texture._irradianceTexture:null}set irradianceTexture(e){this._texture&&(this._texture._irradianceTexture=e)}get uid(){return this._uid||=y(),this._uid}toString(){return this.name}getClassName(){return`BaseTexture`}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get isBlocking(){return!0}get loadingError(){return this._loadingError}get errorObject(){return this._errorObject}constructor(t,n=null){super(null),this.metadata=null,this.reservedDataStore=null,this._hasAlpha=!1,this._getAlphaFromRGB=!1,this.level=1,this._coordinatesIndex=0,this.optimizeUVAllocation=!0,this._coordinatesMode=0,this.wrapR=1,this.anisotropicFilteringLevel=e.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,this._isCube=!1,this._gammaSpace=!0,this.invertZ=!1,this.lodLevelInAlpha=!1,this.isRenderTarget=!1,this._prefiltered=!1,this._forceSerialize=!1,this.animations=[],this.onDisposeObservable=new D,this._onDisposeObserver=null,this._scene=null,this._uid=null,this._parentContainer=null,this._loadingError=!1,t?e._IsScene(t)?this._scene=t:this._engine=t:this._scene=ae.LastCreatedScene,this._scene&&(this.uniqueId=this._scene.getUniqueId(),this._scene.addTexture(this),this._engine=this._scene.getEngine()),this._texture=n,this._uid=null}getScene(){return this._scene}_getEngine(){return this._engine}checkTransformsAreIdentical(e){return e!==null}getTextureMatrix(){return A.IdentityReadOnly}getReflectionTextureMatrix(){return A.IdentityReadOnly}isReadyOrNotBlocking(){return!this.isBlocking||this.isReady()||this.loadingError}scale(e){}get canRescale(){return!1}_getFromCache(e,t,n,r,i,a){let o=this._getEngine();if(!o)return null;let s=o._getUseSRGBBuffer(!!i,t),c=o.getLoadedTexturesCache();for(let o=0;o<c.length;o++){let l=c[o];if((i===void 0||s===l._useSRGBBuffer)&&(r===void 0||r===l.invertY)&&l.url===e&&l.generateMipMaps===!t&&(!n||n===l.samplingMode)&&(a===void 0||a===l.isCube))return l.incrementReferences(),l}return null}_rebuild(){}clone(){return null}get textureType(){return this._texture&&this._texture.type!==void 0?this._texture.type:0}get textureFormat(){return this._texture&&this._texture.format!==void 0?this._texture.format:5}_markAllSubMeshesAsTexturesDirty(){let e=this.getScene();e&&e.markAllMaterialsAsDirty(1)}readPixels(e=0,t=0,n=null,r=!0,i=!1,a=0,o=0,s=Number.MAX_VALUE,c=Number.MAX_VALUE){if(!this._texture)return null;let l=this._getEngine();if(!l)return null;let u=this.getSize(),d=u.width,f=u.height;t!==0&&(d/=2**t,f/=2**t,d=Math.round(d),f=Math.round(f)),s=Math.min(d,s),c=Math.min(f,c);try{return this._texture.isCube?l._readTexturePixels(this._texture,s,c,e,t,n,r,i,a,o):l._readTexturePixels(this._texture,s,c,-1,t,n,r,i,a,o)}catch{return null}}_readPixelsSync(e=0,t=0,n=null,r=!0,i=!1){if(!this._texture)return null;let a=this.getSize(),o=a.width,s=a.height,c=this._getEngine();if(!c)return null;t!=0&&(o/=2**t,s/=2**t,o=Math.round(o),s=Math.round(s));try{return this._texture.isCube?c._readTexturePixelsSync(this._texture,o,s,e,t,n,r,i):c._readTexturePixelsSync(this._texture,o,s,-1,t,n,r,i)}catch{return null}}get _lodTextureHigh(){return this._texture?this._texture._lodTextureHigh:null}get _lodTextureMid(){return this._texture?this._texture._lodTextureMid:null}get _lodTextureLow(){return this._texture?this._texture._lodTextureLow:null}dispose(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene.removePendingData(this);let e=this._scene.textures.indexOf(this);if(e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){let e=this._parentContainer.textures.indexOf(this);e>-1&&this._parentContainer.textures.splice(e,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,super.dispose()}serialize(e=!1){if(!this.name&&!e)return null;let t=f.Serialize(this);return f.AppendSerializedAnimations(this,t),t}static WhenAllReady(e,t){let n=e.length;if(n===0){t();return}for(let r=0;r<e.length;r++){let i=e[r];if(i.isReady())--n===0&&t();else{let e=i.onLoadObservable;e?e.addOnce(()=>{--n===0&&t()}):--n===0&&t()}}}static _IsScene(e){return e.getClassName()===`Scene`}};B.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4,E([k()],B.prototype,`uniqueId`,void 0),E([k()],B.prototype,`name`,void 0),E([k()],B.prototype,`metadata`,void 0),E([k(`hasAlpha`)],B.prototype,`_hasAlpha`,void 0),E([k(`getAlphaFromRGB`)],B.prototype,`_getAlphaFromRGB`,void 0),E([k()],B.prototype,`level`,void 0),E([k(`coordinatesIndex`)],B.prototype,`_coordinatesIndex`,void 0),E([k()],B.prototype,`optimizeUVAllocation`,void 0),E([k(`coordinatesMode`)],B.prototype,`_coordinatesMode`,void 0),E([k()],B.prototype,`wrapU`,null),E([k()],B.prototype,`wrapV`,null),E([k()],B.prototype,`wrapR`,void 0),E([k()],B.prototype,`anisotropicFilteringLevel`,void 0),E([k()],B.prototype,`isCube`,null),E([k()],B.prototype,`is3D`,null),E([k()],B.prototype,`is2DArray`,null),E([k()],B.prototype,`gammaSpace`,null),E([k()],B.prototype,`invertZ`,void 0),E([k()],B.prototype,`lodLevelInAlpha`,void 0),E([k()],B.prototype,`lodGenerationOffset`,null),E([k()],B.prototype,`lodGenerationScale`,null),E([k()],B.prototype,`linearSpecularLOD`,null),E([T()],B.prototype,`irradianceTexture`,null),E([k()],B.prototype,`isRenderTarget`,void 0);function ot(e,t,n=!1){let r=t.width,i=t.height;if(e instanceof Float32Array){let t=e.byteLength/e.BYTES_PER_ELEMENT,n=new Uint8Array(t);for(;--t>=0;){let r=e[t];r<0?r=0:r>1&&(r=1),n[t]=r*255}e=n}let a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`);if(!o)return null;let s=o.createImageData(r,i);if(s.data.set(e),o.putImageData(s,0,0),n){let e=document.createElement(`canvas`);e.width=r,e.height=i;let t=e.getContext(`2d`);return t?(t.translate(0,i),t.scale(1,-1),t.drawImage(a,0,0),e.toDataURL(`image/png`)):null}return a.toDataURL(`image/png`)}function st(e,t=0,n=0){let r=e.getInternalTexture();if(!r)return null;let i=e._readPixelsSync(t,n);return i?ot(i,e.getSize(),r.invertY):null}async function ct(e,t=0,n=0){let r=e.getInternalTexture();if(!r)return null;let i=await e.readPixels(t,n);return i?ot(i,e.getSize(),r.invertY):null}var V=class e extends B{get noMipmap(){return this._noMipmap}get mimeType(){return this._mimeType}set isBlocking(e){this._isBlocking=e}get isBlocking(){return this._isBlocking}get invertY(){return this._invertY}constructor(t,r,i,a,o=e.TRILINEAR_SAMPLINGMODE,s=null,c=null,l=null,u=!1,d,f,p,m,h){super(r),this.url=null,this.uOffset=0,this.vOffset=0,this.uScale=1,this.vScale=1,this.uAng=0,this.vAng=0,this.wAng=0,this.uRotationCenter=.5,this.vRotationCenter=.5,this.wRotationCenter=.5,this.homogeneousRotationInUVTransform=!1,this.inspectableCustomProperties=null,this._noMipmap=!1,this._invertY=!1,this._rowGenerationMatrix=null,this._cachedTextureMatrix=null,this._projectionModeMatrix=null,this._t0=null,this._t1=null,this._t2=null,this._cachedUOffset=-1,this._cachedVOffset=-1,this._cachedUScale=0,this._cachedVScale=0,this._cachedUAng=-1,this._cachedVAng=-1,this._cachedWAng=-1,this._cachedReflectionProjectionMatrixId=-1,this._cachedURotationCenter=-1,this._cachedVRotationCenter=-1,this._cachedWRotationCenter=-1,this._cachedHomogeneousRotationInUVTransform=!1,this._cachedReflectionTextureMatrix=null,this._cachedReflectionUOffset=-1,this._cachedReflectionVOffset=-1,this._cachedReflectionUScale=0,this._cachedReflectionVScale=0,this._cachedReflectionCoordinatesMode=-1,this._buffer=null,this._deleteBuffer=!1,this._format=null,this._delayedOnLoad=null,this._delayedOnError=null,this.onLoadObservable=new D,this._isBlocking=!0,this.name=t||``,this.url=t;let g,_=!1,v=null;typeof i==`object`&&i?(g=i.noMipmap??!1,a=i.invertY??!n.UseOpenGLOrientationForUV,o=i.samplingMode??e.TRILINEAR_SAMPLINGMODE,s=i.onLoad??null,c=i.onError??null,l=i.buffer??null,u=i.deleteBuffer??!1,d=i.format,f=i.mimeType,p=i.loaderOptions,m=i.creationFlags,_=i.useSRGBBuffer??!1,v=i.internalTexture??null):g=!!i,this._noMipmap=g,this._invertY=a===void 0?!n.UseOpenGLOrientationForUV:a,this._initialSamplingMode=o,this._buffer=l,this._deleteBuffer=u,this._mimeType=f,this._loaderOptions=p,this._creationFlags=m,this._useSRGBBuffer=_,this._forcedExtension=h,d&&(this._format=d);let y=this.getScene(),b=this._getEngine();if(!b)return;b.onBeforeTextureInitObservable.notifyObservers(this);let x=()=>{this._texture&&(this._texture._invertVScale&&(this.vScale*=-1,this.vOffset+=1),this._texture._cachedWrapU!==null&&(this.wrapU=this._texture._cachedWrapU,this._texture._cachedWrapU=null),this._texture._cachedWrapV!==null&&(this.wrapV=this._texture._cachedWrapV,this._texture._cachedWrapV=null),this._texture._cachedWrapR!==null&&(this.wrapR=this._texture._cachedWrapR,this._texture._cachedWrapR=null)),this.onLoadObservable.hasObservers()&&this.onLoadObservable.notifyObservers(this),s&&s(),!this.isBlocking&&y&&y.resetCachedMaterial()},ee=(t,n)=>{this._loadingError=!0,this._errorObject={message:t,exception:n},c&&c(t,n),e.OnTextureLoadErrorObservable.notifyObservers(this)};if(!this.url&&!v){this._delayedOnLoad=x,this._delayedOnError=ee;return}if(this._texture=v??this._getFromCache(this.url,g,o,this._invertY,_),this._texture){if(this._texture.isReady)ce.SetImmediate(()=>x());else{let e=this._texture.onLoadedObservable.add(x);this._texture.onErrorObservable.add(t=>{var n;ee(t.message,t.exception),(n=this._texture)==null||n.onLoadedObservable.remove(e)})}}else if(!y||!y.useDelayedTextureLoading){try{this._texture=b.createTexture(this.url,g,this._invertY,y,o,x,ee,this._buffer,void 0,this._format,this._forcedExtension,f,p,m,_)}catch(e){throw ee(`error loading`,e),e}u&&(this._buffer=null)}else this.delayLoadState=4,this._delayedOnLoad=x,this._delayedOnError=ee}updateURL(e,t=null,n,r){this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||this.name.startsWith(`data:`))&&(this.name=e),this.url=e,this._buffer=t,this._forcedExtension=r,this.delayLoadState=4,n&&(this._delayedOnLoad=n),this.delayLoad()}delayLoad(){if(this.delayLoadState!==4)return;let e=this.getScene();e&&(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer),this._texture?this._delayedOnLoad&&(this._texture.isReady?ce.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=e.getEngine().createTexture(this.url,this._noMipmap,this._invertY,e,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}_prepareRowForTextureGeneration(e,t,n,r){e*=this._cachedUScale,t*=this._cachedVScale,e-=this.uRotationCenter*this._cachedUScale,t-=this.vRotationCenter*this._cachedVScale,n-=this.wRotationCenter,j.TransformCoordinatesFromFloatsToRef(e,t,n,this._rowGenerationMatrix,r),r.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,r.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,r.z+=this.wRotationCenter}checkTransformsAreIdentical(e){return e!==null&&this.uOffset===e.uOffset&&this.vOffset===e.vOffset&&this.uScale===e.uScale&&this.vScale===e.vScale&&this.uAng===e.uAng&&this.vAng===e.vAng&&this.wAng===e.wAng}getTextureMatrix(e=1){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*e===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*e,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=A.Zero(),this._rowGenerationMatrix=new A,this._t0=j.Zero(),this._t1=j.Zero(),this._t2=j.Zero()),A.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(A.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,w.Matrix[0]),A.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,w.Matrix[1]),A.ScalingToRef(this._cachedUScale,this._cachedVScale,0,w.Matrix[2]),A.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,w.Matrix[3]),w.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(w.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(w.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(w.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),A.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));let t=this.getScene();return t&&this.optimizeUVAllocation&&t.markAllMaterialsAsDirty(1,e=>e.hasTexture(this)),this._cachedTextureMatrix}getReflectionTextureMatrix(){let t=this.getScene();if(!t)return this._cachedReflectionTextureMatrix;if(this.uOffset===this._cachedReflectionUOffset&&this.vOffset===this._cachedReflectionVOffset&&this.uScale===this._cachedReflectionUScale&&this.vScale===this._cachedReflectionVScale&&this.coordinatesMode===this._cachedReflectionCoordinatesMode){if(this.coordinatesMode===e.PROJECTION_MODE){if(this._cachedReflectionProjectionMatrixId===t.getProjectionMatrix().updateFlag)return this._cachedReflectionTextureMatrix}else return this._cachedReflectionTextureMatrix}this._cachedReflectionTextureMatrix||=A.Zero(),this._projectionModeMatrix||=A.Zero();let n=this._cachedReflectionCoordinatesMode!==this.coordinatesMode;switch(this._cachedReflectionUOffset=this.uOffset,this._cachedReflectionVOffset=this.vOffset,this._cachedReflectionUScale=this.uScale,this._cachedReflectionVScale=this.vScale,this._cachedReflectionCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case e.PLANAR_MODE:A.IdentityToRef(this._cachedReflectionTextureMatrix),this._cachedReflectionTextureMatrix[0]=this.uScale,this._cachedReflectionTextureMatrix[5]=this.vScale,this._cachedReflectionTextureMatrix[12]=this.uOffset,this._cachedReflectionTextureMatrix[13]=this.vOffset;break;case e.PROJECTION_MODE:{A.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);let e=t.getProjectionMatrix();this._cachedReflectionProjectionMatrixId=e.updateFlag,e.multiplyToRef(this._projectionModeMatrix,this._cachedReflectionTextureMatrix);break}default:A.IdentityToRef(this._cachedReflectionTextureMatrix)}return n&&t.markAllMaterialsAsDirty(1,e=>e.getActiveTextures().indexOf(this)!==-1),this._cachedReflectionTextureMatrix}clone(){let t={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return f.Clone(()=>new e(this._texture?this._texture.url:null,this.getScene(),t),this)}serialize(){let t=this.name;e.SerializeBuffers||this.name.startsWith(`data:`)&&(this.name=``),this.name.startsWith(`data:`)&&this.url===this.name&&(this.url=``);let n=super.serialize(e._SerializeInternalTextureUniqueId);return n?((e.SerializeBuffers||e.ForceSerializeBuffers)&&(typeof this._buffer==`string`&&this._buffer.substr(0,5)===`data:`?(n.base64String=this._buffer,n.name=n.name.replace(`data:`,``)):this.url&&this.url.startsWith(`data:`)&&this._buffer instanceof Uint8Array?n.base64String=`data:image/png;base64,`+Oe(this._buffer):(e.ForceSerializeBuffers||this.url&&this.url.startsWith(`blob:`)||this._forceSerialize)&&(n.base64String=!this._engine||this._engine._features.supportSyncTextureRead?st(this):ct(this))),n.invertY=this._invertY,n.samplingMode=this.samplingMode,n._creationFlags=this._creationFlags,n._useSRGBBuffer=this._useSRGBBuffer,e._SerializeInternalTextureUniqueId&&(n.internalTextureUniqueId=this._texture?.uniqueId??void 0),this.name=t,n):null}getClassName(){return`Texture`}dispose(){super.dispose(),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null,this._buffer=null}static Parse(t,n,r){if(t.customType){let e=Ce.Instantiate(t.customType).Parse(t,n,r);return t.samplingMode&&e.updateSamplingMode&&e._samplingMode&&e._samplingMode!==t.samplingMode&&e.updateSamplingMode(t.samplingMode),e}if(t.isCube&&!t.isRenderTarget)return e._CubeTextureParser(t,n,r);let i=t.internalTextureUniqueId!==void 0;if(!t.name&&!t.isRenderTarget&&!i)return null;let a;if(i){let e=n.getEngine().getLoadedTexturesCache();for(let n of e)if(n.uniqueId===t.internalTextureUniqueId){a=n;break}}let o=e=>{var n;if(e&&e._texture&&(e._texture._cachedWrapU=null,e._texture._cachedWrapV=null,e._texture._cachedWrapR=null),t.samplingMode){let n=t.samplingMode;e&&e.samplingMode!==n&&e.updateSamplingMode(n)}if(e&&t.animations)for(let n=0;n<t.animations.length;n++){let r=t.animations[n],i=Se(`BABYLON.Animation`);i&&e.animations.push(i.Parse(r))}i&&!a&&((n=e?._texture)==null||n._setUniqueId(t.internalTextureUniqueId))};return f.Parse(()=>{let i=!0;if(t.noMipmap&&(i=!1),t.mirrorPlane){let r=e._CreateMirror(t.name,t.renderTargetSize,n,i);return r._waitingRenderList=t.renderList,r.mirrorPlane=Te.FromArray(t.mirrorPlane),o(r),r}if(t.isRenderTarget){let r=null;if(t.isCube){if(n.reflectionProbes)for(let e=0;e<n.reflectionProbes.length;e++){let r=n.reflectionProbes[e];if(r.name===t.name)return r.cubeTexture}}else r=e._CreateRenderTargetTexture(t.name,t.renderTargetSize,n,i,t._creationFlags??0),r._waitingRenderList=t.renderList;return o(r),r}{let s;if(t.base64String&&!a)s=e.CreateFromBase64String(t.base64String,t.base64String,n,!i,t.invertY,t.samplingMode,()=>{o(s)},t._creationFlags??0,t._useSRGBBuffer??!1),s.name=t.name;else{let c;c=t.name&&t.name.indexOf(`://`)>0?t.name:r+t.name,t.url&&(t.url.startsWith(`data:`)||e.UseSerializedUrlIfAny)&&(c=t.url);let l={noMipmap:!i,invertY:t.invertY,samplingMode:t.samplingMode,onLoad:()=>{o(s)},internalTexture:a};s=new e(c,n,l)}return s}},t,n)}static CreateFromBase64String(t,n,r,i,a,o=e.TRILINEAR_SAMPLINGMODE,s=null,c=null,l=5,u){return new e(`data:`+n,r,i,a,o,s,c,t,!1,l,void 0,void 0,u)}static LoadFromDataString(t,n,r,i=!1,a,o=!0,s=e.TRILINEAR_SAMPLINGMODE,c=null,l=null,u=5,d){return t.substr(0,5)!==`data:`&&(t=`data:`+t),new e(t,r,a,o,s,c,l,n,i,u,void 0,void 0,d)}};V.SerializeBuffers=!0,V.ForceSerializeBuffers=!1,V.OnTextureLoadErrorObservable=new D,V._SerializeInternalTextureUniqueId=!1,V._CubeTextureParser=(e,t,n)=>{throw p(`CubeTexture`)},V._CreateMirror=(e,t,n,r)=>{throw p(`MirrorTexture`)},V._CreateRenderTargetTexture=(e,t,n,r,i)=>{throw p(`RenderTargetTexture`)},V.NEAREST_SAMPLINGMODE=1,V.NEAREST_NEAREST_MIPLINEAR=8,V.BILINEAR_SAMPLINGMODE=2,V.LINEAR_LINEAR_MIPNEAREST=11,V.TRILINEAR_SAMPLINGMODE=3,V.LINEAR_LINEAR_MIPLINEAR=3,V.NEAREST_NEAREST_MIPNEAREST=4,V.NEAREST_LINEAR_MIPNEAREST=5,V.NEAREST_LINEAR_MIPLINEAR=6,V.NEAREST_LINEAR=7,V.NEAREST_NEAREST=1,V.LINEAR_NEAREST_MIPNEAREST=9,V.LINEAR_NEAREST_MIPLINEAR=10,V.LINEAR_LINEAR=2,V.LINEAR_NEAREST=12,V.EXPLICIT_MODE=0,V.SPHERICAL_MODE=1,V.PLANAR_MODE=2,V.CUBIC_MODE=3,V.PROJECTION_MODE=4,V.SKYBOX_MODE=5,V.INVCUBIC_MODE=6,V.EQUIRECTANGULAR_MODE=7,V.FIXED_EQUIRECTANGULAR_MODE=8,V.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9,V.CLAMP_ADDRESSMODE=0,V.WRAP_ADDRESSMODE=1,V.MIRROR_ADDRESSMODE=2,V.UseSerializedUrlIfAny=!1,E([k()],V.prototype,`url`,void 0),E([k()],V.prototype,`uOffset`,void 0),E([k()],V.prototype,`vOffset`,void 0),E([k()],V.prototype,`uScale`,void 0),E([k()],V.prototype,`vScale`,void 0),E([k()],V.prototype,`uAng`,void 0),E([k()],V.prototype,`vAng`,void 0),E([k()],V.prototype,`wAng`,void 0),E([k()],V.prototype,`uRotationCenter`,void 0),E([k()],V.prototype,`vRotationCenter`,void 0),E([k()],V.prototype,`wRotationCenter`,void 0),E([k()],V.prototype,`homogeneousRotationInUVTransform`,void 0),E([k()],V.prototype,`isBlocking`,null),te(`BABYLON.Texture`,V),f._TextureParser=V.Parse;var lt=class{get depthStencilTexture(){return this._depthStencilTexture}get depthStencilTextureWithStencil(){return this._depthStencilTextureWithStencil}get isCube(){return this._isCube}get isMulti(){return this._isMulti}get is2DArray(){return this.layers>0}get size(){return this.width}get width(){return this._size.width||this._size}get height(){return this._size.height||this._size}get layers(){return this._size.layers||0}get texture(){return this._textures?.[0]??null}get textures(){return this._textures}get faceIndices(){return this._faceIndices}get layerIndices(){return this._layerIndices}get samples(){return this._samples}setSamples(e,t=!0,n=!1){if(this.samples===e&&!n)return e;let r=this._isMulti?this._engine.updateMultipleRenderTargetTextureSampleCount(this,e,t):this._engine.updateRenderTargetTextureSampleCount(this,e);return this._samples=e,r}constructor(e,t,n,r){this._textures=null,this._faceIndices=null,this._layerIndices=null,this._samples=1,this._attachments=null,this._generateStencilBuffer=!1,this._generateDepthBuffer=!1,this._depthStencilTextureWithStencil=!1,this._isMulti=e,this._isCube=t,this._size=n,this._engine=r,this._depthStencilTexture=null}setTextures(e){this._textures=Array.isArray(e)?e:e?[e]:null}setTexture(e,t=0,n=!0){this._textures||=[],this._textures[t]&&n&&this._textures[t].dispose(),this._textures[t]=e}setLayerAndFaceIndices(e,t){this._layerIndices=e,this._faceIndices=t}setLayerAndFaceIndex(e=0,t,n){this._layerIndices||=[],this._faceIndices||=[],t!==void 0&&t>=0&&(this._layerIndices[e]=t),n!==void 0&&n>=0&&(this._faceIndices[e]=n)}createDepthStencilTexture(e=0,t=!0,n=!1,r=1,i=14,a){var o;return(o=this._depthStencilTexture)==null||o.dispose(),this._depthStencilTextureWithStencil=n,this._depthStencilTexture=this._engine.createDepthStencilTexture(this._size,{bilinearFiltering:t,comparisonFunction:e,generateStencil:n,isCube:this._isCube,samples:r,depthTextureFormat:i,label:a},this),this._depthStencilTexture}_shareDepth(e){this._depthStencilTexture&&(e._depthStencilTexture&&e._depthStencilTexture.dispose(),e._depthStencilTexture=this._depthStencilTexture,this._depthStencilTexture.incrementReferences())}_swapAndDie(e){this.texture&&this.texture._swapAndDie(e),this._textures=null,this.dispose(!0)}_cloneRenderTargetWrapper(){let e=null;if(this._isMulti){let t=this.textures;if(t&&t.length>0){let n=!1,r=t.length,i=t[t.length-1]._source;(i===De.Depth||i===De.DepthStencil)&&(n=!0,r--);let a=[],o=[],s=[],c=[],l=[],u=[],d=[],f={};for(let e=0;e<r;++e){let n=t[e];a.push(n.samplingMode),o.push(n.type),s.push(n.format),f[n.uniqueId]===void 0?(f[n.uniqueId]=e,n.is2DArray?(c.push(35866),d.push(n.depth)):n.isCube?(c.push(34067),d.push(0)):n.is3D?(c.push(32879),d.push(n.depth)):(c.push(3553),d.push(0))):(c.push(-1),d.push(0)),this._faceIndices&&l.push(this._faceIndices[e]??0),this._layerIndices&&u.push(this._layerIndices[e]??0)}let p={samplingModes:a,generateMipMaps:t[0].generateMipMaps,generateDepthBuffer:this._generateDepthBuffer,generateStencilBuffer:this._generateStencilBuffer,generateDepthTexture:n,types:o,formats:s,textureCount:r,targetTypes:c,faceIndex:l,layerIndex:u,layerCounts:d},m={width:this.width,height:this.height};e=this._engine.createMultipleRenderTarget(m,p);for(let n=0;n<r;++n){if(c[n]!==-1)continue;let r=f[t[n].uniqueId];e.setTexture(e.textures[r],n)}}}else{let t={};if(t.generateDepthBuffer=this._generateDepthBuffer,t.generateMipMaps=this.texture?.generateMipMaps??!1,t.generateStencilBuffer=this._generateStencilBuffer,t.samplingMode=this.texture?.samplingMode,t.type=this.texture?.type,t.format=this.texture?.format,this.isCube)e=this._engine.createRenderTargetCubeTexture(this.width,t);else{let n={width:this.width,height:this.height,layers:this.is2DArray?this.texture?.depth:void 0};e=this._engine.createRenderTargetTexture(n,t)}e.texture.isReady=!0}return e}_swapRenderTargetWrapper(e){if(this._textures&&e._textures)for(let t=0;t<this._textures.length;++t)this._textures[t]._swapAndDie(e._textures[t],!1),e._textures[t].isReady=!0;this._depthStencilTexture&&e._depthStencilTexture&&(this._depthStencilTexture._swapAndDie(e._depthStencilTexture),e._depthStencilTexture.isReady=!0),this._textures=null,this._depthStencilTexture=null}_rebuild(){let e=this._cloneRenderTargetWrapper();if(e){if(this._depthStencilTexture){let t=this._depthStencilTexture.samplingMode,n=t===2||t===3||t===11;e.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction,n,this._depthStencilTextureWithStencil,this._depthStencilTexture.samples)}this.samples>1&&e.setSamples(this.samples),e._swapRenderTargetWrapper(this),e.dispose()}}releaseTextures(){var e;if(this._textures)for(let t=0;(e=t<this._textures?.length)!=null&&e;++t)this._textures[t].dispose();this._textures=null}dispose(e=!1){var t;e||((t=this._depthStencilTexture)==null||t.dispose(),this._depthStencilTexture=null,this.releaseTextures()),this._engine._releaseRenderTargetWrapper(this)}},ut=class extends lt{constructor(e,t,n,r,i){super(e,t,n,r),this._framebuffer=null,this._depthStencilBuffer=null,this._MSAAFramebuffer=null,this._colorTextureArray=null,this._depthStencilTextureArray=null,this._context=i}_cloneRenderTargetWrapper(){let e=null;return this._colorTextureArray&&this._depthStencilTextureArray?(e=this._engine.createMultiviewRenderTargetTexture(this.width,this.height),e.texture.isReady=!0):e=super._cloneRenderTargetWrapper(),e}_swapRenderTargetWrapper(e){super._swapRenderTargetWrapper(e),e._framebuffer=this._framebuffer,e._depthStencilBuffer=this._depthStencilBuffer,e._MSAAFramebuffer=this._MSAAFramebuffer,e._colorTextureArray=this._colorTextureArray,e._depthStencilTextureArray=this._depthStencilTextureArray,this._framebuffer=this._depthStencilBuffer=this._MSAAFramebuffer=this._colorTextureArray=this._depthStencilTextureArray=null}_shareDepth(e){super._shareDepth(e);let t=this._context,n=this._depthStencilBuffer,r=e._MSAAFramebuffer||e._framebuffer;e._depthStencilBuffer&&t.deleteRenderbuffer(e._depthStencilBuffer),e._depthStencilBuffer=this._depthStencilBuffer,this._engine._bindUnboundFramebuffer(r),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,n),this._engine._bindUnboundFramebuffer(null)}_bindTextureRenderTarget(e,t=0,n,r=0){if(!e._hardwareTexture)return;let i=this._framebuffer,a=this._engine._currentFramebuffer;if(this._engine._bindUnboundFramebuffer(i),this._engine.webGLVersion>1){let i=this._context,a=i[`COLOR_ATTACHMENT`+t];e.is2DArray||e.is3D?(n=n??this.layerIndices?.[t]??0,i.framebufferTextureLayer(i.FRAMEBUFFER,a,e._hardwareTexture.underlyingResource,r,n)):e.isCube?(n=n??this.faceIndices?.[t]??0,i.framebufferTexture2D(i.FRAMEBUFFER,a,i.TEXTURE_CUBE_MAP_POSITIVE_X+n,e._hardwareTexture.underlyingResource,r)):i.framebufferTexture2D(i.FRAMEBUFFER,a,i.TEXTURE_2D,e._hardwareTexture.underlyingResource,r)}else{let i=this._context,a=i[`COLOR_ATTACHMENT`+t+`_WEBGL`],o=n===void 0?i.TEXTURE_2D:i.TEXTURE_CUBE_MAP_POSITIVE_X+n;i.framebufferTexture2D(i.FRAMEBUFFER,a,o,e._hardwareTexture.underlyingResource,r)}this._engine._bindUnboundFramebuffer(a)}setTexture(e,t=0,n=!0){super.setTexture(e,t,n),this._bindTextureRenderTarget(e,t)}setLayerAndFaceIndices(e,t){if(super.setLayerAndFaceIndices(e,t),!this.textures||!this.layerIndices||!this.faceIndices)return;let n=this._attachments?.length??this.textures.length;for(let e=0;e<n;e++){let t=this.textures[e];t&&(t.is2DArray||t.is3D?this._bindTextureRenderTarget(t,e,this.layerIndices[e]):t.isCube?this._bindTextureRenderTarget(t,e,this.faceIndices[e]):this._bindTextureRenderTarget(t,e))}}setLayerAndFaceIndex(e=0,t,n){if(super.setLayerAndFaceIndex(e,t,n),!this.textures||!this.layerIndices||!this.faceIndices)return;let r=this.textures[e];r.is2DArray||r.is3D?this._bindTextureRenderTarget(this.textures[e],e,this.layerIndices[e]):r.isCube&&this._bindTextureRenderTarget(this.textures[e],e,this.faceIndices[e])}dispose(e=!1){let t=this._context;e||(this._colorTextureArray&&=(this._context.deleteTexture(this._colorTextureArray),null),this._depthStencilTextureArray&&=(this._context.deleteTexture(this._depthStencilTextureArray),null)),this._framebuffer&&=(t.deleteFramebuffer(this._framebuffer),null),this._depthStencilBuffer&&=(t.deleteRenderbuffer(this._depthStencilBuffer),null),this._MSAAFramebuffer&&=(t.deleteFramebuffer(this._MSAAFramebuffer),null),super.dispose(e)}};oe.prototype._createHardwareRenderTargetWrapper=function(e,t,n){let r=new ut(e,t,n,this,this._gl);return this._renderTargetWrapperCache.push(r),r},oe.prototype.createRenderTargetTexture=function(e,t){let n=this._createHardwareRenderTargetWrapper(!1,!1,e),r=!0,i=!1,a=!1,o,s=1;t!==void 0&&typeof t==`object`&&(r=t.generateDepthBuffer??!0,i=!!t.generateStencilBuffer,a=!!t.noColorAttachment,o=t.colorAttachment,s=t.samples??1);let c=o||(a?null:this._createInternalTexture(e,t,!0,De.RenderTarget)),l=e.width||e,u=e.height||e,d=this._currentFramebuffer,f=this._gl,p=f.createFramebuffer();return this._bindUnboundFramebuffer(p),n._depthStencilBuffer=this._setupFramebufferDepthAttachments(i,r,l,u),c&&!c.is2DArray&&f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,c._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(d),n._framebuffer=p,n._generateDepthBuffer=r,n._generateStencilBuffer=i,n.setTextures(c),this.updateRenderTargetTextureSampleCount(n,s),n},oe.prototype.createDepthStencilTexture=function(e,t,n){if(t.isCube){let r=e.width||e;return this._createDepthStencilCubeTexture(r,t,n)}return this._createDepthStencilTexture(e,t,n)},oe.prototype._createDepthStencilTexture=function(e,t,n){let r=this._gl,i=e.layers||0,a=i===0?r.TEXTURE_2D:r.TEXTURE_2D_ARRAY,o=new ue(this,De.DepthStencil);if(!this._caps.depthTextureExtension)return pe.Error(`Depth texture is not supported by your browser or hardware.`),o;let s={bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1,...t};if(this._bindTextureDirectly(a,o,!0),this._setupDepthStencilTexture(o,e,s.generateStencil,s.comparisonFunction!==0&&s.bilinearFiltering,s.comparisonFunction,s.samples),s.depthTextureFormat!==void 0){if(s.depthTextureFormat!==15&&s.depthTextureFormat!==16&&s.depthTextureFormat!==17&&s.depthTextureFormat!==13&&s.depthTextureFormat!==14&&s.depthTextureFormat!==18)return pe.Error(`Depth texture format is not supported.`),o;o.format=s.depthTextureFormat}else o.format=s.generateStencil?13:16;let c=o.format===17||o.format===13||o.format===18;n._depthStencilTexture=o,n._depthStencilTextureWithStencil=c;let l=r.UNSIGNED_INT;o.format===15?l=r.UNSIGNED_SHORT:o.format===17||o.format===13?l=r.UNSIGNED_INT_24_8:o.format===14?l=r.FLOAT:o.format===18&&(l=r.FLOAT_32_UNSIGNED_INT_24_8_REV);let u=c?r.DEPTH_STENCIL:r.DEPTH_COMPONENT,d=u;this.webGLVersion>1&&(o.format===15?d=r.DEPTH_COMPONENT16:o.format===16?d=r.DEPTH_COMPONENT24:o.format===17||o.format===13?d=r.DEPTH24_STENCIL8:o.format===14?d=r.DEPTH_COMPONENT32F:o.format===18&&(d=r.DEPTH32F_STENCIL8)),o.is2DArray?r.texImage3D(a,0,d,o.width,o.height,i,0,u,l,null):r.texImage2D(a,0,d,o.width,o.height,0,u,l,null),this._bindTextureDirectly(a,null),this._internalTexturesCache.push(o);let f=n;if(f._depthStencilBuffer){let e=this._currentFramebuffer;this._bindUnboundFramebuffer(f._framebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,null),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,null),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.STENCIL_ATTACHMENT,r.RENDERBUFFER,null),this._bindUnboundFramebuffer(e),r.deleteRenderbuffer(f._depthStencilBuffer),f._depthStencilBuffer=null}return o},oe.prototype.updateRenderTargetTextureSampleCount=function(e,t){if(this.webGLVersion<2||!e||!e.texture)return 1;if(e.samples===t)return t;let n=this._gl;t=Math.min(t,this.getCaps().maxMSAASamples),e._depthStencilBuffer&&=(n.deleteRenderbuffer(e._depthStencilBuffer),null),e._MSAAFramebuffer&&=(n.deleteFramebuffer(e._MSAAFramebuffer),null);let r=e.texture._hardwareTexture;if(r.releaseMSAARenderBuffers(),t>1&&typeof n.renderbufferStorageMultisample==`function`){let i=n.createFramebuffer();if(!i)throw Error(`Unable to create multi sampled framebuffer`);e._MSAAFramebuffer=i,this._bindUnboundFramebuffer(e._MSAAFramebuffer);let a=this._createRenderBuffer(e.texture.width,e.texture.height,t,-1,this._getRGBAMultiSampleBufferFormat(e.texture.type),n.COLOR_ATTACHMENT0,!1);if(!a)throw Error(`Unable to create multi sampled framebuffer`);r.addMSAARenderBuffer(a)}else this._bindUnboundFramebuffer(e._framebuffer);return e.texture.samples=t,e._samples=t,e._depthStencilBuffer=this._setupFramebufferDepthAttachments(e._generateStencilBuffer,e._generateDepthBuffer,e.texture.width,e.texture.height,t),this._bindUnboundFramebuffer(null),t},oe.prototype.createRenderTargetCubeTexture=function(e,t){let n=this._createHardwareRenderTargetWrapper(!1,!0,e),r={generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5,...t};r.generateStencilBuffer=r.generateDepthBuffer&&r.generateStencilBuffer,(r.type===1&&!this._caps.textureFloatLinearFiltering||r.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(r.samplingMode=1);let i=this._gl,a=new ue(this,De.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,a,!0);let o=this._getSamplingParameters(r.samplingMode,r.generateMipMaps);r.type===1&&!this._caps.textureFloat&&(r.type=0,pe.Warn(`Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type`)),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,o.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,o.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(let t=0;t<6;t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,this._getRGBABufferInternalSizedFormat(r.type,r.format),e,e,0,this._getInternalFormat(r.format),this._getWebGLTextureType(r.type),null);let s=i.createFramebuffer();return this._bindUnboundFramebuffer(s),n._depthStencilBuffer=this._setupFramebufferDepthAttachments(r.generateStencilBuffer,r.generateDepthBuffer,e,e),r.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),n._framebuffer=s,n._generateDepthBuffer=r.generateDepthBuffer,n._generateStencilBuffer=r.generateStencilBuffer,a.width=e,a.height=e,a.isReady=!0,a.isCube=!0,a.samples=1,a.generateMipMaps=r.generateMipMaps,a.samplingMode=r.samplingMode,a.type=r.type,a.format=r.format,this._internalTexturesCache.push(a),n.setTextures(a),n};var dt=`postprocessVertexShader`,ft=`attribute vec2 position;
uniform vec2 scale;
varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;c.ShadersStore[dt]=ft;var pt={positions:[1,1,-1,1,-1,-1,1,-1],indices:[0,1,2,0,2,3]},mt=class{constructor(e,t=pt){this._fullscreenViewport=new Ee(0,0,1,1);let n=t.positions??pt.positions,i=t.indices??pt.indices;this.engine=e,this._vertexBuffers={[r.PositionKind]:new r(e,n,r.PositionKind,!1,!1,2)},this._indexBuffer=e.createIndexBuffer(i),this._onContextRestoredObserver=e.onContextRestoredObservable.add(()=>{this._indexBuffer=e.createIndexBuffer(i);for(let e in this._vertexBuffers)this._vertexBuffers[e]._rebuild()})}setViewport(e=this._fullscreenViewport){this.engine.setViewport(e)}bindBuffers(e){this.engine.bindBuffers(this._vertexBuffers,this._indexBuffer,e)}applyEffectWrapper(e){this.engine.setState(!0),this.engine.depthCullingState.depthTest=!1,this.engine.stencilState.stencilTest=!1,this.engine.enableEffect(e._drawWrapper),this.bindBuffers(e.effect),e.onApplyObservable.notifyObservers({})}restoreStates(){this.engine.depthCullingState.depthTest=!0,this.engine.stencilState.stencilTest=!0}draw(){this.engine.drawElementsType(0,0,6)}_isRenderTargetTexture(e){return e.renderTarget!==void 0}render(e,t=null){if(!e.effect.isReady())return;this.setViewport();let n=t===null?null:this._isRenderTargetTexture(t)?t.renderTarget:t;n&&this.engine.bindFramebuffer(n),this.applyEffectWrapper(e),this.draw(),n&&this.engine.unBindFramebuffer(n),this.restoreStates()}dispose(){let e=this._vertexBuffers[r.PositionKind];e&&(e.dispose(),delete this._vertexBuffers[r.PositionKind]),this._indexBuffer&&this.engine._releaseBuffer(this._indexBuffer),this._onContextRestoredObserver&&=(this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver),null)}},ht=class{get effect(){return this._drawWrapper.effect}set effect(e){this._drawWrapper.effect=e}constructor(e){this.onApplyObservable=new D;let t,n=e.uniformNames||[];e.vertexShader?t={fragmentSource:e.fragmentShader,vertexSource:e.vertexShader,spectorName:e.name||`effectWrapper`}:(n.push(`scale`),t={fragmentSource:e.fragmentShader,vertex:`postprocess`,spectorName:e.name||`effectWrapper`},this.onApplyObservable.add(()=>{this.effect.setFloat2(`scale`,1,1)}));let r=e.defines?e.defines.join(`
`):``;this._drawWrapper=new a(e.engine),e.useShaderStore?(t.fragment=t.fragmentSource,t.vertex||(t.vertex=t.vertexSource),delete t.fragmentSource,delete t.vertexSource,this.effect=e.engine.createEffect(t,e.attributeNames||[`position`],n,e.samplerNames,r,void 0,e.onCompiled,void 0,void 0,e.shaderLanguage)):(this.effect=new C(t,e.attributeNames||[`position`],n,e.samplerNames,e.engine,r,void 0,e.onCompiled,void 0,void 0,void 0,e.shaderLanguage),this._onContextRestoredObserver=e.engine.onContextRestoredObservable.add(()=>{this.effect._pipelineContext=null,this.effect._wasPreviouslyReady=!1,this.effect._prepareEffect()}))}dispose(){this._onContextRestoredObserver&&=(this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),null),this.effect.dispose()}},gt=`passPixelShader`,_t=`varying vec2 vUV;
uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;c.ShadersStore[gt]=_t;var vt={name:gt,shader:_t},yt=class e{static _CreateDumpRenderer(){if(!e._DumpToolsEngine){let t=document.createElement(`canvas`),n=new oe(t,!1,{preserveDrawingBuffer:!0,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!1,antialias:!1,failIfMajorPerformanceCaveat:!1});n.getCaps().parallelShaderCompile=void 0;let r=new mt(n),i=new ht({engine:n,name:vt.name,fragmentShader:vt.shader,samplerNames:[`textureSampler`]});e._DumpToolsEngine={canvas:t,engine:n,renderer:r,wrapper:i}}return e._DumpToolsEngine}static async DumpFramebuffer(t,n,r,i,a=`image/png`,o){let s=await r.readPixels(0,0,t,n),c=new Uint8Array(s.buffer);e.DumpData(t,n,c,i,a,o,!0)}static DumpDataAsync(t,n,r,i=`image/png`,a,o=!1,s=!1,c){return new Promise(l=>{e.DumpData(t,n,r,e=>l(e),i,a,o,s,c)})}static DumpData(t,n,r,i,a=`image/png`,o,s=!1,c=!1,l){let u=e._CreateDumpRenderer();if(u.engine.setSize(t,n,!0),r instanceof Float32Array){let e=new Uint8Array(r.length),t=r.length;for(;t--;){let n=r[t];e[t]=n<0?0:n>1?1:Math.round(n*255)}r=e}let d=u.engine.createRawTexture(r,t,n,5,!1,!s,1);u.renderer.setViewport(),u.renderer.applyEffectWrapper(u.wrapper),u.wrapper.effect._bindTexture(`textureSampler`,d),u.renderer.draw(),c?re.ToBlob(u.canvas,e=>{let t=new FileReader;t.onload=e=>{let t=e.target.result;i&&i(t)},t.readAsArrayBuffer(e)},a,l):re.EncodeScreenshotCanvasData(u.canvas,i,a,o,l),d.dispose()}static Dispose(){e._DumpToolsEngine&&(e._DumpToolsEngine.wrapper.dispose(),e._DumpToolsEngine.renderer.dispose(),e._DumpToolsEngine.engine.dispose()),e._DumpToolsEngine=null}};re.DumpData=yt.DumpData,re.DumpDataAsync=yt.DumpDataAsync,re.DumpFramebuffer=yt.DumpFramebuffer;var bt=class e extends V{get renderList(){return this._renderList}set renderList(e){this._unObserveRenderList&&=(this._unObserveRenderList(),null),e&&(this._unObserveRenderList=ve(e,this._renderListHasChanged)),this._renderList=e}get postProcesses(){return this._postProcesses}get _prePassEnabled(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled}set onAfterUnbind(e){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}set onClear(e){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(e)}get renderPassIds(){return this._renderPassIds}get currentRefreshId(){return this._currentRefreshId}setMaterialForRendering(e,t){let n;n=Array.isArray(e)?e:[e];for(let e=0;e<n.length;++e)for(let r=0;r<this._renderPassIds.length;++r)n[e].setMaterialForRenderPass(this._renderPassIds[r],t===void 0?void 0:Array.isArray(t)?t[r]:t)}get isMulti(){return this._renderTarget?.isMulti??!1}get renderTargetOptions(){return this._renderTargetOptions}get renderTarget(){return this._renderTarget}_onRatioRescale(){this._sizeRatio&&this.resize(this._initialSizeParameter)}set boundingBoxSize(e){if(this._boundingBoxSize&&this._boundingBoxSize.equals(e))return;this._boundingBoxSize=e;let t=this.getScene();t&&t.markAllMaterialsAsDirty(1)}get boundingBoxSize(){return this._boundingBoxSize}get depthStencilTexture(){return this._renderTarget?._depthStencilTexture??null}constructor(e,t,n,r=!1,i=!0,a=0,o=!1,s=V.TRILINEAR_SAMPLINGMODE,c=!0,l=!1,u=!1,d=5,f=!1,p,h,g=!1,_=!1){let v;if(typeof r==`object`){let e=r;r=!!e.generateMipMaps,i=e.doNotChangeAspectRatio??!0,a=e.type??0,o=!!e.isCube,s=e.samplingMode??V.TRILINEAR_SAMPLINGMODE,c=e.generateDepthBuffer??!0,l=!!e.generateStencilBuffer,u=!!e.isMulti,d=e.format??5,f=!!e.delayAllocation,p=e.samples,h=e.creationFlags,g=!!e.noColorAttachment,_=!!e.useSRGBBuffer,v=e.colorAttachment}if(super(null,n,!r,void 0,s,void 0,void 0,void 0,void 0,d),this._unObserveRenderList=null,this._renderListHasChanged=(e,t)=>{var n;let r=this._renderList?this._renderList.length:0;(t===0&&r>0||r===0)&&((n=this.getScene())==null||n.meshes.forEach(e=>{e._markSubMeshesAsLightDirty()}))},this.renderParticles=!0,this.renderSprites=!1,this.forceLayerMaskCheck=!1,this.ignoreCameraViewport=!1,this.onBeforeBindObservable=new D,this.onAfterUnbindObservable=new D,this.onBeforeRenderObservable=new D,this.onAfterRenderObservable=new D,this.onClearObservable=new D,this.onResizeObservable=new D,this._cleared=!1,this.skipInitialClear=!1,this._currentRefreshId=-1,this._refreshRate=1,this._samples=1,this._canRescale=!0,this._renderTarget=null,this.boundingBoxPosition=j.Zero(),n=this.getScene(),!n)return;let y=this.getScene().getEngine();this._coordinatesMode=V.PROJECTION_MODE,this.renderList=[],this.name=e,this.isRenderTarget=!0,this._initialSizeParameter=t,this._renderPassIds=[],this._isCubeData=o,this._processSizeParameter(t),this.renderPassId=this._renderPassIds[0],this._resizeObserver=y.onResizeObservable.add(()=>{}),this._generateMipMaps=!!r,this._doNotChangeAspectRatio=i,this._renderingManager=new m(n),this._renderingManager._useSceneAutoClearSetup=!0,!u&&(this._renderTargetOptions={generateMipMaps:r,type:a,format:this._format??void 0,samplingMode:this.samplingMode,generateDepthBuffer:c,generateStencilBuffer:l,samples:p,creationFlags:h,noColorAttachment:g,useSRGBBuffer:_,colorAttachment:v,label:this.name},this.samplingMode===V.NEAREST_SAMPLINGMODE&&(this.wrapU=V.CLAMP_ADDRESSMODE,this.wrapV=V.CLAMP_ADDRESSMODE),f||(o?(this._renderTarget=n.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions),this.coordinatesMode=V.INVCUBIC_MODE,this._textureMatrix=A.Identity()):this._renderTarget=n.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,p!==void 0&&(this.samples=p)))}createDepthStencilTexture(e=0,t=!0,n=!1,r=1,i=14){var a;(a=this._renderTarget)==null||a.createDepthStencilTexture(e,t,n,r,i)}_releaseRenderPassId(){if(this._scene){let e=this._scene.getEngine();for(let t=0;t<this._renderPassIds.length;++t)e.releaseRenderPassId(this._renderPassIds[t])}this._renderPassIds=[]}_createRenderPassId(){this._releaseRenderPassId();let e=this._scene.getEngine(),t=this._isCubeData?6:this.getRenderLayers()||1;for(let n=0;n<t;++n)this._renderPassIds[n]=e.createRenderPassId(`RenderTargetTexture - ${this.name}#${n}`)}_processSizeParameter(e){if(e.ratio){this._sizeRatio=e.ratio;let t=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(t.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(t.getRenderHeight(),this._sizeRatio)}}else this._size=e;this._createRenderPassId()}get samples(){return this._renderTarget?.samples??this._samples}set samples(e){this._renderTarget&&(this._samples=this._renderTarget.setSamples(e))}resetRefreshCounter(){this._currentRefreshId=-1}get refreshRate(){return this._refreshRate}set refreshRate(e){this._refreshRate=e,this.resetRefreshCounter()}addPostProcess(e){if(!this._postProcessManager){let e=this.getScene();if(!e)return;this._postProcessManager=new xe(e),this._postProcesses=[]}this._postProcesses.push(e),this._postProcesses[0].autoClear=!1}clearPostProcesses(e=!1){if(this._postProcesses){if(e)for(let e of this._postProcesses)e.dispose();this._postProcesses=[]}}removePostProcess(e){if(!this._postProcesses)return;let t=this._postProcesses.indexOf(e);t!==-1&&(this._postProcesses.splice(t,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}_shouldRender(){return this._currentRefreshId===-1||this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)}getRenderSize(){return this.getRenderWidth()}getRenderWidth(){return this._size.width?this._size.width:this._size}getRenderHeight(){return this._size.width?this._size.height:this._size}getRenderLayers(){return this._size.layers||0}disableRescaling(){this._canRescale=!1}get canRescale(){return this._canRescale}scale(e){let t=Math.max(1,this.getRenderSize()*e);this.resize(t)}getReflectionTextureMatrix(){return this.isCube?this._textureMatrix:super.getReflectionTextureMatrix()}resize(e){var t;let n=this.isCube;(t=this._renderTarget)==null||t.dispose(),this._renderTarget=null;let r=this.getScene();r&&(this._processSizeParameter(e),this._renderTarget=n?r.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):r.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))}render(e=!1,t=!1){this._render(e,t)}isReadyForRendering(){return this._render(!1,!1,!0)}_render(e=!1,t=!1,n=!1){let r=this.getScene();if(!r)return n;let i=r.getEngine();if(this.useCameraPostProcesses!==void 0&&(e=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(let e=0;e<this._waitingRenderList.length;e++){let t=this._waitingRenderList[e],n=r.getMeshById(t);n&&this.renderList.push(n)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];let e=this.getScene();if(!e)return n;let t=e.meshes;for(let e=0;e<t.length;e++){let n=t[e];this.renderListPredicate(n)&&this.renderList.push(n)}}let a=i.currentRenderPassId;this.onBeforeBindObservable.notifyObservers(this);let o=this.activeCamera??r.activeCamera,s=r.activeCamera;o&&(o!==r.activeCamera&&(r.setTransformMatrix(o.getViewMatrix(),o.getProjectionMatrix(!0)),r.activeCamera=o),i.setViewport(o.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1;let c=n;if(n){r.getViewMatrix()||r.updateTransformMatrix();let e=this.is2DArray?this.getRenderLayers():this.isCube?6:1;for(let t=0;t<e&&c;t++){let e=null,a=this.renderList?this.renderList:r.getActiveMeshes().data,o=this.renderList?this.renderList.length:r.getActiveMeshes().length;i.currentRenderPassId=this._renderPassIds[t],this.onBeforeRenderObservable.notifyObservers(t),this.getCustomRenderList&&(e=this.getCustomRenderList(t,a,o)),e||=a,this._doNotChangeAspectRatio||r.updateTransformMatrix(!0);for(let t=0;t<e.length&&c;++t){let r=e[t];if(!(!r.isEnabled()||r.isBlocked||!r.isVisible||!r.subMeshes)){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(r,this.refreshRate,n)){c=!1;continue}}else if(!r.isReady(!0)){c=!1;continue}}}this.onAfterRenderObservable.notifyObservers(t),(this.is2DArray||this.isCube)&&(r.incrementRenderId(),r.resetCachedMaterial())}}else if(this.is2DArray&&!this.isMulti)for(let n=0;n<this.getRenderLayers();n++)this._renderToTarget(0,e,t,n,o),r.incrementRenderId(),r.resetCachedMaterial();else if(this.isCube&&!this.isMulti)for(let n=0;n<6;n++)this._renderToTarget(n,e,t,void 0,o),r.incrementRenderId(),r.resetCachedMaterial();else this._renderToTarget(0,e,t,void 0,o);return this.onAfterUnbindObservable.notifyObservers(this),i.currentRenderPassId=a,s&&(r.activeCamera=s,(r.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==r.activeCamera)&&r.setTransformMatrix(r.activeCamera.getViewMatrix(),r.activeCamera.getProjectionMatrix(!0)),i.setViewport(r.activeCamera.viewport)),r.resetCachedMaterial(),c}_bestReflectionRenderTargetDimension(e,t){let n=e*t,r=o.NearestPOT(n+16384/(128+n));return Math.min(o.FloorPOT(e),r)}_prepareRenderingManager(e,t,n,r){let i=this.getScene();if(!i)return;this._renderingManager.reset();let a=i.getRenderId();for(let o=0;o<t;o++){let t=e[o];if(t&&!t.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(t,this.refreshRate,!1)){this.resetRefreshCounter();continue}}else if(!t.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!t._internalAbstractMeshDataInfo._currentLODIsUpToDate&&i.activeCamera&&(t._internalAbstractMeshDataInfo._currentLOD=i.customLODSelector?i.customLODSelector(t,this.activeCamera||i.activeCamera):t.getLOD(this.activeCamera||i.activeCamera),t._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!t._internalAbstractMeshDataInfo._currentLOD)continue;let e=t._internalAbstractMeshDataInfo._currentLOD;e._preActivateForIntermediateRendering(a);let o;if(o=r&&n?(t.layerMask&n.layerMask)===0:!1,t.isEnabled()&&t.isVisible&&t.subMeshes&&!o&&(e!==t&&e._activate(a,!0),t._activate(a,!0)&&t.subMeshes.length)){t.isAnInstance?t._internalAbstractMeshDataInfo._actAsRegularMesh&&(e=t):e._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,e._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(let t=0;t<e.subMeshes.length;t++){let n=e.subMeshes[t];this._renderingManager.dispatch(n,e)}}}}for(let e=0;e<i.particleSystems.length;e++){let t=i.particleSystems[e],n=t.emitter;!t.isStarted()||!n||n.position&&!n.isEnabled()||this._renderingManager.dispatchParticles(t)}}_bindFrameBuffer(e=0,t=0){let n=this.getScene();if(!n)return;let r=n.getEngine();this._renderTarget&&r.bindFramebuffer(this._renderTarget,this.isCube?e:void 0,void 0,void 0,this.ignoreCameraViewport,0,t)}_unbindFrameBuffer(e,t){this._renderTarget&&e.unBindFramebuffer(this._renderTarget,this.isCube,()=>{this.onAfterRenderObservable.notifyObservers(t)})}_prepareFrame(e,t,n,r){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!r||!e.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(t,n)}_renderToTarget(e,t,n,r=0,i=null){var a,o;let s=this.getScene();if(!s)return;let c=s.getEngine();if((a=c._debugPushGroup)==null||a.call(c,`render to face #${e} layer #${r}`,1),this._prepareFrame(s,e,r,t),this.is2DArray?(c.currentRenderPassId=this._renderPassIds[r],this.onBeforeRenderObservable.notifyObservers(r)):(c.currentRenderPassId=this._renderPassIds[e],this.onBeforeRenderObservable.notifyObservers(e)),c.snapshotRendering&&c.snapshotRenderingMode===1)this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(c):this.skipInitialClear||c.clear(this.clearColor||s.clearColor,!0,!0,!0);else{let a=null,o=this.renderList?this.renderList:s.getActiveMeshes().data,l=this.renderList?this.renderList.length:s.getActiveMeshes().length;this.getCustomRenderList&&(a=this.getCustomRenderList(this.is2DArray?r:e,o,l)),a?this._prepareRenderingManager(a,a.length,i,this.forceLayerMaskCheck):(this._defaultRenderListPrepared||=(this._prepareRenderingManager(o,l,i,!this.renderList||this.forceLayerMaskCheck),!0),a=o);for(let t of s._beforeRenderTargetClearStage)t.action(this,e,r);this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(c):this.skipInitialClear||c.clear(this.clearColor||s.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||s.updateTransformMatrix(!0);for(let t of s._beforeRenderTargetDrawStage)t.action(this,e,r);this._renderingManager.render(this.customRenderFunction,a,this.renderParticles,this.renderSprites);for(let t of s._afterRenderTargetDrawStage)t.action(this,e,r);let u=this._texture?.generateMipMaps??!1;this._texture&&(this._texture.generateMipMaps=!1),this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._renderTarget??void 0,e,this._postProcesses,this.ignoreCameraViewport):t&&s.postProcessManager._finalizeFrame(!1,this._renderTarget??void 0,e);for(let t of s._afterRenderTargetPostProcessStage)t.action(this,e,r);this._texture&&(this._texture.generateMipMaps=u),this._doNotChangeAspectRatio||s.updateTransformMatrix(!0),n&&yt.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),c)}this._unbindFrameBuffer(c,e),this._texture&&this.isCube&&e===5&&c.generateMipMapsForCubemap(this._texture),(o=c._debugPopGroup)==null||o.call(c,1)}setRenderingOrder(e,t=null,n=null,r=null){this._renderingManager.setRenderingOrder(e,t,n,r)}setRenderingAutoClearDepthStencil(e,t){this._renderingManager.setRenderingAutoClearDepthStencil(e,t),this._renderingManager._useSceneAutoClearSetup=!1}clone(){let t=this.getSize(),n=new e(this.name,t,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return n.hasAlpha=this.hasAlpha,n.level=this.level,n.coordinatesMode=this.coordinatesMode,this.renderList&&(n.renderList=this.renderList.slice(0)),n}serialize(){if(!this.name)return null;let e=super.serialize();if(e.renderTargetSize=this.getRenderSize(),e.renderList=[],this.renderList)for(let t=0;t<this.renderList.length;t++)e.renderList.push(this.renderList[t].id);return e}disposeFramebufferObjects(){var e;(e=this._renderTarget)==null||e.dispose(!0)}releaseInternalTexture(){var e;(e=this._renderTarget)==null||e.releaseTextures(),this._texture=null}dispose(){var e;this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&=(this._postProcessManager.dispose(),null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this._releaseRenderPassId(),this.clearPostProcesses(!0),this._resizeObserver&&=(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),null),this.renderList=null;let t=this.getScene();if(!t)return;let n=t.customRenderTargets.indexOf(this);n>=0&&t.customRenderTargets.splice(n,1);for(let e of t.cameras)n=e.customRenderTargets.indexOf(this),n>=0&&e.customRenderTargets.splice(n,1);(e=this._renderTarget)==null||e.dispose(),this._renderTarget=null,this._texture=null,super.dispose()}_rebuild(){this.refreshRate===e.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=e.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()}freeRenderingGroups(){this._renderingManager&&this._renderingManager.freeRenderingGroups()}getViewCount(){return 1}};bt.REFRESHRATE_RENDER_ONCE=0,bt.REFRESHRATE_RENDER_ONEVERYFRAME=1,bt.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,V._CreateRenderTargetTexture=(e,t,n,r,i)=>new bt(e,t,n,r);var H=class e{static RegisterShaderCodeProcessing(t,n){if(!n){delete e._CustomShaderCodeProcessing[t??``];return}e._CustomShaderCodeProcessing[t??``]=n}static _GetShaderCodeProcessing(t){return e._CustomShaderCodeProcessing[t]??e._CustomShaderCodeProcessing[``]}get samples(){return this._samples}set samples(e){this._samples=Math.min(e,this._engine.getCaps().maxMSAASamples),this._textures.forEach(e=>{e.setSamples(this._samples)})}getEffectName(){return this._fragmentUrl}set onActivate(e){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),e&&(this._onActivateObserver=this.onActivateObservable.add(e))}set onSizeChanged(e){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(e)}set onApply(e){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}get inputTexture(){return this._textures.data[this._currentRenderTextureInd]}set inputTexture(e){this._forcedOutputTexture=e}restoreDefaultInputTexture(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())}getCamera(){return this._camera}get texelSize(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)}constructor(e,t,n,r,i,o,c=1,l,u,d=null,f=0,p=`postprocess`,m,h=!1,g=5,_=me.GLSL){this._parentContainer=null,this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.forceAutoClearInAlphaMode=!1,this.alphaMode=0,this.animations=[],this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this.externalTextureSamplerBinding=!1,this._textures=new s(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new ie(1,1),this._texelSize=ie.Zero(),this.onActivateObservable=new D,this.onSizeChangedObservable=new D,this.onApplyObservable=new D,this.onBeforeRenderObservable=new D,this.onAfterRenderObservable=new D,this.name=e,o==null?l&&(this._engine=l,this._engine.postProcesses.push(this)):(this._camera=o,this._scene=o.getScene(),o.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()),this._options=i,this.renderTargetSamplingMode=c||1,this._reusable=u||!1,this._textureType=f,this._textureFormat=g,this._shaderLanguage=_,this._samplers=r||[],this._samplers.push(`textureSampler`),this._fragmentUrl=t,this._vertexUrl=p,this._parameters=n||[],this._parameters.push(`scale`),this._indexParameters=m,this._drawWrapper=new a(this._engine),h||this.updateEffect(d)}getClassName(){return`PostProcess`}getEngine(){return this._engine}getEffect(){return this._drawWrapper.effect}shareOutputWith(e){return this._disposeTextures(),this._shareOutputWithPostProcess=e,this}useOwnOutput(){this._textures.length==0&&(this._textures=new s(2)),this._shareOutputWithPostProcess=null}updateEffect(t=null,n=null,r=null,i,a,o,s,c){let l=e._GetShaderCodeProcessing(this.name);if(l!=null&&l.defineCustomBindings){let e=n?.slice()??[];e.push(...this._parameters);let i=r?.slice()??[];i.push(...this._samplers),t=l.defineCustomBindings(this.name,t,e,i),n=e,r=i}this._postProcessDefines=t,this._drawWrapper.effect=this._engine.createEffect({vertex:s??this._vertexUrl,fragment:c??this._fragmentUrl},{attributes:[`position`],uniformsNames:n||this._parameters,uniformBuffersNames:[],samplers:r||this._samplers,defines:t===null?``:t,fallbacks:null,onCompiled:a??null,onError:o??null,indexParameters:i||this._indexParameters,processCodeAfterIncludes:l!=null&&l.processCodeAfterIncludes?(e,t)=>l.processCodeAfterIncludes(this.name,e,t):null,processFinalCode:l!=null&&l.processFinalCode?(e,t)=>l.processFinalCode(this.name,e,t):null,shaderLanguage:this._shaderLanguage},this._engine)}isReusable(){return this._reusable}markTextureDirty(){this.width=-1}_createRenderTargetTexture(e,t,n=0){for(let r=0;r<this._textureCache.length;r++)if(this._textureCache[r].texture.width===e.width&&this._textureCache[r].texture.height===e.height&&this._textureCache[r].postProcessChannel===n&&this._textureCache[r].texture._generateDepthBuffer===t.generateDepthBuffer&&this._textureCache[r].texture.samples===t.samples)return this._textureCache[r].texture;let r=this._engine.createRenderTargetTexture(e,t);return this._textureCache.push({texture:r,postProcessChannel:n,lastUsedRenderId:-1}),r}_flushTextureCache(){let e=this._renderId;for(let t=this._textureCache.length-1;t>=0;t--)if(e-this._textureCache[t].lastUsedRenderId>100){let e=!1;for(let n=0;n<this._textures.length;n++)if(this._textures.data[n]===this._textureCache[t].texture){e=!0;break}e||(this._textureCache[t].texture.dispose(),this._textureCache.splice(t,1))}}_resize(e,t,n,r,i){this._textures.length>0&&this._textures.reset(),this.width=e,this.height=t;let a=null;for(let e=0;e<n._postProcesses.length;e++)if(n._postProcesses[e]!==null){a=n._postProcesses[e];break}let o={width:this.width,height:this.height},s={generateMipMaps:r,generateDepthBuffer:i||a===this,generateStencilBuffer:(i||a===this)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat,samples:this._samples,label:`PostProcessRTT-`+this.name};this._textures.push(this._createRenderTargetTexture(o,s,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(o,s,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)}activate(e,t=null,n){var r,i;e||=this._camera;let a=e.getScene(),s=a.getEngine(),c=s.getCaps().maxTextureSize,l=(t?t.width:this._engine.getRenderWidth(!0))*this._options|0,u=(t?t.height:this._engine.getRenderHeight(!0))*this._options|0,d=e.parent;d&&(d.leftCamera==e||d.rightCamera==e)&&(l/=2);let f=this._options.width||l,p=this._options.height||u,m=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){let e=s.currentViewport;e&&(f*=e.width,p*=e.height)}(m||this.alwaysForcePOT)&&(this._options.width||(f=s.needPOTTextures?o.GetExponentOfTwo(f,c,this.scaleMode):f),this._options.height||(p=s.needPOTTextures?o.GetExponentOfTwo(p,c,this.scaleMode):p)),(this.width!==f||this.height!==p)&&this._resize(f,p,e,m,n),this._textures.forEach(e=>{e.samples!==this.samples&&this._engine.updateRenderTargetTextureSampleCount(e,this.samples)}),this._flushTextureCache(),this._renderId++}let h;if(this._shareOutputWithPostProcess)h=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)h=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{h=this.inputTexture;let e;for(let t=0;t<this._textureCache.length;t++)if(this._textureCache[t].texture===h){e=this._textureCache[t];break}e&&(e.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(l/f,u/p),this._engine.bindFramebuffer(h,0,l,u,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(h,0,void 0,void 0,this.forceFullscreenViewport)),(i=(r=this._engine)._debugInsertMarker)==null||i.call(r,`post process ${this.name} input`),this.onActivateObservable.notifyObservers(e),this.autoClear&&(this.alphaMode===0||this.forceAutoClearInAlphaMode)&&this._engine.clear(this.clearColor?this.clearColor:a.clearColor,a._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),h}get isSupported(){return this._drawWrapper.effect.isSupported}get aspectRatio(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height}isReady(){return this._drawWrapper.effect?.isReady()??!1}apply(){var t,n,r;if(!((t=this._drawWrapper.effect)!=null&&t.isReady()))return null;this._engine.enableEffect(this._drawWrapper),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);let i;return i=this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?this._forcedOutputTexture:this.inputTexture,this.externalTextureSamplerBinding||this._drawWrapper.effect._bindTexture(`textureSampler`,i?.texture),this._drawWrapper.effect.setVector2(`scale`,this._scaleRatio),this.onApplyObservable.notifyObservers(this._drawWrapper.effect),(r=(n=e._GetShaderCodeProcessing(this.name))?.bindCustomBindings)==null||r.call(n,this.name,this._drawWrapper.effect),this._drawWrapper.effect}_disposeTextures(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()}_disposeTextureCache(){for(let e=this._textureCache.length-1;e>=0;e--)this._textureCache[e].texture.dispose();this._textureCache.length=0}setPrePassRenderer(e){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=e.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1}dispose(e){e||=this._camera,this._disposeTextures();let t;if(this._scene&&(t=this._scene.postProcesses.indexOf(this),t!==-1&&this._scene.postProcesses.splice(t,1)),this._parentContainer){let e=this._parentContainer.postProcesses.indexOf(this);e>-1&&this._parentContainer.postProcesses.splice(e,1),this._parentContainer=null}if(t=this._engine.postProcesses.indexOf(this),t!==-1&&this._engine.postProcesses.splice(t,1),e){if(e.detachPostProcess(this),t=e._postProcesses.indexOf(this),t===0&&e._postProcesses.length>0){let e=this._camera._getFirstPostProcess();e&&e.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}}serialize(){let e=f.Serialize(this),t=this.getCamera()||this._scene&&this._scene.activeCamera;return e.customType=`BABYLON.`+this.getClassName(),e.cameraId=t?t.id:null,e.reusable=this._reusable,e.textureType=this._textureType,e.fragmentUrl=this._fragmentUrl,e.parameters=this._parameters,e.samplers=this._samplers,e.options=this._options,e.defines=this._postProcessDefines,e.textureFormat=this._textureFormat,e.vertexUrl=this._vertexUrl,e.indexParameters=this._indexParameters,e}clone(){let t=this.serialize();t._engine=this._engine,t.cameraId=null;let n=e.Parse(t,this._scene,``);return n?(n.onActivateObservable=this.onActivateObservable.clone(),n.onSizeChangedObservable=this.onSizeChangedObservable.clone(),n.onApplyObservable=this.onApplyObservable.clone(),n.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),n.onAfterRenderObservable=this.onAfterRenderObservable.clone(),n._prePassEffectConfiguration=this._prePassEffectConfiguration,n):null}static Parse(e,t,n){let r=Se(e.customType);if(!r||!r._Parse)return null;let i=t?t.getCameraById(e.cameraId):null;return r._Parse(e,i,t,n)}static _Parse(t,n,r,i){return f.Parse(()=>new e(t.name,t.fragmentUrl,t.parameters,t.samplers,t.options,n,t.renderTargetSamplingMode,t._engine,t.reusable,t.defines,t.textureType,t.vertexUrl,t.indexParameters,!1,t.textureFormat),t,r,i)}};H._CustomShaderCodeProcessing={},E([k()],H.prototype,`uniqueId`,void 0),E([k()],H.prototype,`name`,void 0),E([k()],H.prototype,`width`,void 0),E([k()],H.prototype,`height`,void 0),E([k()],H.prototype,`renderTargetSamplingMode`,void 0),E([be()],H.prototype,`clearColor`,void 0),E([k()],H.prototype,`autoClear`,void 0),E([k()],H.prototype,`forceAutoClearInAlphaMode`,void 0),E([k()],H.prototype,`alphaMode`,void 0),E([k()],H.prototype,`alphaConstants`,void 0),E([k()],H.prototype,`enablePixelPerfectMode`,void 0),E([k()],H.prototype,`forceFullscreenViewport`,void 0),E([k()],H.prototype,`scaleMode`,void 0),E([k()],H.prototype,`alwaysForcePOT`,void 0),E([k(`samples`)],H.prototype,`_samples`,void 0),E([k()],H.prototype,`adaptScaleToCurrentViewport`,void 0),te(`BABYLON.PostProcess`,H);var xt=`kernelBlurVaryingDeclaration`,St=`varying vec2 sampleCoord{X};`;c.IncludesShadersStore[xt]=St;var Ct=`packingFunctions`,wt=`vec4 pack(float depth)
{
const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);
const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);
vec4 res=fract(depth*bit_shift);
res-=res.xxyz*bit_mask;
return res;
}
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}`;c.IncludesShadersStore[Ct]=wt;var Tt=`kernelBlurFragment`,Et=`#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;c.IncludesShadersStore[Tt]=Et;var Dt=`kernelBlurFragment2`,Ot=`#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});
computedWeight=KERNEL_DEP_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;c.IncludesShadersStore[Dt]=Ot;var kt=`kernelBlurPixelShader`,At=`uniform sampler2D textureSampler;
uniform vec2 delta;
varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;
float sampleCoC(in vec2 offset) {
float coc=texture2D(circleOfConfusionSampler,offset).r;
return coc; 
}
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT; 
float factor=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;c.ShadersStore[kt]=At;var jt=`kernelBlurVertex`,Mt=`sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};`;c.IncludesShadersStore[jt]=Mt;var Nt=`kernelBlurVertexShader`,Pt=`attribute vec2 position;
uniform vec2 delta;
varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;c.ShadersStore[Nt]=Pt;var Ft=class e extends H{set kernel(e){this._idealKernel!==e&&(e=Math.max(e,1),this._idealKernel=e,this._kernel=this._nearestBestKernel(e),this._blockCompilation||this._updateParameters())}get kernel(){return this._idealKernel}set packedFloat(e){this._packedFloat!==e&&(this._packedFloat=e,this._blockCompilation||this._updateParameters())}get packedFloat(){return this._packedFloat}getClassName(){return`BlurPostProcess`}constructor(e,t,n,r,i,a=V.BILINEAR_SAMPLINGMODE,o,s,c=0,l=``,u=!1,d=5){super(e,`kernelBlur`,[`delta`,`direction`],[`circleOfConfusionSampler`],r,i,a,o,s,null,c,`kernelBlur`,{varyingCount:0,depCount:0},!0,d),this._blockCompilation=u,this._packedFloat=!1,this._staticDefines=``,this._staticDefines=l,this.direction=t,this.onApplyObservable.add(e=>{this._outputTexture?e.setFloat2(`delta`,1/this._outputTexture.width*this.direction.x,1/this._outputTexture.height*this.direction.y):e.setFloat2(`delta`,1/this.width*this.direction.x,1/this.height*this.direction.y)}),this.kernel=n}updateEffect(e=null,t=null,n=null,r,i,a){this._updateParameters(i,a)}_updateParameters(e,t){let n=this._kernel,r=(n-1)/2,i=[],a=[],o=0;for(let e=0;e<n;e++){let t=e/(n-1),s=this._gaussianWeight(t*2-1);i[e]=e-r,a[e]=s,o+=s}for(let e=0;e<a.length;e++)a[e]/=o;let s=[],c=[],l=[];for(let e=0;e<=r;e+=2){let t=Math.min(e+1,Math.floor(r));if(e===t)l.push({o:i[e],w:a[e]});else{let n=t===r,o=a[e]+a[t]*(n?.5:1),s=i[e]+1/(1+a[e]/a[t]);s===0?(l.push({o:i[e],w:a[e]}),l.push({o:i[e+1],w:a[e+1]})):(l.push({o:s,w:o}),l.push({o:-s,w:o}))}}for(let e=0;e<l.length;e++)c[e]=l[e].o,s[e]=l[e].w;i=c,a=s;let u=this.getEngine().getCaps().maxVaryingVectors,d=Math.max(u,0)-1,f=Math.min(i.length,d),p=``;p+=this._staticDefines,this._staticDefines.indexOf(`DOF`)!=-1&&(p+=`#define CENTER_WEIGHT ${this._glslFloat(a[f-1])}\r
`,f--);for(let e=0;e<f;e++)p+=`#define KERNEL_OFFSET${e} ${this._glslFloat(i[e])}\r
`,p+=`#define KERNEL_WEIGHT${e} ${this._glslFloat(a[e])}\r
`;let m=0;for(let e=d;e<i.length;e++)p+=`#define KERNEL_DEP_OFFSET${m} ${this._glslFloat(i[e])}\r
`,p+=`#define KERNEL_DEP_WEIGHT${m} ${this._glslFloat(a[e])}\r
`,m++;this.packedFloat&&(p+=`#define PACKEDFLOAT 1`),this._blockCompilation=!1,super.updateEffect(p,null,null,{varyingCount:f,depCount:m},e,t)}_nearestBestKernel(e){let t=Math.round(e);for(let e of[t,t-1,t+1,t-2,t+2])if(e%2!=0&&Math.floor(e/2)%2==0&&e>0)return Math.max(e,3);return Math.max(t,3)}_gaussianWeight(e){let t=.3333333333333333,n=Math.sqrt(2*Math.PI)*t,r=-(e*e/(2*t*t));return 1/n*Math.exp(r)}_glslFloat(e,t=8){return e.toFixed(t).replace(/0+$/,``)}static _Parse(t,n,r,i){return f.Parse(()=>new e(t.name,t.direction,t.kernel,t.options,n,t.renderTargetSamplingMode,r.getEngine(),t.reusable,t.textureType,void 0,!1),t,r,i)}};E([k(`kernel`)],Ft.prototype,`_kernel`,void 0),E([k(`packedFloat`)],Ft.prototype,`_packedFloat`,void 0),E([ye()],Ft.prototype,`direction`,void 0),te(`BABYLON.BlurPostProcess`,Ft);var It=class{constructor(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}unBindMesh(){this._mesh=null}addFallback(e,t){this._defines[e]||(e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e),this._defines[e]=[]),this._defines[e].push(t)}addCPUSkinningFallback(e,t){this._mesh=t,e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e)}get hasMoreFallbacks(){return this._currentRank<=this._maxRank}reduce(e,t){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,e=e.replace(`#define NUM_BONE_INFLUENCERS `+this._mesh.numBoneInfluencers,`#define NUM_BONE_INFLUENCERS 0`),t._bonesComputationForcedToCPU=!0;let n=this._mesh.getScene();for(let e=0;e<n.meshes.length;e++){let r=n.meshes[e];if(!r.material){!this._mesh.material&&r.computeBonesUsingShaders&&r.numBoneInfluencers>0&&(r.computeBonesUsingShaders=!1);continue}if(!(!r.computeBonesUsingShaders||r.numBoneInfluencers===0)){if(r.material.getEffect()===t)r.computeBonesUsingShaders=!1;else if(r.subMeshes){for(let e of r.subMeshes)if(e.effect===t){r.computeBonesUsingShaders=!1;break}}}}}else{let t=this._defines[this._currentRank];if(t)for(let n=0;n<t.length;n++)e=e.replace(`#define `+t[n],``);this._currentRank++}return e}},Lt=`bayerDitherFunctions`,Rt=`float bayerDither2(vec2 _P) {
return mod(2.0*_P.y+_P.x+1.0,4.0);
}
float bayerDither4(vec2 _P) {
vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);
}
float bayerDither8(vec2 _P) {
vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);
}
`;c.IncludesShadersStore[Lt]=Rt;var zt=`shadowMapFragmentExtraDeclaration`,Bt=`#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform float softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;
varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;c.IncludesShadersStore[zt]=Bt;var Vt=`clipPlaneFragmentDeclaration`,Ht=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;c.IncludesShadersStore[Vt]=Ht;var Ut=`clipPlaneFragment`,Wt=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{
discard;
}
#endif
`;c.IncludesShadersStore[Ut]=Wt;var Gt=`shadowMapFragment`,Kt=`float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;c.IncludesShadersStore[Gt]=Kt;var qt=`shadowMapPixelShader`,Jt=`#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
float alphaFromAlphaTexture=texture2D(diffuseSampler,vUV).a;
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE)
discard;
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM) discard;
#endif
#endif
#include<shadowMapFragment>
}`;c.ShadersStore[qt]=Jt;var Yt=`bonesDeclaration`,Xt=`#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;
attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;
attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform sampler2D boneSampler;
uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{
float offset=index *4.0;
float dx=1.0/boneTextureWidth;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));
return mat4(m0,m1,m2,m3);
}
#endif
#endif
#endif
`;c.IncludesShadersStore[Yt]=Xt;var Zt=`bakedVertexAnimationDeclaration`,Qt=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;
uniform vec2 bakedVertexAnimationTextureSizeInverted;
uniform vec4 bakedVertexAnimationSettings;
uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{
float offset=index*4.0;
float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;
float dx=bakedVertexAnimationTextureSizeInverted.x;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));
return mat4(m0,m1,m2,m3);
}
#endif
`;c.IncludesShadersStore[Zt]=Qt;var $t=`morphTargetsVertexGlobalDeclaration`,en=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
precision mediump sampler2DArray; 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];
uniform vec3 morphTargetTextureInfo;
uniform sampler2DArray morphTargets;
vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);
float x=vertexIndex-y*morphTargetTextureInfo.y;
vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);
return texture(morphTargets,textureUV).xyz;
}
#endif
#endif
`;c.IncludesShadersStore[$t]=en;var tn=`morphTargetsVertexDeclaration`,nn=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#endif
#endif
`;c.IncludesShadersStore[tn]=nn;var rn=`helperFunctions`,an=`const float PI=3.1415926535897932384626433832795;
const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;
const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;
const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);
const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {
vec3 i0=inMatrix[0];
vec3 i1=inMatrix[1];
vec3 i2=inMatrix[2];
mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);
return outMatrix;
}
mat3 inverseMat3(mat3 inMatrix) {
float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];
float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];
float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];
float b01=a22*a11-a12*a21;
float b11=-a22*a10+a12*a20;
float b21=a21*a10-a11*a20;
float det=a00*b01+a01*b11+a02*b21;
return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;
}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{
vec3 nearZeroSection=0.0773993808*color;
vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{
vec3 nearZeroSection=12.92*color;
vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;
float remainingSection=pow(0.947867299*(color+0.055),2.4);
return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;
float remainingSection=1.055*pow(color,0.41666)-0.055;
return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{
return value*value;
}
vec3 square(vec3 value)
{
return value*value;
}
float pow5(float value) {
float sq=value*value;
return sq*sq*value;
}
float getLuminance(vec3 color)
{
return clamp(dot(color,LuminanceEncodeApprox),0.,1.);
}
float getRand(vec2 seed) {
return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);
}
float dither(vec2 seed,float varianceAmount) {
float rand=getRand(seed);
float normVariance=varianceAmount/255.0;
float dither=mix(-normVariance,normVariance,rand);
return dither;
}
const float rgbdMaxRange=255.0;
vec4 toRGBD(vec3 color) {
float maxRGB=maxEps(max(color.r,max(color.g,color.b)));
float D =max(rgbdMaxRange/maxRGB,1.);
D =clamp(floor(D)/255.0,0.,1.);
vec3 rgb=color.rgb*D;
rgb=toGammaSpace(rgb);
return vec4(clamp(rgb,0.,1.),D); 
}
vec3 fromRGBD(vec4 rgbd) {
rgbd.rgb=toLinearSpace(rgbd.rgb);
return rgbd.rgb/rgbd.a;
}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {
vec3 invOrigVec=vec3(1.0,1.0,1.0)/origVec;
vec3 halfSize=cubeSize*0.5;
vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;
vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;
vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);
float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);
vec3 intersectPositionWS=vertexPos+origVec*distance;
return intersectPositionWS-cubePos;
}
`;c.IncludesShadersStore[rn]=an;var on=`sceneVertexDeclaration`,sn=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;
uniform mat4 projection;
uniform vec4 vEyePosition;
`;c.IncludesShadersStore[on]=sn;var cn=`meshVertexDeclaration`,ln=`uniform mat4 world;
uniform float visibility;
`;c.IncludesShadersStore[cn]=ln;var un=`shadowMapVertexDeclaration`,dn=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;c.IncludesShadersStore[un]=dn;var fn=`sceneUboDeclaration`,pn=`layout(std140,column_major) uniform;
uniform Scene {
mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;
mat4 projection;
vec4 vEyePosition;
};
`;c.IncludesShadersStore[fn]=pn;var mn=`meshUboDeclaration`,hn=`#ifdef WEBGL2
uniform mat4 world;
uniform float visibility;
#else
layout(std140,column_major) uniform;
uniform Mesh
{
mat4 world;
float visibility;
};
#endif
#define WORLD_UBO
`;c.IncludesShadersStore[mn]=hn;var gn=`shadowMapUboDeclaration`,_n=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;c.IncludesShadersStore[gn]=_n;var vn=`shadowMapVertexExtraDeclaration`,yn=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;c.IncludesShadersStore[vn]=yn;var bn=`clipPlaneVertexDeclaration`,xn=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;
varying float fClipDistance6;
#endif
`;c.IncludesShadersStore[bn]=xn;var Sn=`morphTargetsVertexGlobal`,Cn=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;c.IncludesShadersStore[Sn]=Cn;var wn=`morphTargetsVertex`,Tn=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE 
vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
positionUpdated+=(readVector3FromRawSampler({X},vertexID)-position)*morphTargetInfluences[{X}];
vertexID+=1.0;
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler({X},vertexID) -normal)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler({X},vertexID).xy-uv)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler({X},vertexID) -tangent.xyz)*morphTargetInfluences[{X}];
#endif
#else
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;c.IncludesShadersStore[wn]=Tn;var En=`instancesVertex`,Dn=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;c.IncludesShadersStore[En]=Dn;var On=`bonesVertex`,kn=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;c.IncludesShadersStore[On]=kn;var An=`bakedVertexAnimation`,jn=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;
float VATEndFrame=BVASNAME.y;
float VATOffsetFrame=BVASNAME.z;
float VATSpeed=BVASNAME.w;
float totalFrames=VATEndFrame-VATStartFrame+1.0;
float time=bakedVertexAnimationTime*VATSpeed/totalFrames;
float frameCorrection=time<1.0 ? 0.0 : 1.0;
float numOfFrames=totalFrames-frameCorrection;
float VATFrameNum=fract(time)*numOfFrames;
VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);
VATFrameNum=floor(VATFrameNum);
VATFrameNum+=VATStartFrame+frameCorrection;
mat4 VATInfluence;
VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;
}
#endif
`;c.IncludesShadersStore[An]=jn;var Mn=`shadowMapVertexNormalBias`,Nn=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;
vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);
float sinNLSM=sqrt(1.0-ndlSM*ndlSM);
float normalBiasSM=biasAndScaleSM.y*sinNLSM;
worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;c.IncludesShadersStore[Mn]=Nn;var Pn=`shadowMapVertexMetric`,Fn=`#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;
gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;c.IncludesShadersStore[Pn]=Fn;var In=`clipPlaneVertex`,Ln=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;c.IncludesShadersStore[In]=Ln;var Rn=`shadowMapVertexShader`,zn=`attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));
vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;c.ShadersStore[Rn]=zn;var Bn=`depthBoxBlurPixelShader`,Vn=`varying vec2 vUV;
uniform sampler2D textureSampler;
uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
vec4 colorDepth=vec4(0.0);
for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);
gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));
}`;c.ShadersStore[Bn]=Vn;var Hn=`shadowMapFragmentSoftTransparentShadow`,Un=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alpha) discard;
#endif
`;c.IncludesShadersStore[Hn]=Un;var U=class e{get bias(){return this._bias}set bias(e){this._bias=e}get normalBias(){return this._normalBias}set normalBias(e){this._normalBias=e}get blurBoxOffset(){return this._blurBoxOffset}set blurBoxOffset(e){this._blurBoxOffset!==e&&(this._blurBoxOffset=e,this._disposeBlurPostProcesses())}get blurScale(){return this._blurScale}set blurScale(e){this._blurScale!==e&&(this._blurScale=e,this._disposeBlurPostProcesses())}get blurKernel(){return this._blurKernel}set blurKernel(e){this._blurKernel!==e&&(this._blurKernel=e,this._disposeBlurPostProcesses())}get useKernelBlur(){return this._useKernelBlur}set useKernelBlur(e){this._useKernelBlur!==e&&(this._useKernelBlur=e,this._disposeBlurPostProcesses())}get depthScale(){return this._depthScale===void 0?this._light.getDepthScale():this._depthScale}set depthScale(e){this._depthScale=e}_validateFilter(e){return e}get filter(){return this._filter}set filter(t){if(t=this._validateFilter(t),this._light.needCube()){if(t===e.FILTER_BLUREXPONENTIALSHADOWMAP){this.useExponentialShadowMap=!0;return}if(t===e.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP){this.useCloseExponentialShadowMap=!0;return}if(t===e.FILTER_PCF||t===e.FILTER_PCSS){this.usePoissonSampling=!0;return}}if((t===e.FILTER_PCF||t===e.FILTER_PCSS)&&!this._scene.getEngine()._features.supportShadowSamplers){this.usePoissonSampling=!0;return}this._filter!==t&&(this._filter=t,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get usePoissonSampling(){return this.filter===e.FILTER_POISSONSAMPLING}set usePoissonSampling(t){let n=this._validateFilter(e.FILTER_POISSONSAMPLING);!t&&this.filter!==e.FILTER_POISSONSAMPLING||(this.filter=t?n:e.FILTER_NONE)}get useExponentialShadowMap(){return this.filter===e.FILTER_EXPONENTIALSHADOWMAP}set useExponentialShadowMap(t){let n=this._validateFilter(e.FILTER_EXPONENTIALSHADOWMAP);!t&&this.filter!==e.FILTER_EXPONENTIALSHADOWMAP||(this.filter=t?n:e.FILTER_NONE)}get useBlurExponentialShadowMap(){return this.filter===e.FILTER_BLUREXPONENTIALSHADOWMAP}set useBlurExponentialShadowMap(t){let n=this._validateFilter(e.FILTER_BLUREXPONENTIALSHADOWMAP);!t&&this.filter!==e.FILTER_BLUREXPONENTIALSHADOWMAP||(this.filter=t?n:e.FILTER_NONE)}get useCloseExponentialShadowMap(){return this.filter===e.FILTER_CLOSEEXPONENTIALSHADOWMAP}set useCloseExponentialShadowMap(t){let n=this._validateFilter(e.FILTER_CLOSEEXPONENTIALSHADOWMAP);!t&&this.filter!==e.FILTER_CLOSEEXPONENTIALSHADOWMAP||(this.filter=t?n:e.FILTER_NONE)}get useBlurCloseExponentialShadowMap(){return this.filter===e.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP}set useBlurCloseExponentialShadowMap(t){let n=this._validateFilter(e.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP);!t&&this.filter!==e.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP||(this.filter=t?n:e.FILTER_NONE)}get usePercentageCloserFiltering(){return this.filter===e.FILTER_PCF}set usePercentageCloserFiltering(t){let n=this._validateFilter(e.FILTER_PCF);!t&&this.filter!==e.FILTER_PCF||(this.filter=t?n:e.FILTER_NONE)}get filteringQuality(){return this._filteringQuality}set filteringQuality(e){this._filteringQuality!==e&&(this._filteringQuality=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get useContactHardeningShadow(){return this.filter===e.FILTER_PCSS}set useContactHardeningShadow(t){let n=this._validateFilter(e.FILTER_PCSS);!t&&this.filter!==e.FILTER_PCSS||(this.filter=t?n:e.FILTER_NONE)}get contactHardeningLightSizeUVRatio(){return this._contactHardeningLightSizeUVRatio}set contactHardeningLightSizeUVRatio(e){this._contactHardeningLightSizeUVRatio=e}get darkness(){return this._darkness}set darkness(e){this.setDarkness(e)}getDarkness(){return this._darkness}setDarkness(e){return this._darkness=e>=1?1:e<=0?0:e,this}get transparencyShadow(){return this._transparencyShadow}set transparencyShadow(e){this.setTransparencyShadow(e)}setTransparencyShadow(e){return this._transparencyShadow=e,this}getShadowMap(){return this._shadowMap}getShadowMapForRendering(){return this._shadowMap2?this._shadowMap2:this._shadowMap}getClassName(){return e.CLASSNAME}addShadowCaster(e,t=!0){if(!this._shadowMap)return this;if(this._shadowMap.renderList||(this._shadowMap.renderList=[]),this._shadowMap.renderList.indexOf(e)===-1&&this._shadowMap.renderList.push(e),t)for(let t of e.getChildMeshes())this._shadowMap.renderList.indexOf(t)===-1&&this._shadowMap.renderList.push(t);return this}removeShadowCaster(e,t=!0){if(!this._shadowMap||!this._shadowMap.renderList)return this;let n=this._shadowMap.renderList.indexOf(e);if(n!==-1&&this._shadowMap.renderList.splice(n,1),t)for(let t of e.getChildren())this.removeShadowCaster(t);return this}getLight(){return this._light}_getCamera(){return this._camera??this._scene.activeCamera}get mapSize(){return this._mapSize}set mapSize(e){this._mapSize=e,this._light._markMeshesAsLightDirty(),this.recreateShadowMap()}constructor(t,n,r,i){this.onBeforeShadowMapRenderObservable=new D,this.onAfterShadowMapRenderObservable=new D,this.onBeforeShadowMapRenderMeshObservable=new D,this.onAfterShadowMapRenderMeshObservable=new D,this._bias=5e-5,this._normalBias=0,this._blurBoxOffset=1,this._blurScale=2,this._blurKernel=1,this._useKernelBlur=!1,this._filter=e.FILTER_NONE,this._filteringQuality=e.QUALITY_HIGH,this._contactHardeningLightSizeUVRatio=.1,this._darkness=0,this._transparencyShadow=!1,this.enableSoftTransparentShadow=!1,this.useOpacityTextureForTransparentShadow=!1,this.frustumEdgeFalloff=0,this.forceBackFacesOnly=!1,this._lightDirection=j.Zero(),this._viewMatrix=A.Zero(),this._projectionMatrix=A.Zero(),this._transformMatrix=A.Zero(),this._cachedPosition=new j(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cachedDirection=new j(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._currentFaceIndex=0,this._currentFaceIndexCache=0,this._defaultTextureMatrix=A.Identity(),this._mapSize=t,this._light=n,this._scene=n.getScene(),this._camera=i??null;let a=n._shadowGenerators;a||=n._shadowGenerators=new Map,a.set(this._camera,this),this.id=n.id,this._useUBO=this._scene.getEngine().supportsUniformBuffers,this._useUBO&&(this._sceneUBOs=[],this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for Shadow Generator (light "${this._light.name}")`))),e._SceneComponentInitialization(this._scene);let o=this._scene.getEngine().getCaps();this._textureType=r?o.textureFloatRender&&o.textureFloatLinearFiltering?1:o.textureHalfFloatRender&&o.textureHalfFloatLinearFiltering?2:0:o.textureHalfFloatRender&&o.textureHalfFloatLinearFiltering?2:o.textureFloatRender&&o.textureFloatLinearFiltering?1:0,this._initializeGenerator(),this._applyFilterValues()}_initializeGenerator(){this._light._markMeshesAsLightDirty(),this._initializeShadowMap()}_createTargetRenderTexture(){let e=this._scene.getEngine();e._features.supportDepthStencilTexture?(this._shadowMap=new bt(this._light.name+`_shadowMap`,this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube(),void 0,!1,!1),this._shadowMap.createDepthStencilTexture(e.useReverseDepthBuffer?516:513,!0)):this._shadowMap=new bt(this._light.name+`_shadowMap`,this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube())}_initializeShadowMap(){if(this._createTargetRenderTexture(),this._shadowMap===null)return;this._shadowMap.wrapU=V.CLAMP_ADDRESSMODE,this._shadowMap.wrapV=V.CLAMP_ADDRESSMODE,this._shadowMap.anisotropicFilteringLevel=1,this._shadowMap.updateSamplingMode(V.BILINEAR_SAMPLINGMODE),this._shadowMap.renderParticles=!1,this._shadowMap.ignoreCameraViewport=!0,this._storedUniqueId&&(this._shadowMap.uniqueId=this._storedUniqueId),this._shadowMap.customRenderFunction=this._renderForShadowMap.bind(this),this._shadowMap.customIsReadyFunction=()=>!0;let t=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.add(()=>{var e;this._currentSceneUBO=this._scene.getSceneUniformBuffer(),(e=t._debugPushGroup)==null||e.call(t,`shadow map generation for pass id ${t.currentRenderPassId}`,1)}),this._shadowMap.onBeforeRenderObservable.add(n=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[0]),this._currentFaceIndex=n,this._filter===e.FILTER_PCF&&t.setColorWrite(!1),this.getTransformMatrix(),this._scene.setTransformMatrix(this._viewMatrix,this._projectionMatrix),this._useUBO&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onAfterUnbindObservable.add(()=>{var n,r;if(this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._currentSceneUBO),this._scene.updateTransformMatrix(),this._filter===e.FILTER_PCF&&t.setColorWrite(!0),!this.useBlurExponentialShadowMap&&!this.useBlurCloseExponentialShadowMap){(n=t._debugPopGroup)==null||n.call(t,1);return}let i=this.getShadowMapForRendering();i&&(this._scene.postProcessManager.directRender(this._blurPostProcesses,i.renderTarget,!0),t.unBindFramebuffer(i.renderTarget,!0),(r=t._debugPopGroup)==null||r.call(t,1))});let n=new Ae(0,0,0,0),r=new Ae(1,1,1,1);this._shadowMap.onClearObservable.add(t=>{this._filter===e.FILTER_PCF?t.clear(r,!1,!0,!1):this.useExponentialShadowMap||this.useBlurExponentialShadowMap?t.clear(n,!0,!0,!1):t.clear(r,!0,!0,!1)}),this._shadowMap.onResizeObservable.add(e=>{this._storedUniqueId=this._shadowMap.uniqueId,this._mapSize=e.getRenderSize(),this._light._markMeshesAsLightDirty(),this.recreateShadowMap()});for(let e=m.MIN_RENDERINGGROUPS;e<m.MAX_RENDERINGGROUPS;e++)this._shadowMap.setRenderingAutoClearDepthStencil(e,!1)}_initializeBlurRTTAndPostProcesses(){let e=this._scene.getEngine(),t=this._mapSize/this.blurScale;(!this.useKernelBlur||this.blurScale!==1)&&(this._shadowMap2=new bt(this._light.name+`_shadowMap2`,t,this._scene,!1,!0,this._textureType,void 0,void 0,!1),this._shadowMap2.wrapU=V.CLAMP_ADDRESSMODE,this._shadowMap2.wrapV=V.CLAMP_ADDRESSMODE,this._shadowMap2.updateSamplingMode(V.BILINEAR_SAMPLINGMODE)),this.useKernelBlur?(this._kernelBlurXPostprocess=new Ft(this._light.name+`KernelBlurX`,new ie(1,0),this.blurKernel,1,null,V.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.width=t,this._kernelBlurXPostprocess.height=t,this._kernelBlurXPostprocess.externalTextureSamplerBinding=!0,this._kernelBlurXPostprocess.onApplyObservable.add(e=>{e.setTexture(`textureSampler`,this._shadowMap)}),this._kernelBlurYPostprocess=new Ft(this._light.name+`KernelBlurY`,new ie(0,1),this.blurKernel,1,null,V.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.autoClear=!1,this._kernelBlurYPostprocess.autoClear=!1,this._textureType===0&&(this._kernelBlurXPostprocess.packedFloat=!0,this._kernelBlurYPostprocess.packedFloat=!0),this._blurPostProcesses=[this._kernelBlurXPostprocess,this._kernelBlurYPostprocess]):(this._boxBlurPostprocess=new H(this._light.name+`DepthBoxBlur`,`depthBoxBlur`,[`screenSize`,`boxOffset`],[],1,null,V.BILINEAR_SAMPLINGMODE,e,!1,`#define OFFSET `+this._blurBoxOffset,this._textureType),this._boxBlurPostprocess.externalTextureSamplerBinding=!0,this._boxBlurPostprocess.onApplyObservable.add(e=>{e.setFloat2(`screenSize`,t,t),e.setTexture(`textureSampler`,this._shadowMap)}),this._boxBlurPostprocess.autoClear=!1,this._blurPostProcesses=[this._boxBlurPostprocess])}_renderForShadowMap(e,t,n,r){let i;if(r.length)for(i=0;i<r.length;i++)this._renderSubMeshForShadowMap(r.data[i]);for(i=0;i<e.length;i++)this._renderSubMeshForShadowMap(e.data[i]);for(i=0;i<t.length;i++)this._renderSubMeshForShadowMap(t.data[i]);if(this._transparencyShadow)for(i=0;i<n.length;i++)this._renderSubMeshForShadowMap(n.data[i],!0);else for(i=0;i<n.length;i++)n.data[i].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}_bindCustomEffectForRenderSubMeshForShadowMap(e,t,n){t.setMatrix(`viewProjection`,this.getTransformMatrix())}_renderSubMeshForShadowMap(e,t=!1){let n=e.getRenderingMesh(),r=e.getEffectiveMesh(),i=this._scene,o=i.getEngine(),s=e.getMaterial();if(r._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!s||e.verticesCount===0||e._renderId===i.getRenderId())return;let c=r._getWorldMatrixDeterminant()<0,l=n.overrideMaterialSideOrientation??s.sideOrientation;c&&(l=+(l===0));let u=l===0;o.setState(s.backFaceCulling,void 0,void 0,u,s.cullBackFaces);let d=n._getInstancesRenderList(e._id,!!e.getReplacementMesh());if(d.mustReturn)return;let f=o.getCaps().instancedArrays&&(d.visibleInstances[e._id]!==null&&d.visibleInstances[e._id]!==void 0||n.hasThinInstances);if(!(this.customAllowRendering&&!this.customAllowRendering(e))){if(this.isReady(e,f,t)){e._renderId=i.getRenderId();let c=s.shadowDepthWrapper,l=c?.getEffect(e,this,o.currentRenderPassId)??e._getDrawWrapper(),u=a.GetEffect(l);o.enableEffect(l),f||n._bind(e,u,s.fillMode),this.getTransformMatrix(),u.setFloat3(`biasAndScaleSM`,this.bias,this.normalBias,this.depthScale),this.getLight().getTypeID()===R.LIGHTTYPEID_DIRECTIONALLIGHT?u.setVector3(`lightDataSM`,this._cachedDirection):u.setVector3(`lightDataSM`,this._cachedPosition);let p=this._getCamera();if(p&&u.setFloat2(`depthValuesSM`,this.getLight().getDepthMinZ(p),this.getLight().getDepthMinZ(p)+this.getLight().getDepthMaxZ(p)),t&&this.enableSoftTransparentShadow&&u.setFloat(`softTransparentShadowSM`,r.visibility*s.alpha),c)e._setMainDrawWrapperOverride(l),c.standalone?c.baseMaterial.bindForSubMesh(r.getWorldMatrix(),n,e):s.bindForSubMesh(r.getWorldMatrix(),n,e),e._setMainDrawWrapperOverride(null);else{if(this._opacityTexture&&(u.setTexture(`diffuseSampler`,this._opacityTexture),u.setMatrix(`diffuseMatrix`,this._opacityTexture.getTextureMatrix()||this._defaultTextureMatrix)),n.useBones&&n.computeBonesUsingShaders&&n.skeleton){let e=n.skeleton;if(e.isUsingTextureForMatrices){let t=e.getTransformMatrixTexture(n);if(!t)return;u.setTexture(`boneSampler`,t),u.setFloat(`boneTextureWidth`,4*(e.bones.length+1))}else u.setMatrices(`mBones`,e.getTransformMatrices(n))}M.BindMorphTargetParameters(n,u),n.morphTargetManager&&n.morphTargetManager.isUsingTextureForTargets&&n.morphTargetManager._bind(u),ne(u,s,i)}!this._useUBO&&!c&&this._bindCustomEffectForRenderSubMeshForShadowMap(e,u,r),M.BindSceneUniformBuffer(u,this._scene.getSceneUniformBuffer()),this._scene.getSceneUniformBuffer().bindUniformBuffer();let m=r.getWorldMatrix();f&&(r.getMeshUniformBuffer().bindToEffect(u,`Mesh`),r.transferToEffect(m)),this.forceBackFacesOnly&&o.setState(!0,0,!1,!0,s.cullBackFaces),this.onBeforeShadowMapRenderMeshObservable.notifyObservers(n),this.onBeforeShadowMapRenderObservable.notifyObservers(u),n._processRendering(r,e,u,s.fillMode,d,f,(e,t)=>{r!==n&&!e?(n.getMeshUniformBuffer().bindToEffect(u,`Mesh`),n.transferToEffect(t)):(r.getMeshUniformBuffer().bindToEffect(u,`Mesh`),r.transferToEffect(e?t:m))}),this.forceBackFacesOnly&&o.setState(!0,0,!1,!1,s.cullBackFaces),this.onAfterShadowMapRenderObservable.notifyObservers(u),this.onAfterShadowMapRenderMeshObservable.notifyObservers(n)}else this._shadowMap&&this._shadowMap.resetRefreshCounter()}}_applyFilterValues(){this._shadowMap&&(this.filter===e.FILTER_NONE||this.filter===e.FILTER_PCSS?this._shadowMap.updateSamplingMode(V.NEAREST_SAMPLINGMODE):this._shadowMap.updateSamplingMode(V.BILINEAR_SAMPLINGMODE))}forceCompilation(e,t){let n={useInstances:!1,...t},r=this.getShadowMap();if(!r){e&&e(this);return}let i=r.renderList;if(!i){e&&e(this);return}let a=[];for(let e of i)a.push(...e.subMeshes);if(a.length===0){e&&e(this);return}let o=0,s=()=>{if(!(!this._scene||!this._scene.getEngine())){for(;this.isReady(a[o],n.useInstances,a[o].getMaterial()?.needAlphaBlendingForMesh(a[o].getMesh())??!1);)if(o++,o>=a.length){e&&e(this);return}setTimeout(s,16)}};s()}forceCompilationAsync(e){return new Promise(t=>{this.forceCompilation(()=>{t()},e)})}_isReadyCustomDefines(e,t,n){}_prepareShadowDefines(e,t,n,i){n.push(`#define SM_LIGHTTYPE_`+this._light.getClassName().toUpperCase()),n.push(`#define SM_FLOAT `+(this._textureType===0?`0`:`1`)),n.push(`#define SM_ESM `+(this.useExponentialShadowMap||this.useBlurExponentialShadowMap?`1`:`0`)),n.push(`#define SM_DEPTHTEXTURE `+(this.usePercentageCloserFiltering||this.useContactHardeningShadow?`1`:`0`));let a=e.getMesh();return n.push(`#define SM_NORMALBIAS `+(this.normalBias&&a.isVerticesDataPresent(r.NormalKind)?`1`:`0`)),n.push(`#define SM_DIRECTIONINLIGHTDATA `+(this.getLight().getTypeID()===R.LIGHTTYPEID_DIRECTIONALLIGHT?`1`:`0`)),n.push(`#define SM_USEDISTANCE `+(this._light.needCube()?`1`:`0`)),n.push(`#define SM_SOFTTRANSPARENTSHADOW `+(this.enableSoftTransparentShadow&&i?`1`:`0`)),this._isReadyCustomDefines(n,e,t),n}isReady(t,n,i){let a=t.getMaterial(),o=a?.shadowDepthWrapper;if(this._opacityTexture=null,!a)return!1;let s=[];if(this._prepareShadowDefines(t,n,s,i),o){if(!o.isReadyForSubMesh(t,s,this,n,this._scene.getEngine().currentRenderPassId))return!1}else{let i=t._getDrawWrapper(void 0,!0),o=i.effect,c=i.defines,l=[r.PositionKind],u=t.getMesh();this.normalBias&&u.isVerticesDataPresent(r.NormalKind)&&(l.push(r.NormalKind),s.push(`#define NORMAL`),u.nonUniformScaling&&s.push(`#define NONUNIFORMSCALING`));let d=a.needAlphaTesting();if((d||a.needAlphaBlending())&&(this._opacityTexture=this.useOpacityTextureForTransparentShadow?a.opacityTexture:a.getAlphaTestTexture(),this._opacityTexture)){if(!this._opacityTexture.isReady())return!1;let t=a.alphaCutOff??e.DEFAULT_ALPHA_CUTOFF;s.push(`#define ALPHATEXTURE`),d&&s.push(`#define ALPHATESTVALUE ${t}${t%1==0?`.`:``}`),u.isVerticesDataPresent(r.UVKind)&&(l.push(r.UVKind),s.push(`#define UV1`)),u.isVerticesDataPresent(r.UV2Kind)&&this._opacityTexture.coordinatesIndex===1&&(l.push(r.UV2Kind),s.push(`#define UV2`))}let f=new It;if(u.useBones&&u.computeBonesUsingShaders&&u.skeleton){l.push(r.MatricesIndicesKind),l.push(r.MatricesWeightsKind),u.numBoneInfluencers>4&&(l.push(r.MatricesIndicesExtraKind),l.push(r.MatricesWeightsExtraKind));let e=u.skeleton;s.push(`#define NUM_BONE_INFLUENCERS `+u.numBoneInfluencers),u.numBoneInfluencers>0&&f.addCPUSkinningFallback(0,u),e.isUsingTextureForMatrices?s.push(`#define BONETEXTURE`):s.push(`#define BonesPerMesh `+(e.bones.length+1))}else s.push(`#define NUM_BONE_INFLUENCERS 0`);let p=u.morphTargetManager,m=0;if(p&&p.numInfluencers>0&&(s.push(`#define MORPHTARGETS`),m=p.numInfluencers,s.push(`#define NUM_MORPH_INFLUENCERS `+m),p.isUsingTextureForTargets&&s.push(`#define MORPHTARGETS_TEXTURE`),M.PrepareAttributesForMorphTargetsInfluencers(l,u,m)),b(a,this._scene,s),n&&(s.push(`#define INSTANCES`),M.PushAttributesForInstances(l),t.getRenderingMesh().hasThinInstances&&s.push(`#define THIN_INSTANCES`)),this.customShaderOptions&&this.customShaderOptions.defines)for(let e of this.customShaderOptions.defines)s.indexOf(e)===-1&&s.push(e);let h=s.join(`
`);if(c!==h){c=h;let e=`shadowMap`,t=[`world`,`mBones`,`viewProjection`,`diffuseMatrix`,`lightDataSM`,`depthValuesSM`,`biasAndScaleSM`,`morphTargetInfluences`,`boneTextureWidth`,`softTransparentShadowSM`,`morphTargetTextureInfo`,`morphTargetTextureIndices`],n=[`diffuseSampler`,`boneSampler`,`morphTargets`],r=[`Scene`,`Mesh`];if(_(t),this.customShaderOptions){if(e=this.customShaderOptions.shaderName,this.customShaderOptions.attributes)for(let e of this.customShaderOptions.attributes)l.indexOf(e)===-1&&l.push(e);if(this.customShaderOptions.uniforms)for(let e of this.customShaderOptions.uniforms)t.indexOf(e)===-1&&t.push(e);if(this.customShaderOptions.samplers)for(let e of this.customShaderOptions.samplers)n.indexOf(e)===-1&&n.push(e)}let a=this._scene.getEngine();o=a.createEffect(e,{attributes:l,uniformsNames:t,uniformBuffersNames:r,samplers:n,defines:h,fallbacks:f,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:m}},a),i.setEffect(o,c)}if(!o.isReady())return!1}return(this.useBlurExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(!this._blurPostProcesses||!this._blurPostProcesses.length)&&this._initializeBlurRTTAndPostProcesses(),!(this._kernelBlurXPostprocess&&!this._kernelBlurXPostprocess.isReady()||this._kernelBlurYPostprocess&&!this._kernelBlurYPostprocess.isReady()||this._boxBlurPostprocess&&!this._boxBlurPostprocess.isReady())}prepareDefines(t,n){let r=this._scene,i=this._light;!r.shadowsEnabled||!i.shadowEnabled||(t[`SHADOW`+n]=!0,this.useContactHardeningShadow?(t[`SHADOWPCSS`+n]=!0,this._filteringQuality===e.QUALITY_LOW?t[`SHADOWLOWQUALITY`+n]=!0:this._filteringQuality===e.QUALITY_MEDIUM&&(t[`SHADOWMEDIUMQUALITY`+n]=!0)):this.usePercentageCloserFiltering?(t[`SHADOWPCF`+n]=!0,this._filteringQuality===e.QUALITY_LOW?t[`SHADOWLOWQUALITY`+n]=!0:this._filteringQuality===e.QUALITY_MEDIUM&&(t[`SHADOWMEDIUMQUALITY`+n]=!0)):this.usePoissonSampling?t[`SHADOWPOISSON`+n]=!0:this.useExponentialShadowMap||this.useBlurExponentialShadowMap?t[`SHADOWESM`+n]=!0:(this.useCloseExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(t[`SHADOWCLOSEESM`+n]=!0),i.needCube()&&(t[`SHADOWCUBE`+n]=!0))}bindShadowLight(t,n){let r=this._light;if(!this._scene.shadowsEnabled||!r.shadowEnabled)return;let i=this._getCamera();if(!i)return;let a=this.getShadowMap();a&&(r.needCube()||n.setMatrix(`lightMatrix`+t,this.getTransformMatrix()),this._filter===e.FILTER_PCF?(n.setDepthStencilTexture(`shadowSampler`+t,this.getShadowMapForRendering()),r._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),a.getSize().width,1/a.getSize().width,this.frustumEdgeFalloff,t)):this._filter===e.FILTER_PCSS?(n.setDepthStencilTexture(`shadowSampler`+t,this.getShadowMapForRendering()),n.setTexture(`depthSampler`+t,this.getShadowMapForRendering()),r._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),1/a.getSize().width,this._contactHardeningLightSizeUVRatio*a.getSize().width,this.frustumEdgeFalloff,t)):(n.setTexture(`shadowSampler`+t,this.getShadowMapForRendering()),r._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),this.blurScale/a.getSize().width,this.depthScale,this.frustumEdgeFalloff,t)),r._uniformBuffer.updateFloat2(`depthValues`,this.getLight().getDepthMinZ(i),this.getLight().getDepthMinZ(i)+this.getLight().getDepthMaxZ(i),t))}getTransformMatrix(){let e=this._scene;if(this._currentRenderId===e.getRenderId()&&this._currentFaceIndexCache===this._currentFaceIndex)return this._transformMatrix;this._currentRenderId=e.getRenderId(),this._currentFaceIndexCache=this._currentFaceIndex;let t=this._light.position;if(this._light.computeTransformedInformation()&&(t=this._light.transformedPosition),j.NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex),this._lightDirection),Math.abs(j.Dot(this._lightDirection,j.Up()))===1&&(this._lightDirection.z=1e-13),this._light.needProjectionMatrixCompute()||!this._cachedPosition||!this._cachedDirection||!t.equals(this._cachedPosition)||!this._lightDirection.equals(this._cachedDirection)){this._cachedPosition.copyFrom(t),this._cachedDirection.copyFrom(this._lightDirection),A.LookAtLHToRef(t,t.add(this._lightDirection),j.Up(),this._viewMatrix);let e=this.getShadowMap();if(e){let t=e.renderList;t&&this._light.setShadowProjectionMatrix(this._projectionMatrix,this._viewMatrix,t)}this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix)}return this._transformMatrix}recreateShadowMap(){let e=this._shadowMap;if(!e)return;let t=e.renderList;if(this._disposeRTTandPostProcesses(),this._initializeGenerator(),this.filter=this._filter,this._applyFilterValues(),t){this._shadowMap.renderList||(this._shadowMap.renderList=[]);for(let e of t)this._shadowMap.renderList.push(e)}else this._shadowMap.renderList=null}_disposeBlurPostProcesses(){this._shadowMap2&&=(this._shadowMap2.dispose(),null),this._boxBlurPostprocess&&=(this._boxBlurPostprocess.dispose(),null),this._kernelBlurXPostprocess&&=(this._kernelBlurXPostprocess.dispose(),null),this._kernelBlurYPostprocess&&=(this._kernelBlurYPostprocess.dispose(),null),this._blurPostProcesses=[]}_disposeRTTandPostProcesses(){this._shadowMap&&=(this._shadowMap.dispose(),null),this._disposeBlurPostProcesses()}_disposeSceneUBOs(){if(this._sceneUBOs){for(let e of this._sceneUBOs)e.dispose();this._sceneUBOs=[]}}dispose(){if(this._disposeRTTandPostProcesses(),this._disposeSceneUBOs(),this._light){if(this._light._shadowGenerators){let e=this._light._shadowGenerators.entries();for(let t=e.next();t.done!==!0;t=e.next()){let[e,n]=t.value;n===this&&this._light._shadowGenerators.delete(e)}this._light._shadowGenerators.size===0&&(this._light._shadowGenerators=null)}this._light._markMeshesAsLightDirty()}this.onBeforeShadowMapRenderMeshObservable.clear(),this.onBeforeShadowMapRenderObservable.clear(),this.onAfterShadowMapRenderMeshObservable.clear(),this.onAfterShadowMapRenderObservable.clear()}serialize(){let e={},t=this.getShadowMap();if(!t)return e;if(e.className=this.getClassName(),e.lightId=this._light.id,e.cameraId=this._camera?.id,e.id=this.id,e.mapSize=t.getRenderSize(),e.forceBackFacesOnly=this.forceBackFacesOnly,e.darkness=this.getDarkness(),e.transparencyShadow=this._transparencyShadow,e.frustumEdgeFalloff=this.frustumEdgeFalloff,e.bias=this.bias,e.normalBias=this.normalBias,e.usePercentageCloserFiltering=this.usePercentageCloserFiltering,e.useContactHardeningShadow=this.useContactHardeningShadow,e.contactHardeningLightSizeUVRatio=this.contactHardeningLightSizeUVRatio,e.filteringQuality=this.filteringQuality,e.useExponentialShadowMap=this.useExponentialShadowMap,e.useBlurExponentialShadowMap=this.useBlurExponentialShadowMap,e.useCloseExponentialShadowMap=this.useBlurExponentialShadowMap,e.useBlurCloseExponentialShadowMap=this.useBlurExponentialShadowMap,e.usePoissonSampling=this.usePoissonSampling,e.depthScale=this.depthScale,e.blurBoxOffset=this.blurBoxOffset,e.blurKernel=this.blurKernel,e.blurScale=this.blurScale,e.useKernelBlur=this.useKernelBlur,e.renderList=[],t.renderList)for(let n=0;n<t.renderList.length;n++){let r=t.renderList[n];e.renderList.push(r.id)}return e}static Parse(t,n,r){let i=n.getLightById(t.lightId),a=t.cameraId===void 0?null:n.getCameraById(t.cameraId),o=r?r(t.mapSize,i,a):new e(t.mapSize,i,void 0,a),s=o.getShadowMap();for(let e=0;e<t.renderList.length;e++)n.getMeshesById(t.renderList[e]).forEach(function(e){s&&(s.renderList||=[],s.renderList.push(e))});return t.id!==void 0&&(o.id=t.id),o.forceBackFacesOnly=!!t.forceBackFacesOnly,t.darkness!==void 0&&o.setDarkness(t.darkness),t.transparencyShadow&&o.setTransparencyShadow(!0),t.frustumEdgeFalloff!==void 0&&(o.frustumEdgeFalloff=t.frustumEdgeFalloff),t.bias!==void 0&&(o.bias=t.bias),t.normalBias!==void 0&&(o.normalBias=t.normalBias),t.usePercentageCloserFiltering?o.usePercentageCloserFiltering=!0:t.useContactHardeningShadow?o.useContactHardeningShadow=!0:t.usePoissonSampling?o.usePoissonSampling=!0:t.useExponentialShadowMap?o.useExponentialShadowMap=!0:t.useBlurExponentialShadowMap?o.useBlurExponentialShadowMap=!0:t.useCloseExponentialShadowMap?o.useCloseExponentialShadowMap=!0:t.useBlurCloseExponentialShadowMap?o.useBlurCloseExponentialShadowMap=!0:t.useVarianceShadowMap?o.useExponentialShadowMap=!0:t.useBlurVarianceShadowMap&&(o.useBlurExponentialShadowMap=!0),t.contactHardeningLightSizeUVRatio!==void 0&&(o.contactHardeningLightSizeUVRatio=t.contactHardeningLightSizeUVRatio),t.filteringQuality!==void 0&&(o.filteringQuality=t.filteringQuality),t.depthScale&&(o.depthScale=t.depthScale),t.blurScale&&(o.blurScale=t.blurScale),t.blurBoxOffset&&(o.blurBoxOffset=t.blurBoxOffset),t.useKernelBlur&&(o.useKernelBlur=t.useKernelBlur),t.blurKernel&&(o.blurKernel=t.blurKernel),o}};U.CLASSNAME=`ShadowGenerator`,U.FILTER_NONE=0,U.FILTER_EXPONENTIALSHADOWMAP=1,U.FILTER_POISSONSAMPLING=2,U.FILTER_BLUREXPONENTIALSHADOWMAP=3,U.FILTER_CLOSEEXPONENTIALSHADOWMAP=4,U.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP=5,U.FILTER_PCF=6,U.FILTER_PCSS=7,U.QUALITY_HIGH=0,U.QUALITY_MEDIUM=1,U.QUALITY_LOW=2,U.DEFAULT_ALPHA_CUTOFF=.5,U._SceneComponentInitialization=e=>{throw p(`ShadowGeneratorSceneComponent`)};var Wn=`depthPixelShader`,Gn=`#ifdef ALPHATEST
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vec4 vViewPos;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
gl_FragColor=pack(vViewPos.z);
#else
gl_FragColor=vec4(vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;c.ShadersStore[Wn]=Gn;var Kn=`instancesDeclaration`,qn=`#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
attribute vec4 previousWorld0;
attribute vec4 previousWorld1;
attribute vec4 previousWorld2;
attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
uniform mat4 previousWorld;
#endif
#endif
`;c.IncludesShadersStore[Kn]=qn;var Jn=`depthVertexShader`,Yn=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;
uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;
varying vec4 vViewPos;
#endif
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
}
`;c.ShadersStore[Jn]=Yn;var Xn=class e{setMaterialForRendering(e,t){this._depthMap.setMaterialForRendering(e,t)}constructor(t,n=1,r=null,i=!1,a=V.TRILINEAR_SAMPLINGMODE,o=!1,s){this.enabled=!0,this.forceDepthWriteTransparentMeshes=!1,this.useOnlyInActiveCamera=!1,this.reverseCulling=!1,this._scene=t,this._storeNonLinearDepth=i,this._storeCameraSpaceZ=o,this.isPacked=n===0,this.clearColor=this.isPacked?new Ae(1,1,1,1):new Ae(o?1e8:1,0,0,1),e._SceneComponentInitialization(this._scene);let c=t.getEngine();this._camera=r,a!==V.NEAREST_SAMPLINGMODE&&(n===1&&!c._caps.textureFloatLinearFiltering&&(a=V.NEAREST_SAMPLINGMODE),n===2&&!c._caps.textureHalfFloatLinearFiltering&&(a=V.NEAREST_SAMPLINGMODE));let l=this.isPacked||!c._features.supportExtendedTextureFormats?5:6;this._depthMap=new bt(s??`DepthRenderer`,{width:c.getRenderWidth(),height:c.getRenderHeight()},this._scene,!1,!0,n,!1,a,void 0,void 0,void 0,l),this._depthMap.wrapU=V.CLAMP_ADDRESSMODE,this._depthMap.wrapV=V.CLAMP_ADDRESSMODE,this._depthMap.refreshRate=1,this._depthMap.renderParticles=!1,this._depthMap.renderList=null,this._depthMap.activeCamera=this._camera,this._depthMap.ignoreCameraViewport=!0,this._depthMap.useCameraPostProcesses=!1,this._depthMap.onClearObservable.add(e=>{e.clear(this.clearColor,!0,!0,!0)}),this._depthMap.onBeforeBindObservable.add(()=>{var e;(e=c._debugPushGroup)==null||e.call(c,`depth renderer`,1)}),this._depthMap.onAfterUnbindObservable.add(()=>{var e;(e=c._debugPopGroup)==null||e.call(c,1)}),this._depthMap.customIsReadyFunction=(e,t,n)=>{if((n||t===0)&&e.subMeshes)for(let t=0;t<e.subMeshes.length;++t){let n=e.subMeshes[t],r=n.getRenderingMesh(),i=r._getInstancesRenderList(n._id,!!n.getReplacementMesh()),a=c.getCaps().instancedArrays&&(i.visibleInstances[n._id]!==null&&i.visibleInstances[n._id]!==void 0||r.hasThinInstances);if(!this.isReady(n,a))return!1}return!0};let u=e=>{let t=e.getRenderingMesh(),n=e.getEffectiveMesh(),r=this._scene,i=r.getEngine(),a=e.getMaterial();if(n._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!a||n.infiniteDistance||a.disableDepthWrite||e.verticesCount===0||e._renderId===r.getRenderId())return;let o=n._getWorldMatrixDeterminant()<0,s=t.overrideMaterialSideOrientation??a.sideOrientation;o&&(s=+(s===0));let c=s===0;i.setState(a.backFaceCulling,0,!1,c,this.reverseCulling?!a.cullBackFaces:a.cullBackFaces);let l=t._getInstancesRenderList(e._id,!!e.getReplacementMesh());if(l.mustReturn)return;let u=i.getCaps().instancedArrays&&(l.visibleInstances[e._id]!==null&&l.visibleInstances[e._id]!==void 0||t.hasThinInstances),d=this._camera||r.activeCamera;if(this.isReady(e,u)&&d){e._renderId=r.getRenderId();let o=n._internalAbstractMeshDataInfo._materialForRenderPass?.[i.currentRenderPassId],s=e._getDrawWrapper();!s&&o&&(s=o._getDrawWrapper());let c=d.mode===P.ORTHOGRAPHIC_CAMERA;if(!s)return;let f=s.effect;i.enableEffect(s),u||t._bind(e,f,a.fillMode),o?o.bindForSubMesh(n.getWorldMatrix(),n,e):(f.setMatrix(`viewProjection`,r.getTransformMatrix()),f.setMatrix(`world`,n.getWorldMatrix()),this._storeCameraSpaceZ&&f.setMatrix(`view`,r.getViewMatrix()));let p,m;if(c?(p=!i.useReverseDepthBuffer&&i.isNDCHalfZRange?0:1,m=i.useReverseDepthBuffer&&i.isNDCHalfZRange?0:1):(p=i.useReverseDepthBuffer&&i.isNDCHalfZRange?d.minZ:i.isNDCHalfZRange?0:d.minZ,m=i.useReverseDepthBuffer&&i.isNDCHalfZRange?0:d.maxZ),f.setFloat2(`depthValues`,p,p+m),!o){if(a.needAlphaTesting()){let e=a.getAlphaTestTexture();e&&(f.setTexture(`diffuseSampler`,e),f.setMatrix(`diffuseMatrix`,e.getTextureMatrix()))}if(t.useBones&&t.computeBonesUsingShaders&&t.skeleton){let e=t.skeleton;if(e.isUsingTextureForMatrices){let n=e.getTransformMatrixTexture(t);if(!n)return;f.setTexture(`boneSampler`,n),f.setFloat(`boneTextureWidth`,4*(e.bones.length+1))}else f.setMatrices(`mBones`,e.getTransformMatrices(t))}ne(f,a,r),M.BindMorphTargetParameters(t,f),t.morphTargetManager&&t.morphTargetManager.isUsingTextureForTargets&&t.morphTargetManager._bind(f)}t._processRendering(n,e,f,a.fillMode,l,u,(e,t)=>f.setMatrix(`world`,t))}};this._depthMap.customRenderFunction=(e,t,n,r)=>{let i;if(r.length)for(i=0;i<r.length;i++)u(r.data[i]);for(i=0;i<e.length;i++)u(e.data[i]);for(i=0;i<t.length;i++)u(t.data[i]);if(this.forceDepthWriteTransparentMeshes)for(i=0;i<n.length;i++)u(n.data[i]);else for(i=0;i<n.length;i++)n.data[i].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}}isReady(e,t){let n=this._scene.getEngine(),i=e.getMesh(),a=i.getScene(),o=i._internalAbstractMeshDataInfo._materialForRenderPass?.[n.currentRenderPassId];if(o)return o.isReadyForSubMesh(i,e,t);let s=e.getMaterial();if(!s||s.disableDepthWrite)return!1;let c=[],l=[r.PositionKind];if(s&&s.needAlphaTesting()&&s.getAlphaTestTexture()&&(c.push(`#define ALPHATEST`),i.isVerticesDataPresent(r.UVKind)&&(l.push(r.UVKind),c.push(`#define UV1`)),i.isVerticesDataPresent(r.UV2Kind)&&(l.push(r.UV2Kind),c.push(`#define UV2`))),i.useBones&&i.computeBonesUsingShaders){l.push(r.MatricesIndicesKind),l.push(r.MatricesWeightsKind),i.numBoneInfluencers>4&&(l.push(r.MatricesIndicesExtraKind),l.push(r.MatricesWeightsExtraKind)),c.push(`#define NUM_BONE_INFLUENCERS `+i.numBoneInfluencers),c.push(`#define BonesPerMesh `+(i.skeleton?i.skeleton.bones.length+1:0));let t=e.getRenderingMesh().skeleton;t!=null&&t.isUsingTextureForMatrices&&c.push(`#define BONETEXTURE`)}else c.push(`#define NUM_BONE_INFLUENCERS 0`);let u=i.morphTargetManager,d=0;u&&u.numInfluencers>0&&(d=u.numInfluencers,c.push(`#define MORPHTARGETS`),c.push(`#define NUM_MORPH_INFLUENCERS `+d),u.isUsingTextureForTargets&&c.push(`#define MORPHTARGETS_TEXTURE`),M.PrepareAttributesForMorphTargetsInfluencers(l,i,d)),t&&(c.push(`#define INSTANCES`),M.PushAttributesForInstances(l),e.getRenderingMesh().hasThinInstances&&c.push(`#define THIN_INSTANCES`)),this._storeNonLinearDepth&&c.push(`#define NONLINEARDEPTH`),this._storeCameraSpaceZ&&c.push(`#define STORE_CAMERASPACE_Z`),this.isPacked&&c.push(`#define PACKED`),b(s,a,c);let f=e._getDrawWrapper(void 0,!0),p=f.defines,m=c.join(`
`);if(p!==m){let e=[`world`,`mBones`,`boneTextureWidth`,`viewProjection`,`view`,`diffuseMatrix`,`depthValues`,`morphTargetInfluences`,`morphTargetTextureInfo`,`morphTargetTextureIndices`];_(e),f.setEffect(n.createEffect(`depth`,l,e,[`diffuseSampler`,`morphTargets`,`boneSampler`],m,void 0,void 0,void 0,{maxSimultaneousMorphTargets:d}),m)}return f.effect.isReady()}getDepthMap(){return this._depthMap}dispose(){let e=[];for(let t in this._scene._depthRenderer)this._scene._depthRenderer[t]===this&&e.push(t);if(e.length>0){this._depthMap.dispose();for(let t of e)delete this._scene._depthRenderer[t]}}};Xn._SceneComponentInitialization=e=>{throw p(`DepthRendererSceneComponent`)};var Zn=`minmaxReduxPixelShader`,Qn=`varying vec2 vUV;
uniform sampler2D textureSampler;
#if defined(INITIAL)
uniform sampler2D sourceTexture;
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
float f1=texelFetch(sourceTexture,coord,0).r;
float f2=texelFetch(sourceTexture,coord+ivec2(1,0),0).r;
float f3=texelFetch(sourceTexture,coord+ivec2(1,1),0).r;
float f4=texelFetch(sourceTexture,coord+ivec2(0,1),0).r;
float minz=min(min(min(f1,f2),f3),f4);
#ifdef DEPTH_REDUX
float maxz=max(max(max(sign(1.0-f1)*f1,sign(1.0-f2)*f2),sign(1.0-f3)*f3),sign(1.0-f4)*f4);
#else
float maxz=max(max(max(f1,f2),f3),f4);
#endif
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(MAIN)
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
vec2 f1=texelFetch(textureSampler,coord,0).rg;
vec2 f2=texelFetch(textureSampler,coord+ivec2(1,0),0).rg;
vec2 f3=texelFetch(textureSampler,coord+ivec2(1,1),0).rg;
vec2 f4=texelFetch(textureSampler,coord+ivec2(0,1),0).rg;
float minz=min(min(min(f1.x,f2.x),f3.x),f4.x);
float maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(ONEBEFORELAST)
uniform ivec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*vec2(texSize-1));
vec2 f1=texelFetch(textureSampler,coord % texSize,0).rg;
vec2 f2=texelFetch(textureSampler,(coord+ivec2(1,0)) % texSize,0).rg;
vec2 f3=texelFetch(textureSampler,(coord+ivec2(1,1)) % texSize,0).rg;
vec2 f4=texelFetch(textureSampler,(coord+ivec2(0,1)) % texSize,0).rg;
float minz=min(f1.x,f2.x);
float maxz=max(f1.y,f2.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(LAST)
void main(void)
{
glFragColor=vec4(0.);
if (true) { 
discard;
}
}
#endif
`;c.ShadersStore[Zn]=Qn;var $n=class{constructor(e){this.onAfterReductionPerformed=new D,this._forceFullscreenViewport=!0,this._activated=!1,this._camera=e,this._postProcessManager=new xe(e.getScene()),this._onContextRestoredObserver=e.getEngine().onContextRestoredObservable.add(()=>{this._postProcessManager._rebuild()})}get sourceTexture(){return this._sourceTexture}setSourceTexture(e,t,n=2,r=!0){if(e===this._sourceTexture)return;this.dispose(!1),this._sourceTexture=e,this._reductionSteps=[],this._forceFullscreenViewport=r;let i=this._camera.getScene(),a=new H(`Initial reduction phase`,`minmaxRedux`,[`texSize`],[`sourceTexture`],1,null,1,i.getEngine(),!1,`#define INITIAL`+(t?`
#define DEPTH_REDUX`:``),n,void 0,void 0,void 0,7);a.autoClear=!1,a.forceFullscreenViewport=r;let o=this._sourceTexture.getRenderWidth(),s=this._sourceTexture.getRenderHeight();a.onApply=((e,t)=>n=>{n.setTexture(`sourceTexture`,this._sourceTexture),n.setFloat2(`texSize`,e,t)})(o,s),this._reductionSteps.push(a);let c=1;for(;o>1||s>1;){o=Math.max(Math.round(o/2),1),s=Math.max(Math.round(s/2),1);let e=new H(`Reduction phase `+c,`minmaxRedux`,[`texSize`],null,{width:o,height:s},null,1,i.getEngine(),!1,`#define `+(o==1&&s==1?`LAST`:o==1||s==1?`ONEBEFORELAST`:`MAIN`),n,void 0,void 0,void 0,7);e.autoClear=!1,e.forceFullscreenViewport=r,e.onApply=((e,t)=>n=>{e==1||t==1?n.setInt2(`texSize`,e,t):n.setFloat2(`texSize`,e,t)})(o,s),this._reductionSteps.push(e),c++,o==1&&s==1&&e.onAfterRenderObservable.add(((e,t,n)=>{let r=new Float32Array(4*e*t),a={min:0,max:0};return()=>{i.getEngine()._readTexturePixels(n.inputTexture.texture,e,t,-1,0,r,!1),a.min=r[0],a.max=r[1],this.onAfterReductionPerformed.notifyObservers(a)}})(o,s,e))}}get refreshRate(){return this._sourceTexture?this._sourceTexture.refreshRate:-1}set refreshRate(e){this._sourceTexture&&(this._sourceTexture.refreshRate=e)}get activated(){return this._activated}activate(){this._onAfterUnbindObserver||!this._sourceTexture||(this._onAfterUnbindObserver=this._sourceTexture.onAfterUnbindObservable.add(()=>{var e,t;let n=this._camera.getScene().getEngine();(e=n._debugPushGroup)==null||e.call(n,`min max reduction`,1),this._reductionSteps[0].activate(this._camera),this._postProcessManager.directRender(this._reductionSteps,this._reductionSteps[0].inputTexture,this._forceFullscreenViewport),n.unBindFramebuffer(this._reductionSteps[0].inputTexture,!1),(t=n._debugPopGroup)==null||t.call(n,1)}),this._activated=!0)}deactivate(){!this._onAfterUnbindObserver||!this._sourceTexture||(this._sourceTexture.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=null,this._activated=!1)}dispose(e=!0){if(e&&(this.onAfterReductionPerformed.clear(),this._onContextRestoredObserver&&=(this._camera.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),null)),this.deactivate(),this._reductionSteps){for(let e=0;e<this._reductionSteps.length;++e)this._reductionSteps[e].dispose();this._reductionSteps=null}this._postProcessManager&&e&&this._postProcessManager.dispose(),this._sourceTexture=null}},er=class extends $n{get depthRenderer(){return this._depthRenderer}constructor(e){super(e)}setDepthRenderer(e=null,t=2,n=!0){let r=this._camera.getScene();this._depthRenderer&&=(delete r._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),null),e===null&&(r._depthRenderer||={},e=this._depthRenderer=new Xn(r,t,this._camera,!1,1),e.enabled=!1,this._depthRendererId=`minmax`+this._camera.id,r._depthRenderer[this._depthRendererId]=e),super.setSourceTexture(e.getDepthMap(),!0,t,n)}setSourceTexture(e,t,n=2,r=!0){super.setSourceTexture(e,t,n,r)}activate(){this._depthRenderer&&(this._depthRenderer.enabled=!0),super.activate()}deactivate(){super.deactivate(),this._depthRenderer&&(this._depthRenderer.enabled=!1)}dispose(e=!0){if(super.dispose(e),this._depthRenderer&&e){let e=this._depthRenderer.getDepthMap().getScene();e&&delete e._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null}}},tr=j.Up(),nr=j.Zero(),W=new j,rr=new j,ir=new A,ar=class e extends U{_validateFilter(e){return e===U.FILTER_NONE||e===U.FILTER_PCF||e===U.FILTER_PCSS?e:(console.error(`Unsupported filter "`+e+`"!`),U.FILTER_NONE)}get numCascades(){return this._numCascades}set numCascades(t){t=Math.min(Math.max(t,e.MIN_CASCADES_COUNT),e.MAX_CASCADES_COUNT),t!==this._numCascades&&(this._numCascades=t,this.recreateShadowMap(),this._recreateSceneUBOs())}get freezeShadowCastersBoundingInfo(){return this._freezeShadowCastersBoundingInfo}set freezeShadowCastersBoundingInfo(e){this._freezeShadowCastersBoundingInfoObservable&&e&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),!this._freezeShadowCastersBoundingInfoObservable&&!e&&(this._freezeShadowCastersBoundingInfoObservable=this._scene.onBeforeRenderObservable.add(this._computeShadowCastersBoundingInfo.bind(this))),this._freezeShadowCastersBoundingInfo=e,e&&this._computeShadowCastersBoundingInfo()}_computeShadowCastersBoundingInfo(){if(this._scbiMin.copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._scbiMax.copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._shadowMap&&this._shadowMap.renderList){let e=this._shadowMap.renderList;for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let r=n.getBoundingInfo().boundingBox;this._scbiMin.minimizeInPlace(r.minimumWorld),this._scbiMax.maximizeInPlace(r.maximumWorld)}let t=this._scene.meshes;for(let e=0;e<t.length;e++){let n=t[e];if(!n||!n.isVisible||!n.isEnabled||!n.receiveShadows)continue;let r=n.getBoundingInfo().boundingBox;this._scbiMin.minimizeInPlace(r.minimumWorld),this._scbiMax.maximizeInPlace(r.maximumWorld)}}this._shadowCastersBoundingInfo.reConstruct(this._scbiMin,this._scbiMax)}get shadowCastersBoundingInfo(){return this._shadowCastersBoundingInfo}set shadowCastersBoundingInfo(e){this._shadowCastersBoundingInfo=e}setMinMaxDistance(e,t){this._minDistance===e&&this._maxDistance===t||(e>t&&(e=0,t=1),e<0&&(e=0),t>1&&(t=1),this._minDistance=e,this._maxDistance=t,this._breaksAreDirty=!0)}get minDistance(){return this._minDistance}get maxDistance(){return this._maxDistance}getClassName(){return e.CLASSNAME}getCascadeMinExtents(e){return e>=0&&e<this._numCascades?this._cascadeMinExtents[e]:null}getCascadeMaxExtents(e){return e>=0&&e<this._numCascades?this._cascadeMaxExtents[e]:null}get shadowMaxZ(){return this._getCamera()?this._shadowMaxZ:0}set shadowMaxZ(e){let t=this._getCamera();if(!t){this._shadowMaxZ=e;return}this._shadowMaxZ===e||e<t.minZ||e>t.maxZ||(this._shadowMaxZ=e,this._light._markMeshesAsLightDirty(),this._breaksAreDirty=!0)}get debug(){return this._debug}set debug(e){this._debug=e,this._light._markMeshesAsLightDirty()}get depthClamp(){return this._depthClamp}set depthClamp(e){this._depthClamp=e}get cascadeBlendPercentage(){return this._cascadeBlendPercentage}set cascadeBlendPercentage(e){this._cascadeBlendPercentage=e,this._light._markMeshesAsLightDirty()}get lambda(){return this._lambda}set lambda(e){let t=Math.min(Math.max(e,0),1);this._lambda!=t&&(this._lambda=t,this._breaksAreDirty=!0)}getCascadeViewMatrix(e){return e>=0&&e<this._numCascades?this._viewMatrices[e]:null}getCascadeProjectionMatrix(e){return e>=0&&e<this._numCascades?this._projectionMatrices[e]:null}getCascadeTransformMatrix(e){return e>=0&&e<this._numCascades?this._transformMatrices[e]:null}setDepthRenderer(e){this._depthRenderer=e,this._depthReducer&&this._depthReducer.setDepthRenderer(this._depthRenderer)}get autoCalcDepthBounds(){return this._autoCalcDepthBounds}set autoCalcDepthBounds(e){let t=this._getCamera();if(t){if(this._autoCalcDepthBounds=e,!e){this._depthReducer&&this._depthReducer.deactivate(),this.setMinMaxDistance(0,1);return}this._depthReducer||(this._depthReducer=new er(t),this._depthReducer.onAfterReductionPerformed.add(e=>{let t=e.min,n=e.max;t>=n&&(t=0,n=1),(t!=this._minDistance||n!=this._maxDistance)&&this.setMinMaxDistance(t,n)}),this._depthReducer.setDepthRenderer(this._depthRenderer)),this._depthReducer.activate()}}get autoCalcDepthBoundsRefreshRate(){return(this._depthReducer?.depthRenderer)?.getDepthMap().refreshRate??-1}set autoCalcDepthBoundsRefreshRate(e){var t;(t=this._depthReducer)!=null&&t.depthRenderer&&(this._depthReducer.depthRenderer.getDepthMap().refreshRate=e)}splitFrustum(){this._breaksAreDirty=!0}_splitFrustum(){let e=this._getCamera();if(!e)return;let t=e.minZ,n=e.maxZ,r=n-t,i=this._minDistance,a=this._shadowMaxZ<n&&this._shadowMaxZ>=t?Math.min((this._shadowMaxZ-t)/(n-t),this._maxDistance):this._maxDistance,o=t+i*r,s=t+a*r,c=s-o,l=s/o;for(let e=0;e<this._cascades.length;++e){let n=(e+1)/this._numCascades,a=o*l**n,s=o+c*n,u=this._lambda*(a-s)+s;this._cascades[e].prevBreakDistance=e===0?i:this._cascades[e-1].breakDistance,this._cascades[e].breakDistance=(u-t)/r,this._viewSpaceFrustumsZ[e]=u,this._frustumLengths[e]=(this._cascades[e].breakDistance-this._cascades[e].prevBreakDistance)*r}this._breaksAreDirty=!1}_computeMatrices(){let e=this._scene;if(!this._getCamera())return;j.NormalizeToRef(this._light.getShadowDirection(0),this._lightDirection),Math.abs(j.Dot(this._lightDirection,j.Up()))===1&&(this._lightDirection.z=1e-13),this._cachedDirection.copyFrom(this._lightDirection);let t=e.getEngine().useReverseDepthBuffer;for(let n=0;n<this._numCascades;++n){this._computeFrustumInWorldSpace(n),this._computeCascadeFrustum(n),this._cascadeMaxExtents[n].subtractToRef(this._cascadeMinExtents[n],W),this._frustumCenter[n].addToRef(this._lightDirection.scale(this._cascadeMinExtents[n].z),this._shadowCameraPos[n]),A.LookAtLHToRef(this._shadowCameraPos[n],this._frustumCenter[n],tr,this._viewMatrices[n]);let r=0,i=W.z,a=this._shadowCastersBoundingInfo;a.update(this._viewMatrices[n]),i=Math.min(i,a.boundingBox.maximumWorld.z),r=!this._depthClamp||this.filter===U.FILTER_PCSS?Math.min(r,a.boundingBox.minimumWorld.z):Math.max(r,a.boundingBox.minimumWorld.z),A.OrthoOffCenterLHToRef(this._cascadeMinExtents[n].x,this._cascadeMaxExtents[n].x,this._cascadeMinExtents[n].y,this._cascadeMaxExtents[n].y,t?i:r,t?r:i,this._projectionMatrices[n],e.getEngine().isNDCHalfZRange),this._cascadeMinExtents[n].z=r,this._cascadeMaxExtents[n].z=i,this._viewMatrices[n].multiplyToRef(this._projectionMatrices[n],this._transformMatrices[n]),j.TransformCoordinatesToRef(nr,this._transformMatrices[n],W),W.scaleInPlace(this._mapSize/2),rr.copyFromFloats(Math.round(W.x),Math.round(W.y),Math.round(W.z)),rr.subtractInPlace(W).scaleInPlace(2/this._mapSize),A.TranslationToRef(rr.x,rr.y,0,ir),this._projectionMatrices[n].multiplyToRef(ir,this._projectionMatrices[n]),this._viewMatrices[n].multiplyToRef(this._projectionMatrices[n],this._transformMatrices[n]),this._transformMatrices[n].copyToArray(this._transformMatricesAsArray,n*16)}}_computeFrustumInWorldSpace(t){let n=this._getCamera();if(!n)return;let r=this._cascades[t].prevBreakDistance,i=this._cascades[t].breakDistance,a=this._scene.getEngine().isNDCHalfZRange;n.getViewMatrix();let o=A.Invert(n.getTransformationMatrix()),s=this._scene.getEngine().useReverseDepthBuffer?4:0;for(let n=0;n<e._FrustumCornersNDCSpace.length;++n)W.copyFrom(e._FrustumCornersNDCSpace[(n+s)%e._FrustumCornersNDCSpace.length]),a&&W.z===-1&&(W.z=0),j.TransformCoordinatesToRef(W,o,this._frustumCornersWorldSpace[t][n]);for(let n=0;n<e._FrustumCornersNDCSpace.length/2;++n)W.copyFrom(this._frustumCornersWorldSpace[t][n+4]).subtractInPlace(this._frustumCornersWorldSpace[t][n]),rr.copyFrom(W).scaleInPlace(r),W.scaleInPlace(i),W.addInPlace(this._frustumCornersWorldSpace[t][n]),this._frustumCornersWorldSpace[t][n+4].copyFrom(W),this._frustumCornersWorldSpace[t][n].addInPlace(rr)}_computeCascadeFrustum(e){if(this._cascadeMinExtents[e].copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cascadeMaxExtents[e].copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._frustumCenter[e].copyFromFloats(0,0,0),this._getCamera()){for(let t=0;t<this._frustumCornersWorldSpace[e].length;++t)this._frustumCenter[e].addInPlace(this._frustumCornersWorldSpace[e][t]);if(this._frustumCenter[e].scaleInPlace(1/this._frustumCornersWorldSpace[e].length),this.stabilizeCascades){let t=0;for(let n=0;n<this._frustumCornersWorldSpace[e].length;++n){let r=this._frustumCornersWorldSpace[e][n].subtractToRef(this._frustumCenter[e],W).length();t=Math.max(t,r)}t=Math.ceil(t*16)/16,this._cascadeMaxExtents[e].copyFromFloats(t,t,t),this._cascadeMinExtents[e].copyFromFloats(-t,-t,-t)}else{let t=this._frustumCenter[e];this._frustumCenter[e].addToRef(this._lightDirection,W),A.LookAtLHToRef(t,W,tr,ir);for(let t=0;t<this._frustumCornersWorldSpace[e].length;++t)j.TransformCoordinatesToRef(this._frustumCornersWorldSpace[e][t],ir,W),this._cascadeMinExtents[e].minimizeInPlace(W),this._cascadeMaxExtents[e].maximizeInPlace(W)}}}_recreateSceneUBOs(){if(this._disposeSceneUBOs(),this._sceneUBOs)for(let e=0;e<this._numCascades;++e)this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for CSM Shadow Generator (light "${this._light.name}" cascade #${e})`))}static get IsSupported(){let e=ae.LastCreatedEngine;return e?e._features.supportCSM:!1}constructor(t,n,r,i){if(!e.IsSupported){pe.Error(`CascadedShadowMap is not supported by the current engine.`);return}super(t,n,r,i),this.usePercentageCloserFiltering=!0}_initializeGenerator(){this.penumbraDarkness=this.penumbraDarkness??1,this._numCascades=this._numCascades??e.DEFAULT_CASCADES_COUNT,this.stabilizeCascades=this.stabilizeCascades??!1,this._freezeShadowCastersBoundingInfoObservable=this._freezeShadowCastersBoundingInfoObservable??null,this.freezeShadowCastersBoundingInfo=this.freezeShadowCastersBoundingInfo??!1,this._scbiMin=this._scbiMin??new j(0,0,0),this._scbiMax=this._scbiMax??new j(0,0,0),this._shadowCastersBoundingInfo=this._shadowCastersBoundingInfo??new fe(new j(0,0,0),new j(0,0,0)),this._breaksAreDirty=this._breaksAreDirty??!0,this._minDistance=this._minDistance??0,this._maxDistance=this._maxDistance??1,this._currentLayer=this._currentLayer??0,this._shadowMaxZ=this._shadowMaxZ??this._getCamera()?.maxZ??1e4,this._debug=this._debug??!1,this._depthClamp=this._depthClamp??!0,this._cascadeBlendPercentage=this._cascadeBlendPercentage??.1,this._lambda=this._lambda??.5,this._autoCalcDepthBounds=this._autoCalcDepthBounds??!1,this._recreateSceneUBOs(),super._initializeGenerator()}_createTargetRenderTexture(){let e=this._scene.getEngine(),t={width:this._mapSize,height:this._mapSize,layers:this.numCascades};this._shadowMap=new bt(this._light.name+`_CSMShadowMap`,t,this._scene,!1,!0,this._textureType,!1,void 0,!1,!1,void 0),this._shadowMap.createDepthStencilTexture(e.useReverseDepthBuffer?516:513,!0)}_initializeShadowMap(){if(super._initializeShadowMap(),this._shadowMap===null)return;this._transformMatricesAsArray=new Float32Array(this._numCascades*16),this._viewSpaceFrustumsZ=Array(this._numCascades),this._frustumLengths=Array(this._numCascades),this._lightSizeUVCorrection=Array(this._numCascades*2),this._depthCorrection=Array(this._numCascades),this._cascades=[],this._viewMatrices=[],this._projectionMatrices=[],this._transformMatrices=[],this._cascadeMinExtents=[],this._cascadeMaxExtents=[],this._frustumCenter=[],this._shadowCameraPos=[],this._frustumCornersWorldSpace=[];for(let t=0;t<this._numCascades;++t){this._cascades[t]={prevBreakDistance:0,breakDistance:0},this._viewMatrices[t]=A.Zero(),this._projectionMatrices[t]=A.Zero(),this._transformMatrices[t]=A.Zero(),this._cascadeMinExtents[t]=new j,this._cascadeMaxExtents[t]=new j,this._frustumCenter[t]=new j,this._shadowCameraPos[t]=new j,this._frustumCornersWorldSpace[t]=Array(e._FrustumCornersNDCSpace.length);for(let n=0;n<e._FrustumCornersNDCSpace.length;++n)this._frustumCornersWorldSpace[t][n]=new j}let t=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.clear(),this._shadowMap.onBeforeRenderObservable.clear(),this._shadowMap.onBeforeRenderObservable.add(e=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[e]),this._currentLayer=e,this._filter===U.FILTER_PCF&&t.setColorWrite(!1),this._scene.setTransformMatrix(this.getCascadeViewMatrix(e),this.getCascadeProjectionMatrix(e)),this._useUBO&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onBeforeBindObservable.add(()=>{var e;this._currentSceneUBO=this._scene.getSceneUniformBuffer(),(e=t._debugPushGroup)==null||e.call(t,`cascaded shadow map generation for pass id ${t.currentRenderPassId}`,1),this._breaksAreDirty&&this._splitFrustum(),this._computeMatrices()}),this._splitFrustum()}_bindCustomEffectForRenderSubMeshForShadowMap(e,t){t.setMatrix(`viewProjection`,this.getCascadeTransformMatrix(this._currentLayer))}_isReadyCustomDefines(e){e.push(`#define SM_DEPTHCLAMP `+(this._depthClamp&&this._filter!==U.FILTER_PCSS?`1`:`0`))}prepareDefines(e,t){super.prepareDefines(e,t);let n=this._scene,r=this._light;if(!n.shadowsEnabled||!r.shadowEnabled)return;e[`SHADOWCSM`+t]=!0,e[`SHADOWCSMDEBUG`+t]=this.debug,e[`SHADOWCSMNUM_CASCADES`+t]=this.numCascades,e[`SHADOWCSM_RIGHTHANDED`+t]=n.useRightHandedSystem;let i=this._getCamera();i&&this._shadowMaxZ<i.maxZ&&(e[`SHADOWCSMUSESHADOWMAXZ`+t]=!0),this.cascadeBlendPercentage===0&&(e[`SHADOWCSMNOBLEND`+t]=!0)}bindShadowLight(e,t){let n=this._light;if(!this._scene.shadowsEnabled||!n.shadowEnabled)return;let r=this._getCamera();if(!r)return;let i=this.getShadowMap();if(!i)return;let a=i.getSize().width;if(t.setMatrices(`lightMatrix`+e,this._transformMatricesAsArray),t.setArray(`viewFrustumZ`+e,this._viewSpaceFrustumsZ),t.setFloat(`cascadeBlendFactor`+e,this.cascadeBlendPercentage===0?1e4:1/this.cascadeBlendPercentage),t.setArray(`frustumLengths`+e,this._frustumLengths),this._filter===U.FILTER_PCF)t.setDepthStencilTexture(`shadowSampler`+e,i),n._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),a,1/a,this.frustumEdgeFalloff,e);else if(this._filter===U.FILTER_PCSS){for(let e=0;e<this._numCascades;++e)this._lightSizeUVCorrection[e*2+0]=e===0?1:(this._cascadeMaxExtents[0].x-this._cascadeMinExtents[0].x)/(this._cascadeMaxExtents[e].x-this._cascadeMinExtents[e].x),this._lightSizeUVCorrection[e*2+1]=e===0?1:(this._cascadeMaxExtents[0].y-this._cascadeMinExtents[0].y)/(this._cascadeMaxExtents[e].y-this._cascadeMinExtents[e].y),this._depthCorrection[e]=e===0?1:(this._cascadeMaxExtents[e].z-this._cascadeMinExtents[e].z)/(this._cascadeMaxExtents[0].z-this._cascadeMinExtents[0].z);t.setDepthStencilTexture(`shadowSampler`+e,i),t.setTexture(`depthSampler`+e,i),t.setArray2(`lightSizeUVCorrection`+e,this._lightSizeUVCorrection),t.setArray(`depthCorrection`+e,this._depthCorrection),t.setFloat(`penumbraDarkness`+e,this.penumbraDarkness),n._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),1/a,this._contactHardeningLightSizeUVRatio*a,this.frustumEdgeFalloff,e)}else t.setTexture(`shadowSampler`+e,i),n._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),a,1/a,this.frustumEdgeFalloff,e);n._uniformBuffer.updateFloat2(`depthValues`,this.getLight().getDepthMinZ(r),this.getLight().getDepthMinZ(r)+this.getLight().getDepthMaxZ(r),e)}getTransformMatrix(){return this.getCascadeTransformMatrix(0)}dispose(){super.dispose(),this._freezeShadowCastersBoundingInfoObservable&&=(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),null),this._depthReducer&&=(this._depthReducer.dispose(),null)}serialize(){let e=super.serialize(),t=this.getShadowMap();if(!t)return e;if(e.numCascades=this._numCascades,e.debug=this._debug,e.stabilizeCascades=this.stabilizeCascades,e.lambda=this._lambda,e.cascadeBlendPercentage=this.cascadeBlendPercentage,e.depthClamp=this._depthClamp,e.autoCalcDepthBounds=this.autoCalcDepthBounds,e.shadowMaxZ=this._shadowMaxZ,e.penumbraDarkness=this.penumbraDarkness,e.freezeShadowCastersBoundingInfo=this._freezeShadowCastersBoundingInfo,e.minDistance=this.minDistance,e.maxDistance=this.maxDistance,e.renderList=[],t.renderList)for(let n=0;n<t.renderList.length;n++){let r=t.renderList[n];e.renderList.push(r.id)}return e}static Parse(t,n){let r=U.Parse(t,n,(t,n,r)=>new e(t,n,void 0,r));return t.numCascades!==void 0&&(r.numCascades=t.numCascades),t.debug!==void 0&&(r.debug=t.debug),t.stabilizeCascades!==void 0&&(r.stabilizeCascades=t.stabilizeCascades),t.lambda!==void 0&&(r.lambda=t.lambda),t.cascadeBlendPercentage!==void 0&&(r.cascadeBlendPercentage=t.cascadeBlendPercentage),t.depthClamp!==void 0&&(r.depthClamp=t.depthClamp),t.autoCalcDepthBounds!==void 0&&(r.autoCalcDepthBounds=t.autoCalcDepthBounds),t.shadowMaxZ!==void 0&&(r.shadowMaxZ=t.shadowMaxZ),t.penumbraDarkness!==void 0&&(r.penumbraDarkness=t.penumbraDarkness),t.freezeShadowCastersBoundingInfo!==void 0&&(r.freezeShadowCastersBoundingInfo=t.freezeShadowCastersBoundingInfo),t.minDistance!==void 0&&t.maxDistance!==void 0&&r.setMinMaxDistance(t.minDistance,t.maxDistance),r}};ar._FrustumCornersNDCSpace=[new j(-1,1,-1),new j(1,1,-1),new j(1,-1,-1),new j(-1,-1,-1),new j(-1,1,1),new j(1,1,1),new j(1,-1,1),new j(-1,-1,1)],ar.CLASSNAME=`CascadedShadowGenerator`,ar.DEFAULT_CASCADES_COUNT=4,ar.MIN_CASCADES_COUNT=2,ar.MAX_CASCADES_COUNT=4,ar._SceneComponentInitialization=e=>{throw p(`ShadowGeneratorSceneComponent`)},Me.AddParser(ke.NAME_SHADOWGENERATOR,(e,t)=>{if(e.shadowGenerators!==void 0&&e.shadowGenerators!==null)for(let n=0,r=e.shadowGenerators.length;n<r;n++){let r=e.shadowGenerators[n];r.className===ar.CLASSNAME?ar.Parse(r,t):U.Parse(r,t)}});var or=class{constructor(e){this.name=ke.NAME_SHADOWGENERATOR,this.scene=e}register(){this.scene._gatherRenderTargetsStage.registerStep(ke.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR,this,this._gatherRenderTargets)}rebuild(){}serialize(e){e.shadowGenerators=[];let t=this.scene.lights;for(let n of t){let t=n.getShadowGenerators();if(t){let n=t.values();for(let t=n.next();t.done!==!0;t=n.next()){let n=t.value;e.shadowGenerators.push(n.serialize())}}}}addFromContainer(e){}removeFromContainer(e,t){}dispose(){}_gatherRenderTargets(e){let t=this.scene;if(this.scene.shadowsEnabled)for(let n=0;n<t.lights.length;n++){let r=t.lights[n],i=r.getShadowGenerators();if(r.isEnabled()&&r.shadowEnabled&&i){let n=i.values();for(let r=n.next();r.done!==!0;r=n.next()){let n=r.value.getShadowMap();t.textures.indexOf(n)!==-1&&e.push(n)}}}}};U._SceneComponentInitialization=e=>{let t=e._getComponent(ke.NAME_SHADOWGENERATOR);t||(t=new or(e),e._addComponent(t))};var sr={enableShadows:!0};function cr(e=sr){let{enableShadows:t,shadowTransparency:n,intensity:r,scene:i}=e,a=new z(`DirectionalLight`,new j(-.3,-1,.4),i);a.position=new j(-50,65,-50),a.intensity=.65*r;let o=new rt(`HemisphericLight`,new j(1,1,0),i);return o.intensity=.4*r,t&&(a.shadowMinZ=1,a.shadowMaxZ=70,a.shadowGenerator=new U(2048,a),a.shadowGenerator.useCloseExponentialShadowMap=!0,a.shadowGenerator.darkness=n),{directional:a,hemispheric:o}}function lr(e){let t=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],r=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],i=[],a=[],o=e.width||e.size||1,s=e.height||e.size||1,c=e.depth||e.size||1,l=e.wrap||!1,u=e.topBaseAt===void 0?1:e.topBaseAt,d=e.bottomBaseAt===void 0?0:e.bottomBaseAt;u=(u+4)%4,d=(d+4)%4;let f=[2,0,3,1],p=[2,0,1,3],m=f[u],h=p[d],g=[1,-1,1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1];if(l){t=[2,3,0,2,0,1,4,5,6,4,6,7,9,10,11,9,11,8,12,14,15,12,13,14],g=[-1,1,1,1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1];let e=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1]],n=[[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]],r=[17,18,19,16],i=[22,23,20,21];for(;m>0;)e.unshift(e.pop()),r.unshift(r.pop()),m--;for(;h>0;)n.unshift(n.pop()),i.unshift(i.pop()),h--;e=e.flat(),n=n.flat(),g=g.concat(e).concat(n),t.push(r[0],r[2],r[3],r[0],r[1],r[2]),t.push(i[0],i[2],i[3],i[0],i[1],i[2])}let _=[o/2,s/2,c/2];a=g.reduce((e,t,n)=>e.concat(t*_[n%3]),[]);let v=e.sideOrientation===0?0:e.sideOrientation||we.DEFAULTSIDE,y=e.faceUV||[,,,,,,],b=e.faceColors,x=[];for(let e=0;e<6;e++)y[e]===void 0&&(y[e]=new ee(0,0,1,1)),b&&b[e]===void 0&&(b[e]=new Ae(1,1,1,1));for(let e=0;e<6;e++)if(i.push(y[e].z,n.UseOpenGLOrientationForUV?1-y[e].w:y[e].w),i.push(y[e].x,n.UseOpenGLOrientationForUV?1-y[e].w:y[e].w),i.push(y[e].x,n.UseOpenGLOrientationForUV?1-y[e].y:y[e].y),i.push(y[e].z,n.UseOpenGLOrientationForUV?1-y[e].y:y[e].y),b)for(let t=0;t<4;t++)x.push(b[e].r,b[e].g,b[e].b,b[e].a);we._ComputeSides(v,a,t,r,i,e.frontUVs,e.backUVs);let S=new we;return S.indices=t,S.positions=a,S.normals=r,S.uvs=i,b&&(S.colors=v===we.DOUBLESIDE?x.concat(x):x),S}function ur(e,t={},n=null){let r=new h(e,n);return t.sideOrientation=h._GetDefaultSideOrientation(t.sideOrientation),r._originalBuilderSideOrientation=t.sideOrientation,lr(t).applyToMesh(r,t.updatable),r}we.CreateBox=lr,h.CreateBox=(e,t,n=null,r,i)=>ur(e,{size:t,sideOrientation:i,updatable:r},n);var dr=class{constructor(){this.previousWorldMatrices={},this.previousBones={}}static AddUniforms(e){e.push(`previousWorld`,`previousViewProjection`,`mPreviousBones`)}static AddSamplers(e){}bindForSubMesh(e,t,n,r,i){if(t.prePassRenderer&&t.prePassRenderer.enabled&&t.prePassRenderer.currentRTisSceneRT&&t.prePassRenderer.getIndex(2)!==-1){this.previousWorldMatrices[n.uniqueId]||(this.previousWorldMatrices[n.uniqueId]=r.clone()),this.previousViewProjection||(this.previousViewProjection=t.getTransformMatrix().clone(),this.currentViewProjection=t.getTransformMatrix().clone());let i=t.getEngine();this.currentViewProjection.updateFlag===t.getTransformMatrix().updateFlag?this._lastUpdateFrameId!==i.frameId&&(this._lastUpdateFrameId=i.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection)):(this._lastUpdateFrameId=i.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection),this.currentViewProjection.copyFrom(t.getTransformMatrix())),e.setMatrix(`previousWorld`,this.previousWorldMatrices[n.uniqueId]),e.setMatrix(`previousViewProjection`,this.previousViewProjection),this.previousWorldMatrices[n.uniqueId]=r.clone()}}},fr=class extends de{constructor(e,t,n=!0){super(e,t),this._normalMatrix=new A,this._storeEffectOnSubMeshes=n}getEffect(){return this._storeEffectOnSubMeshes?this._activeEffect:super.getEffect()}isReady(e,t){return e?!this._storeEffectOnSubMeshes||!e.subMeshes||e.subMeshes.length===0||this.isReadyForSubMesh(e,e.subMeshes[0],t):!1}_isReadyForSubMesh(e){let t=e.materialDefines;return!!(!this.checkReadyOnEveryCall&&e.effect&&t&&t._renderId===this.getScene().getRenderId())}bindOnlyWorldMatrix(e){this._activeEffect.setMatrix(`world`,e)}bindOnlyNormalMatrix(e){this._activeEffect.setMatrix(`normalMatrix`,e)}bind(e,t){t&&this.bindForSubMesh(e,t,t.subMeshes[0])}_afterBind(e,t=null){super._afterBind(e,t),this.getScene()._cachedEffect=t,t&&(t._forceRebindOnNextCall=!1)}_mustRebind(e,t,n=1){return e.isCachedMaterialInvalid(this,t,n)}dispose(e,t,n){this._activeEffect=void 0,super.dispose(e,t,n)}},G=class{static get DiffuseTextureEnabled(){return this._DiffuseTextureEnabled}static set DiffuseTextureEnabled(e){this._DiffuseTextureEnabled!==e&&(this._DiffuseTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get DetailTextureEnabled(){return this._DetailTextureEnabled}static set DetailTextureEnabled(e){this._DetailTextureEnabled!==e&&(this._DetailTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get DecalMapEnabled(){return this._DecalMapEnabled}static set DecalMapEnabled(e){this._DecalMapEnabled!==e&&(this._DecalMapEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get AmbientTextureEnabled(){return this._AmbientTextureEnabled}static set AmbientTextureEnabled(e){this._AmbientTextureEnabled!==e&&(this._AmbientTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get OpacityTextureEnabled(){return this._OpacityTextureEnabled}static set OpacityTextureEnabled(e){this._OpacityTextureEnabled!==e&&(this._OpacityTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get ReflectionTextureEnabled(){return this._ReflectionTextureEnabled}static set ReflectionTextureEnabled(e){this._ReflectionTextureEnabled!==e&&(this._ReflectionTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get EmissiveTextureEnabled(){return this._EmissiveTextureEnabled}static set EmissiveTextureEnabled(e){this._EmissiveTextureEnabled!==e&&(this._EmissiveTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get SpecularTextureEnabled(){return this._SpecularTextureEnabled}static set SpecularTextureEnabled(e){this._SpecularTextureEnabled!==e&&(this._SpecularTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get BumpTextureEnabled(){return this._BumpTextureEnabled}static set BumpTextureEnabled(e){this._BumpTextureEnabled!==e&&(this._BumpTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get LightmapTextureEnabled(){return this._LightmapTextureEnabled}static set LightmapTextureEnabled(e){this._LightmapTextureEnabled!==e&&(this._LightmapTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get RefractionTextureEnabled(){return this._RefractionTextureEnabled}static set RefractionTextureEnabled(e){this._RefractionTextureEnabled!==e&&(this._RefractionTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get ColorGradingTextureEnabled(){return this._ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(e){this._ColorGradingTextureEnabled!==e&&(this._ColorGradingTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get FresnelEnabled(){return this._FresnelEnabled}static set FresnelEnabled(e){this._FresnelEnabled!==e&&(this._FresnelEnabled=e,o.MarkAllMaterialsAsDirty(4))}static get ClearCoatTextureEnabled(){return this._ClearCoatTextureEnabled}static set ClearCoatTextureEnabled(e){this._ClearCoatTextureEnabled!==e&&(this._ClearCoatTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get ClearCoatBumpTextureEnabled(){return this._ClearCoatBumpTextureEnabled}static set ClearCoatBumpTextureEnabled(e){this._ClearCoatBumpTextureEnabled!==e&&(this._ClearCoatBumpTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get ClearCoatTintTextureEnabled(){return this._ClearCoatTintTextureEnabled}static set ClearCoatTintTextureEnabled(e){this._ClearCoatTintTextureEnabled!==e&&(this._ClearCoatTintTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get SheenTextureEnabled(){return this._SheenTextureEnabled}static set SheenTextureEnabled(e){this._SheenTextureEnabled!==e&&(this._SheenTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get AnisotropicTextureEnabled(){return this._AnisotropicTextureEnabled}static set AnisotropicTextureEnabled(e){this._AnisotropicTextureEnabled!==e&&(this._AnisotropicTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get ThicknessTextureEnabled(){return this._ThicknessTextureEnabled}static set ThicknessTextureEnabled(e){this._ThicknessTextureEnabled!==e&&(this._ThicknessTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get RefractionIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set RefractionIntensityTextureEnabled(e){this._RefractionIntensityTextureEnabled!==e&&(this._RefractionIntensityTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get TranslucencyIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set TranslucencyIntensityTextureEnabled(e){this._TranslucencyIntensityTextureEnabled!==e&&(this._TranslucencyIntensityTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}static get IridescenceTextureEnabled(){return this._IridescenceTextureEnabled}static set IridescenceTextureEnabled(e){this._IridescenceTextureEnabled!==e&&(this._IridescenceTextureEnabled=e,o.MarkAllMaterialsAsDirty(1))}};G._DiffuseTextureEnabled=!0,G._DetailTextureEnabled=!0,G._DecalMapEnabled=!0,G._AmbientTextureEnabled=!0,G._OpacityTextureEnabled=!0,G._ReflectionTextureEnabled=!0,G._EmissiveTextureEnabled=!0,G._SpecularTextureEnabled=!0,G._BumpTextureEnabled=!0,G._LightmapTextureEnabled=!0,G._RefractionTextureEnabled=!0,G._ColorGradingTextureEnabled=!0,G._FresnelEnabled=!0,G._ClearCoatTextureEnabled=!0,G._ClearCoatBumpTextureEnabled=!0,G._ClearCoatTintTextureEnabled=!0,G._SheenTextureEnabled=!0,G._AnisotropicTextureEnabled=!0,G._ThicknessTextureEnabled=!0,G._RefractionIntensityTextureEnabled=!0,G._TranslucencyIntensityTextureEnabled=!0,G._IridescenceTextureEnabled=!0;var pr=`decalFragmentDeclaration`,mr=`#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;c.IncludesShadersStore[pr]=mr;var hr=`defaultFragmentDeclaration`,gr=`uniform vec4 vEyePosition;
uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
uniform vec3 vEmissiveColor;
uniform vec3 vAmbientColor;
uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;
uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;
uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;
uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;
uniform vec4 emissiveRightColor;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;
uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;c.IncludesShadersStore[hr]=gr;var _r=`defaultUboDeclaration`,vr=`layout(std140,column_major) uniform;
uniform Material
{
vec4 diffuseLeftColor;
vec4 diffuseRightColor;
vec4 opacityParts;
vec4 reflectionLeftColor;
vec4 reflectionRightColor;
vec4 refractionLeftColor;
vec4 refractionRightColor;
vec4 emissiveLeftColor;
vec4 emissiveRightColor;
vec2 vDiffuseInfos;
vec2 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vReflectionInfos;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec2 vSpecularInfos;
vec3 vBumpInfos;
mat4 diffuseMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 reflectionMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 specularMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
float pointSize;
float alphaCutOff;
mat4 refractionMatrix;
vec4 vRefractionInfos;
vec3 vRefractionPosition;
vec3 vRefractionSize;
vec4 vSpecularColor;
vec3 vEmissiveColor;
vec4 vDiffuseColor;
vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;c.IncludesShadersStore[_r]=vr;var yr=`prePassDeclaration`,br=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;c.IncludesShadersStore[yr]=br;var xr=`oitDeclaration`,Sr=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;
layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;
uniform sampler2D oitDepthSampler;
uniform sampler2D oitFrontColorSampler;
#endif
`;c.IncludesShadersStore[xr]=Sr;var Cr=`mainUVVaryingDeclaration`,wr=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;c.IncludesShadersStore[Cr]=wr;var Tr=`lightFragmentDeclaration`,Er=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#endif
`;c.IncludesShadersStore[Tr]=Er;var Dr=`lightUboDeclaration`,Or=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X}; 
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;c.IncludesShadersStore[Dr]=Or;var kr=`lightsFragmentFunctions`,Ar=`struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};
lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 lightVectorW;
float attenuation=1.0;
if (lightData.w==0.)
{
vec3 direction=lightData.xyz-vPositionW;
attenuation=max(0.,1.0-length(direction)/range);
lightVectorW=normalize(direction);
}
else
{
lightVectorW=normalize(-lightData.xyz);
}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 direction=lightData.xyz-vPositionW;
vec3 lightVectorW=normalize(direction);
float attenuation=max(0.,1.0-length(direction)/range);
float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));
if (cosAngle>=lightDirection.w)
{
cosAngle=max(0.,pow(cosAngle,lightData.w));
attenuation*=cosAngle;
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;
}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {
lightingInfo result;
float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor;
#endif
return result;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return textureColor;
}`;c.IncludesShadersStore[kr]=Ar;var jr=`shadowsFragmentFunctions`,Mr=`#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{
float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));
return mix(value,1.0,mask);
}
#define inline
float computeShadowCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;
}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
float visibility=1.;
vec3 poissonDisk[4];
poissonDisk[0]=vec3(-1.0,1.0,-1.0);
poissonDisk[1]=vec3(1.0,-1.0,-1.0);
poissonDisk[2]=vec3(-1.0,-1.0,-1.0);
poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);
}
#define inline
float computeShadowWithESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness); 
return esm;
}
#define inline
float computeShadowWithCloseESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return esm;
}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
vec3 uvLayer=vec3(uv.x,uv.y,layer);
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
float visibility=1.;
vec2 poissonDisk[4];
poissonDisk[0]=vec2(-0.94201624,-0.39906216);
poissonDisk[1]=vec2(0.94558609,-0.76890725);
poissonDisk[2]=vec2(-0.094184101,-0.92938870);
poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define GREATEST_LESS_THAN_ONE 0.99999994
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float shadow=texture2D(shadowSampler,uvDepthLayer);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);
shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);
shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);
shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.)
);
const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);
vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec4 offset=vec4(poissonSamplers[i],0.);
offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);
shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));
shadow=mix(darkness,1.,shadow);
if (numBlocker<1.0) {
return 1.0;
}
else
{
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);
float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec3 offset=poissonSamplers[i];
offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);
shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);
}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#endif
#endif
`;c.IncludesShadersStore[jr]=Mr;var Nr=`samplerFragmentDeclaration`,Pr=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;c.IncludesShadersStore[Nr]=Pr;var Fr=`fresnelFunction`,Ir=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{
float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);
return clamp(fresnelTerm,0.,1.);
}
#endif
`;c.IncludesShadersStore[Fr]=Ir;var Lr=`reflectionFunction`,Rr=`vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0); 
}
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(1.0-s,t,0); 
}
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);
vec3 r=normalize(reflect(cameraToVertex,worldNormal));
r=vec3(reflectionMatrix*vec4(r,0));
float lon=atan(r.z,r.x);
float lat=acos(r.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(vec3(view*worldPos));
vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));
vec3 r=reflect(viewDir,viewNormal);
r=vec3(reflectionMatrix*vec4(r,0));
r.z=r.z-1.0;
float m=2.0*length(r);
return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);
}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=worldPos.xyz-eyePosition;
vec3 coords=normalize(reflect(viewDir,worldNormal));
return vec3(reflectionMatrix*vec4(coords,1));
}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*(view*worldPos));
}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*vec4(positionW,1.));
}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;c.IncludesShadersStore[Lr]=Rr;var zr=`imageProcessingDeclaration`,Br=`#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vec2 vInverseScreenSize;
#endif
#ifdef VIGNETTE
uniform vec4 vignetteSettings1;
uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;
uniform vec4 vCameraColorCurveNeutral;
uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif
#ifdef DITHER
uniform float ditherIntensity;
#endif
`;c.IncludesShadersStore[zr]=Br;var Vr=`imageProcessingFunctions`,Hr=`#if defined(COLORGRADING) && !defined(COLORGRADING3D)
/** 
* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.
* sampler3dSetting.x=textureOffset (0.5/textureSize).
* sampler3dSetting.y=textureSize.
*/
#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{
float sliceSize=2.0*sampler3dSetting.x; 
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);
float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;
sliceUV.x+=sliceInteger*sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice0Color=texture2D(colorTransform,sliceUV);
sliceUV.x+=sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice1Color=texture2D(colorTransform,sliceUV);
vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;
}
#endif
#ifdef TONEMAPPING_ACES
const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);
const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108, 1.10813,-0.07276),
vec3(-0.07367,-0.00605, 1.07602)
);
vec3 RRTAndODTFit(vec3 v)
{
vec3 a=v*(v+0.0245786)-0.000090537;
vec3 b=v*(0.983729*v+0.4329510)+0.238081;
return a/b;
}
vec3 ACESFitted(vec3 color)
{
color=ACESInputMat*color;
color=RRTAndODTFit(color);
color=ACESOutputMat*color;
color=saturate(color);
return color;
}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
vec4 applyImageProcessing(vec4 result) {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE
vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;
viewportXY=viewportXY*2.0-1.0;
vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);
float vignetteTerm=dot(vignetteXY1,vignetteXY1);
float vignette=pow(vignetteTerm,vignetteSettings2.w);
vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);
result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#ifdef TONEMAPPING
#ifdef TONEMAPPING_ACES
result.rgb=ACESFitted(result.rgb);
#else
const float tonemappingCalibration=1.590579;
result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
#endif
result.rgb=toGammaSpace(result.rgb);
result.rgb=saturate(result.rgb);
#ifdef CONTRAST
vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);
if (contrast<1.0) {
result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);
} else {
result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);
}
#endif
#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES
float luma=getLuminance(result.rgb);
vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));
vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;
result.rgb*=colorCurve.rgb;
result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
#ifdef DITHER
float rand=getRand(gl_FragCoord.xy*vInverseScreenSize);
float dither=mix(-ditherIntensity,ditherIntensity,rand);
result.rgb=saturate(result.rgb+vec3(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return result;
}`;c.IncludesShadersStore[Vr]=Hr;var Ur=`bumpFragmentMainFunctions`,Wr=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{
mat4 ret=inverse(wMatrix);
ret=transpose(ret);
ret[0][3]=0.;
ret[1][3]=0.;
ret[2][3]=0.;
ret[3]=vec4(0.,0.,0.,1.);
return ret;
}
#else
mat4 toNormalMatrix(mat4 m)
{
float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;
mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;
return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);
}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);
}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{
return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);
}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{
vec3 dp1=dFdx(p);
vec3 dp2=dFdy(p);
vec2 duv1=dFdx(uv);
vec2 duv2=dFdy(uv);
vec3 dp2perp=cross(dp2,normal);
vec3 dp1perp=cross(normal,dp1);
vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;
vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;
tangent*=tangentSpaceParams.x;
bitangent*=tangentSpaceParams.y;
float det=max(dot(tangent,tangent),dot(bitangent,bitangent));
float invmax=det==0.0 ? 0.0 : inversesqrt(det);
return mat3(tangent*invmax,bitangent*invmax,normal);
}
#endif
`;c.IncludesShadersStore[Ur]=Wr;var Gr=`bumpFragmentFunctions`,Kr=`#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;
const float maxSamples=15.;
const int iMaxSamples=15;
vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {
float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;
parallaxLimit*=parallaxScale;
vec2 vOffsetDir=normalize(vViewDirCoT.xy);
vec2 vMaxOffset=vOffsetDir*parallaxLimit;
float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));
float stepSize=1.0/numSamples;
float currRayHeight=1.0;
vec2 vCurrOffset=vec2(0,0);
vec2 vLastOffset=vec2(0,0);
float lastSampledHeight=1.0;
float currSampledHeight=1.0;
bool keepWorking=true;
for (int i=0; i<iMaxSamples; i++)
{
currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;
if (!keepWorking)
{
}
else if (currSampledHeight>currRayHeight)
{
float delta1=currSampledHeight-currRayHeight;
float delta2=(currRayHeight+stepSize)-lastSampledHeight;
float ratio=delta1/(delta1+delta2);
vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;
keepWorking=false;
}
else
{
currRayHeight-=stepSize;
vLastOffset=vCurrOffset;
vCurrOffset+=stepSize*vMaxOffset;
lastSampledHeight=currSampledHeight;
}
}
return vCurrOffset;
}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{
float height=texture2D(bumpSampler,vBumpUV).w;
vec2 texCoordOffset=heightScale*viewDir.xy*height;
return -texCoordOffset;
}
#endif
`;c.IncludesShadersStore[Gr]=Kr;var qr=`logDepthDeclaration`,Jr=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif
`;c.IncludesShadersStore[qr]=Jr;var Yr=`fogFragmentDeclaration`,Xr=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying vec3 vFogDistance;
float CalcFogFactor()
{
float fogCoeff=1.0;
float fogStart=vFogInfos.y;
float fogEnd=vFogInfos.z;
float fogDensity=vFogInfos.w;
float fogDistance=length(vFogDistance);
if (FOGMODE_LINEAR==vFogInfos.x)
{
fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);
}
else if (FOGMODE_EXP==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDensity);
}
else if (FOGMODE_EXP2==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);
}
return clamp(fogCoeff,0.0,1.0);
}
#endif
`;c.IncludesShadersStore[Yr]=Xr;var Zr=`bumpFragment`,Qr=`vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;
mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);
vec2 detailNormalRG=detailColor.wy*2.0-1.0;
float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));
vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);
normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;
vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;
bumpNormal+=vec3(0.0,0.0,1.0);
detailNormal*=vec3(-1.0,-1.0,1.0);
vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;
normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;c.IncludesShadersStore[Zr]=Qr;var $r=`decalFragment`,ei=`#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;c.IncludesShadersStore[$r]=ei;var ti=`depthPrePass`,ni=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif
`;c.IncludesShadersStore[ti]=ni;var ri=`lightFragment`,ii=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,light{X}.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light{X}.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);
info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightSampler{X},textureProjectionMatrix{X});
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {
index{X}=i;
break;
}
}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];
float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};
if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{
index{X}+=1;
float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;
shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;c.IncludesShadersStore[ri]=ii;var ai=`logDepthFragment`,oi=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;c.IncludesShadersStore[ai]=oi;var si=`fogFragment`,ci=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;c.IncludesShadersStore[si]=ci;var li=`oitFragment`,ui=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));
vec2 full=unpackHalf2x16(halfFloat);
fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);
vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;
vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);
depth.rg=vec2(-MAX_DEPTH);
frontColor=lastFrontColor;
backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;
float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;
float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;
}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);
return;
}
#endif
`;c.IncludesShadersStore[li]=ui;var di=`defaultPixelShader`,fi=`#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#define RECIPROCAL_PI2 0.15915494
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
vec4 baseColor=vec4(1.,1.,1.,1.);
vec3 diffuseColor=vDiffuseColor.rgb;
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef DECAL
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;
vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);
specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#else
float glossiness=0.;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;
vec4 refractionLookup=textureCube(refractionCubeSampler,refractionVector);
if (dot(refractionVector,viewDirectionW)<1.0) {
refractionColor=refractionLookup;
}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;
reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);
refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);
alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);
alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);
emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);
diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);
color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
gl_FragData[0]=color; 
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_NORMAL
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULARTERM)
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularMapColor))*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularColor),1.0)*writeGeometryInfo;
#endif
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {
frontColor.rgb+=color.rgb*color.a*alphaMultiplier;
frontColor.a=1.0-alphaMultiplier*(1.0-color.a);
} else {
backColor+=color;
}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;c.ShadersStore[di]=fi;var pi=`decalVertexDeclaration`,mi=`#ifdef DECAL
uniform vec4 vDecalInfos;
uniform mat4 decalMatrix;
#endif
`;c.IncludesShadersStore[pi]=mi;var hi=`defaultVertexDeclaration`,gi=`uniform mat4 viewProjection;
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;c.IncludesShadersStore[hi]=gi;var _i=`uvAttributeDeclaration`,vi=`#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;c.IncludesShadersStore[_i]=vi;var yi=`prePassVertexDeclaration`,bi=`#ifdef PREPASS
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif
`;c.IncludesShadersStore[yi]=bi;var xi=`samplerVertexDeclaration`,Si=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;c.IncludesShadersStore[xi]=Si;var Ci=`bumpVertexDeclaration`,wi=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;c.IncludesShadersStore[Ci]=wi;var Ti=`fogVertexDeclaration`,Ei=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;c.IncludesShadersStore[Ti]=Ei;var Di=`lightVxFragmentDeclaration`,Oi=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#endif
`;c.IncludesShadersStore[Di]=Oi;var ki=`lightVxUboDeclaration`,Ai=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;c.IncludesShadersStore[ki]=Ai;var ji=`prePassVertex`,Mi=`#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#if defined(PREPASS_VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;c.IncludesShadersStore[ji]=Mi;var Ni=`uvVariableDeclaration`,Pi=`#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;c.IncludesShadersStore[Ni]=Pi;var Fi=`samplerVertexImplementation`,Ii=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));
}
#ifdef UV2
else if (v_INFONAME_==1.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2,1.0,0.0));
}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));
}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));
}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));
}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));
}
#endif
#endif
`;c.IncludesShadersStore[Fi]=Ii;var Li=`bumpVertex`,Ri=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;c.IncludesShadersStore[Li]=Ri;var zi=`fogVertex`,Bi=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;c.IncludesShadersStore[zi]=Bi;var Vi=`shadowsVertex`,Hi=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {
vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;c.IncludesShadersStore[Vi]=Hi;var Ui=`vertexColorMixing`,Wi=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;c.IncludesShadersStore[Ui]=Wi;var Gi=`pointCloudVertex`,Ki=`#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;c.IncludesShadersStore[Gi]=Ki;var qi=`logDepthVertex`,Ji=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;c.IncludesShadersStore[qi]=Ji;var Yi=`defaultVertexShader`,Xi=`#include<__decl__defaultVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#include<prePassVertex>
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#include<uvVariableDeclaration>[2..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;c.ShadersStore[Yi]=Xi;var Zi=RegExp(`^([gimus]+)!`),Qi=class e{constructor(e){this._plugins=[],this._activePlugins=[],this._activePluginsForExtraEvents=[],this._material=e,this._scene=e.getScene(),this._engine=this._scene.getEngine()}_addPlugin(t){for(let e=0;e<this._plugins.length;++e)if(this._plugins[e].name===t.name)throw`Plugin "${t.name}" already added to the material "${this._material.name}"!`;if(this._material._uniformBufferLayoutBuilt)throw`The plugin "${t.name}" can't be added to the material "${this._material.name}" because this material has already been used for rendering! Please add plugins to materials before any rendering with this material occurs.`;let n=t.getClassName();e._MaterialPluginClassToMainDefine[n]||(e._MaterialPluginClassToMainDefine[n]=`MATERIALPLUGIN_`+ ++e._MaterialPluginCounter),this._material._callbackPluginEventGeneric=this._handlePluginEvent.bind(this),this._plugins.push(t),this._plugins.sort((e,t)=>e.priority-t.priority),this._codeInjectionPoints={};let r={};r[e._MaterialPluginClassToMainDefine[n]]={type:`boolean`,default:!0};for(let e of this._plugins)e.collectDefines(r),this._collectPointNames(`vertex`,e.getCustomCode(`vertex`)),this._collectPointNames(`fragment`,e.getCustomCode(`fragment`));this._defineNamesFromPlugins=r}_activatePlugin(e){this._activePlugins.indexOf(e)===-1&&(this._activePlugins.push(e),this._activePlugins.sort((e,t)=>e.priority-t.priority),this._material._callbackPluginEventIsReadyForSubMesh=this._handlePluginEventIsReadyForSubMesh.bind(this),this._material._callbackPluginEventPrepareDefinesBeforeAttributes=this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this),this._material._callbackPluginEventPrepareDefines=this._handlePluginEventPrepareDefines.bind(this),this._material._callbackPluginEventBindForSubMesh=this._handlePluginEventBindForSubMesh.bind(this),e.registerForExtraEvents&&(this._activePluginsForExtraEvents.push(e),this._activePluginsForExtraEvents.sort((e,t)=>e.priority-t.priority),this._material._callbackPluginEventHasRenderTargetTextures=this._handlePluginEventHasRenderTargetTextures.bind(this),this._material._callbackPluginEventFillRenderTargetTextures=this._handlePluginEventFillRenderTargetTextures.bind(this),this._material._callbackPluginEventHardBindForSubMesh=this._handlePluginEventHardBindForSubMesh.bind(this)))}getPlugin(e){for(let t=0;t<this._plugins.length;++t)if(this._plugins[t].name===e)return this._plugins[t];return null}_handlePluginEventIsReadyForSubMesh(e){let t=!0;for(let n of this._activePlugins)t&&=n.isReadyForSubMesh(e.defines,this._scene,this._engine,e.subMesh);e.isReadyForSubMesh=t}_handlePluginEventPrepareDefinesBeforeAttributes(e){for(let t of this._activePlugins)t.prepareDefinesBeforeAttributes(e.defines,this._scene,e.mesh)}_handlePluginEventPrepareDefines(e){for(let t of this._activePlugins)t.prepareDefines(e.defines,this._scene,e.mesh)}_handlePluginEventHardBindForSubMesh(e){for(let t of this._activePluginsForExtraEvents)t.hardBindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventBindForSubMesh(e){for(let t of this._activePlugins)t.bindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventHasRenderTargetTextures(e){let t=!1;for(let e of this._activePluginsForExtraEvents)if(t=e.hasRenderTargetTextures(),t)break;e.hasRenderTargetTextures=t}_handlePluginEventFillRenderTargetTextures(e){for(let t of this._activePluginsForExtraEvents)t.fillRenderTargetTextures(e.renderTargets)}_handlePluginEvent(e,n){switch(e){case t.GetActiveTextures:{let e=n;for(let t of this._activePlugins)t.getActiveTextures(e.activeTextures);break}case t.GetAnimatables:{let e=n;for(let t of this._activePlugins)t.getAnimatables(e.animatables);break}case t.HasTexture:{let e=n,t=!1;for(let n of this._activePlugins)if(t=n.hasTexture(e.texture),t)break;e.hasTexture=t;break}case t.Disposed:{let e=n;for(let t of this._plugins)t.dispose(e.forceDisposeTextures);break}case t.GetDefineNames:{let e=n;e.defineNames=this._defineNamesFromPlugins;break}case t.PrepareEffect:{let e=n;for(let t of this._activePlugins)e.fallbackRank=t.addFallbacks(e.defines,e.fallbacks,e.fallbackRank),t.getAttributes(e.attributes,this._scene,e.mesh);this._uniformList.length>0&&e.uniforms.push(...this._uniformList),this._samplerList.length>0&&e.samplers.push(...this._samplerList),this._uboList.length>0&&e.uniformBuffersNames.push(...this._uboList),e.customCode=this._injectCustomCode(e.customCode);break}case t.PrepareUniformBuffer:{let e=n;this._uboDeclaration=``,this._vertexDeclaration=``,this._fragmentDeclaration=``,this._uniformList=[],this._samplerList=[],this._uboList=[];for(let t of this._plugins){let n=t.getUniforms();if(n){if(n.ubo)for(let t of n.ubo){if(t.size&&t.type){let n=t.arraySize??0;e.ubo.addUniform(t.name,t.size,n),this._uboDeclaration+=`${t.type} ${t.name}${n>0?`[${n}]`:``};\r
`}this._uniformList.push(t.name)}n.vertex&&(this._vertexDeclaration+=n.vertex+`\r
`),n.fragment&&(this._fragmentDeclaration+=n.fragment+`\r
`)}t.getSamplers(this._samplerList),t.getUniformBuffersNames(this._uboList)}break}}}_collectPointNames(e,t){if(t)for(let n in t)this._codeInjectionPoints[e]||(this._codeInjectionPoints[e]={}),this._codeInjectionPoints[e][n]=!0}_injectCustomCode(e){return(t,n)=>{e&&(n=e(t,n)),this._uboDeclaration&&(n=n.replace(`#define ADDITIONAL_UBO_DECLARATION`,this._uboDeclaration)),this._vertexDeclaration&&(n=n.replace(`#define ADDITIONAL_VERTEX_DECLARATION`,this._vertexDeclaration)),this._fragmentDeclaration&&(n=n.replace(`#define ADDITIONAL_FRAGMENT_DECLARATION`,this._fragmentDeclaration));let r=this._codeInjectionPoints?.[t];if(!r)return n;for(let e in r){let r=``;for(let n of this._activePlugins){let i=n.getCustomCode(t);i!=null&&i[e]&&(r+=i[e]+`\r
`)}if(r.length>0){if(e.charAt(0)===`!`){e=e.substring(1);let t=`g`;if(e.charAt(0)===`!`)t=``,e=e.substring(1);else{let n=Zi.exec(e);n&&n.length>=2&&(t=n[1],e=e.substring(t.length+1))}t.indexOf(`g`)<0&&(t+=`g`);let i=n,a=new RegExp(e,t),o=a.exec(i);for(;o!==null;){let e=r;for(let t=0;t<o.length;++t)e=e.replace(`$`+t,o[t]);n=n.replace(o[0],e),o=a.exec(i)}}else{let t=`#define `+e;n=n.replace(t,`\r
`+r+`\r
`+t)}}}return n}}};Qi._MaterialPluginClassToMainDefine={},Qi._MaterialPluginCounter=0;var $i=class{_enable(e){e&&this._pluginManager._activatePlugin(this)}constructor(e,t,n,r,i=!0,a=!1){this.priority=500,this.registerForExtraEvents=!1,this._material=e,this.name=t,this.priority=n,e.pluginManager||(e.pluginManager=new Qi(e),e.onDisposeObservable.add(()=>{e.pluginManager=void 0})),this._pluginDefineNames=r,this._pluginManager=e.pluginManager,i&&this._pluginManager._addPlugin(this),a&&this._enable(!0),this.markAllDefinesAsDirty=e._dirtyCallbacks[63]}getClassName(){return`MaterialPluginBase`}isReadyForSubMesh(e,t,n,r){return!0}hardBindForSubMesh(e,t,n,r){}bindForSubMesh(e,t,n,r){}dispose(e){}getCustomCode(e){return null}collectDefines(e){if(this._pluginDefineNames)for(let t of Object.keys(this._pluginDefineNames)){if(t[0]===`_`)continue;let n=typeof this._pluginDefineNames[t];e[t]={type:n===`number`?`number`:n===`string`?`string`:n===`boolean`?`boolean`:`object`,default:this._pluginDefineNames[t]}}}prepareDefinesBeforeAttributes(e,t,n){}prepareDefines(e,t,n){}hasTexture(e){return!1}hasRenderTargetTextures(){return!1}fillRenderTargetTextures(e){}getActiveTextures(e){}getAnimatables(e){}addFallbacks(e,t,n){return n}getSamplers(e){}getAttributes(e,t,n){}getUniformBuffersNames(e){}getUniforms(){return{}}copyTo(e){f.Clone(()=>e,this)}serialize(){return f.Serialize(this)}parse(e,t,n){f.Parse(()=>this,e,t,n)}};E([k()],$i.prototype,`name`,void 0),E([k()],$i.prototype,`priority`,void 0),E([k()],$i.prototype,`registerForExtraEvents`,void 0);var ea=class extends ze{constructor(){super(...arguments),this.DETAIL=!1,this.DETAILDIRECTUV=0,this.DETAIL_NORMALBLENDMETHOD=0}},ta=class extends $i{_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}constructor(e,t=!0){super(e,`DetailMap`,140,new ea,t),this._texture=null,this.diffuseBlendLevel=1,this.roughnessBlendLevel=1,this.bumpLevel=1,this._normalBlendMethod=de.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,this._isEnabled=!1,this.isEnabled=!1,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}isReadyForSubMesh(e,t,n){return!this._isEnabled||!(e._areTexturesDirty&&t.texturesEnabled&&n.getCaps().standardDerivatives&&this._texture&&G.DetailTextureEnabled&&!this._texture.isReady())}prepareDefines(e,t){if(this._isEnabled){e.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;let n=t.getEngine();e._areTexturesDirty&&(n.getCaps().standardDerivatives&&this._texture&&G.DetailTextureEnabled&&this._isEnabled?(M.PrepareDefinesForMergedUV(this._texture,e,`DETAIL`),e.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):e.DETAIL=!1)}else e.DETAIL=!1}bindForSubMesh(e,t){if(!this._isEnabled)return;let n=this._material.isFrozen;(!e.useUbo||!n||!e.isSync)&&this._texture&&G.DetailTextureEnabled&&(e.updateFloat4(`vDetailInfos`,this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),M.BindTextureMatrix(this._texture,e,`detail`)),t.texturesEnabled&&this._texture&&G.DetailTextureEnabled&&e.setTexture(`detailSampler`,this._texture)}hasTexture(e){return this._texture===e}getActiveTextures(e){this._texture&&e.push(this._texture)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture)}dispose(e){var t;e&&((t=this._texture)==null||t.dispose())}getClassName(){return`DetailMapConfiguration`}getSamplers(e){e.push(`detailSampler`)}getUniforms(){return{ubo:[{name:`vDetailInfos`,size:4,type:`vec4`},{name:`detailMatrix`,size:16,type:`mat4`}]}}};E([T(`detailTexture`),O(`_markAllSubMeshesAsTexturesDirty`)],ta.prototype,`texture`,void 0),E([k()],ta.prototype,`diffuseBlendLevel`,void 0),E([k()],ta.prototype,`roughnessBlendLevel`,void 0),E([k()],ta.prototype,`bumpLevel`,void 0),E([k(),O(`_markAllSubMeshesAsTexturesDirty`)],ta.prototype,`normalBlendMethod`,void 0),E([k(),O(`_markAllSubMeshesAsTexturesDirty`)],ta.prototype,`isEnabled`,void 0);var na={effect:null,subMesh:null},ra=class extends ze{constructor(e){super(e),this.MAINUV1=!1,this.MAINUV2=!1,this.MAINUV3=!1,this.MAINUV4=!1,this.MAINUV5=!1,this.MAINUV6=!1,this.DIFFUSE=!1,this.DIFFUSEDIRECTUV=0,this.BAKED_VERTEX_ANIMATION_TEXTURE=!1,this.AMBIENT=!1,this.AMBIENTDIRECTUV=0,this.OPACITY=!1,this.OPACITYDIRECTUV=0,this.OPACITYRGB=!1,this.REFLECTION=!1,this.EMISSIVE=!1,this.EMISSIVEDIRECTUV=0,this.SPECULAR=!1,this.SPECULARDIRECTUV=0,this.BUMP=!1,this.BUMPDIRECTUV=0,this.PARALLAX=!1,this.PARALLAXOCCLUSION=!1,this.SPECULAROVERALPHA=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.ALPHAFROMDIFFUSE=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.DIFFUSEFRESNEL=!1,this.OPACITYFRESNEL=!1,this.REFLECTIONFRESNEL=!1,this.REFRACTIONFRESNEL=!1,this.EMISSIVEFRESNEL=!1,this.FRESNEL=!1,this.NORMAL=!1,this.TANGENT=!1,this.UV1=!1,this.UV2=!1,this.UV3=!1,this.UV4=!1,this.UV5=!1,this.UV6=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.BONETEXTURE=!1,this.BONES_VELOCITY_ENABLED=!1,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.INSTANCESCOLOR=!1,this.GLOSSINESS=!1,this.ROUGHNESS=!1,this.EMISSIVEASILLUMINATION=!1,this.LINKEMISSIVEWITHDIFFUSE=!1,this.REFLECTIONFRESNELFROMSPECULAR=!1,this.LIGHTMAP=!1,this.LIGHTMAPDIRECTUV=0,this.OBJECTSPACE_NORMALMAP=!1,this.USELIGHTMAPASSHADOWMAP=!1,this.REFLECTIONMAP_3D=!1,this.REFLECTIONMAP_SPHERICAL=!1,this.REFLECTIONMAP_PLANAR=!1,this.REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFRACTIONMAP_CUBIC=!1,this.REFLECTIONMAP_PROJECTION=!1,this.REFLECTIONMAP_SKYBOX=!1,this.REFLECTIONMAP_EXPLICIT=!1,this.REFLECTIONMAP_EQUIRECTANGULAR=!1,this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_OPPOSITEZ=!1,this.INVERTCUBICMAP=!1,this.LOGARITHMICDEPTH=!1,this.REFRACTION=!1,this.REFRACTIONMAP_3D=!1,this.REFLECTIONOVERALPHA=!1,this.TWOSIDEDLIGHTING=!1,this.SHADOWFLOAT=!1,this.MORPHTARGETS=!1,this.MORPHTARGETS_NORMAL=!1,this.MORPHTARGETS_TANGENT=!1,this.MORPHTARGETS_UV=!1,this.NUM_MORPH_INFLUENCERS=0,this.MORPHTARGETS_TEXTURE=!1,this.NONUNIFORMSCALING=!1,this.PREMULTIPLYALPHA=!1,this.ALPHATEST_AFTERALLALPHACOMPUTATIONS=!1,this.ALPHABLEND=!0,this.PREPASS=!1,this.PREPASS_IRRADIANCE=!1,this.PREPASS_IRRADIANCE_INDEX=-1,this.PREPASS_ALBEDO_SQRT=!1,this.PREPASS_ALBEDO_SQRT_INDEX=-1,this.PREPASS_DEPTH=!1,this.PREPASS_DEPTH_INDEX=-1,this.PREPASS_NORMAL=!1,this.PREPASS_NORMAL_INDEX=-1,this.PREPASS_POSITION=!1,this.PREPASS_POSITION_INDEX=-1,this.PREPASS_VELOCITY=!1,this.PREPASS_VELOCITY_INDEX=-1,this.PREPASS_REFLECTIVITY=!1,this.PREPASS_REFLECTIVITY_INDEX=-1,this.SCENE_MRT_COUNT=0,this.RGBDLIGHTMAP=!1,this.RGBDREFLECTION=!1,this.RGBDREFRACTION=!1,this.IMAGEPROCESSING=!1,this.VIGNETTE=!1,this.VIGNETTEBLENDMODEMULTIPLY=!1,this.VIGNETTEBLENDMODEOPAQUE=!1,this.TONEMAPPING=!1,this.TONEMAPPING_ACES=!1,this.CONTRAST=!1,this.COLORCURVES=!1,this.COLORGRADING=!1,this.COLORGRADING3D=!1,this.SAMPLER3DGREENDEPTH=!1,this.SAMPLER3DBGRMAP=!1,this.DITHER=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.MULTIVIEW=!1,this.ORDER_INDEPENDENT_TRANSPARENCY=!1,this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!1,this.CAMERA_ORTHOGRAPHIC=!1,this.CAMERA_PERSPECTIVE=!1,this.IS_REFLECTION_LINEAR=!1,this.IS_REFRACTION_LINEAR=!1,this.EXPOSURE=!1,this.rebuild()}setReflectionMode(e){for(let t of[`REFLECTIONMAP_CUBIC`,`REFLECTIONMAP_EXPLICIT`,`REFLECTIONMAP_PLANAR`,`REFLECTIONMAP_PROJECTION`,`REFLECTIONMAP_PROJECTION`,`REFLECTIONMAP_SKYBOX`,`REFLECTIONMAP_SPHERICAL`,`REFLECTIONMAP_EQUIRECTANGULAR`,`REFLECTIONMAP_EQUIRECTANGULAR_FIXED`,`REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED`])this[t]=t===e}},K=class e extends fr{get imageProcessingConfiguration(){return this._imageProcessingConfiguration}set imageProcessingConfiguration(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()}_attachImageProcessingConfiguration(e){e!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration=e||this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(()=>{this._markAllSubMeshesAsImageProcessingDirty()})))}get isPrePassCapable(){return!this.disableDepthWrite}get cameraColorCurvesEnabled(){return this.imageProcessingConfiguration.colorCurvesEnabled}set cameraColorCurvesEnabled(e){this.imageProcessingConfiguration.colorCurvesEnabled=e}get cameraColorGradingEnabled(){return this.imageProcessingConfiguration.colorGradingEnabled}set cameraColorGradingEnabled(e){this.imageProcessingConfiguration.colorGradingEnabled=e}get cameraToneMappingEnabled(){return this._imageProcessingConfiguration.toneMappingEnabled}set cameraToneMappingEnabled(e){this._imageProcessingConfiguration.toneMappingEnabled=e}get cameraExposure(){return this._imageProcessingConfiguration.exposure}set cameraExposure(e){this._imageProcessingConfiguration.exposure=e}get cameraContrast(){return this._imageProcessingConfiguration.contrast}set cameraContrast(e){this._imageProcessingConfiguration.contrast=e}get cameraColorGradingTexture(){return this._imageProcessingConfiguration.colorGradingTexture}set cameraColorGradingTexture(e){this._imageProcessingConfiguration.colorGradingTexture=e}get cameraColorCurves(){return this._imageProcessingConfiguration.colorCurves}set cameraColorCurves(e){this._imageProcessingConfiguration.colorCurves=e}get canRenderToMRT(){return!0}constructor(t,n){super(t,n),this._diffuseTexture=null,this._ambientTexture=null,this._opacityTexture=null,this._reflectionTexture=null,this._emissiveTexture=null,this._specularTexture=null,this._bumpTexture=null,this._lightmapTexture=null,this._refractionTexture=null,this.ambientColor=new N(0,0,0),this.diffuseColor=new N(1,1,1),this.specularColor=new N(1,1,1),this.emissiveColor=new N(0,0,0),this.specularPower=64,this._useAlphaFromDiffuseTexture=!1,this._useEmissiveAsIllumination=!1,this._linkEmissiveWithDiffuse=!1,this._useSpecularOverAlpha=!1,this._useReflectionOverAlpha=!1,this._disableLighting=!1,this._useObjectSpaceNormalMap=!1,this._useParallax=!1,this._useParallaxOcclusion=!1,this.parallaxScaleBias=.05,this._roughness=0,this.indexOfRefraction=.98,this.invertRefractionY=!0,this.alphaCutOff=.4,this._useLightmapAsShadowmap=!1,this._useReflectionFresnelFromSpecular=!1,this._useGlossinessFromSpecularMapAlpha=!1,this._maxSimultaneousLights=4,this._invertNormalMapX=!1,this._invertNormalMapY=!1,this._twoSidedLighting=!1,this._renderTargets=new s(16),this._worldViewProjectionMatrix=A.Zero(),this._globalAmbientColor=new N(0,0,0),this._cacheHasRenderTargetTextures=!1,this.detailMap=new ta(this),this._attachImageProcessingConfiguration(null),this.prePassConfiguration=new dr,this.getRenderTargetTextures=()=>(this._renderTargets.reset(),e.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&this._renderTargets.push(this._reflectionTexture),e.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&this._renderTargets.push(this._refractionTexture),this._eventInfo.renderTargets=this._renderTargets,this._callbackPluginEventFillRenderTargetTextures(this._eventInfo),this._renderTargets)}get hasRenderTargetTextures(){return e.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget||e.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget?!0:this._cacheHasRenderTargetTextures}getClassName(){return`StandardMaterial`}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()}needAlphaBlending(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromDiffuseTexture()||this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled}needAlphaTesting(){return this._forceAlphaTest?!0:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===de.MATERIAL_ALPHATEST)}_shouldUseAlphaFromDiffuseTexture(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha&&this._useAlphaFromDiffuseTexture&&this._transparencyMode!==de.MATERIAL_OPAQUE}_hasAlphaChannel(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha||this._opacityTexture!=null}getAlphaTestTexture(){return this._diffuseTexture}isReadyForSubMesh(n,i,a=!1){if(this._uniformBufferLayoutBuilt||this.buildUniformLayout(),i.effect&&this.isFrozen&&i.effect._wasPreviouslyReady&&i.effect._wasPreviouslyUsingInstances===a)return!0;i.materialDefines||=(this._callbackPluginEventGeneric(t.GetDefineNames,this._eventInfo),new ra(this._eventInfo.defineNames));let o=this.getScene(),s=i.materialDefines;if(this._isReadyForSubMesh(i))return!0;let c=o.getEngine();s._needNormals=M.PrepareDefinesForLights(o,n,s,!0,this._maxSimultaneousLights,this._disableLighting),M.PrepareDefinesForMultiview(o,s);let l=this.needAlphaBlendingForMesh(n)&&this.getScene().useOrderIndependentTransparency;if(M.PrepareDefinesForPrePass(o,s,this.canRenderToMRT&&!l),M.PrepareDefinesForOIT(o,s,l),s._areTexturesDirty){this._eventInfo.hasRenderTargetTextures=!1,this._callbackPluginEventHasRenderTargetTextures(this._eventInfo),this._cacheHasRenderTargetTextures=this._eventInfo.hasRenderTargetTextures,s._needUVs=!1;for(let e=1;e<=6;++e)s[`MAINUV`+e]=!1;if(o.texturesEnabled){if(s.DIFFUSEDIRECTUV=0,s.BUMPDIRECTUV=0,s.AMBIENTDIRECTUV=0,s.OPACITYDIRECTUV=0,s.EMISSIVEDIRECTUV=0,s.SPECULARDIRECTUV=0,s.LIGHTMAPDIRECTUV=0,this._diffuseTexture&&e.DiffuseTextureEnabled){if(this._diffuseTexture.isReadyOrNotBlocking())M.PrepareDefinesForMergedUV(this._diffuseTexture,s,`DIFFUSE`);else return!1}else s.DIFFUSE=!1;if(this._ambientTexture&&e.AmbientTextureEnabled){if(this._ambientTexture.isReadyOrNotBlocking())M.PrepareDefinesForMergedUV(this._ambientTexture,s,`AMBIENT`);else return!1}else s.AMBIENT=!1;if(this._opacityTexture&&e.OpacityTextureEnabled){if(this._opacityTexture.isReadyOrNotBlocking())M.PrepareDefinesForMergedUV(this._opacityTexture,s,`OPACITY`),s.OPACITYRGB=this._opacityTexture.getAlphaFromRGB;else return!1}else s.OPACITY=!1;if(this._reflectionTexture&&e.ReflectionTextureEnabled){if(this._reflectionTexture.isReadyOrNotBlocking()){switch(s._needNormals=!0,s.REFLECTION=!0,s.ROUGHNESS=this._roughness>0,s.REFLECTIONOVERALPHA=this._useReflectionOverAlpha,s.INVERTCUBICMAP=this._reflectionTexture.coordinatesMode===V.INVCUBIC_MODE,s.REFLECTIONMAP_3D=this._reflectionTexture.isCube,s.REFLECTIONMAP_OPPOSITEZ=s.REFLECTIONMAP_3D&&this.getScene().useRightHandedSystem?!this._reflectionTexture.invertZ:this._reflectionTexture.invertZ,s.RGBDREFLECTION=this._reflectionTexture.isRGBD,this._reflectionTexture.coordinatesMode){case V.EXPLICIT_MODE:s.setReflectionMode(`REFLECTIONMAP_EXPLICIT`);break;case V.PLANAR_MODE:s.setReflectionMode(`REFLECTIONMAP_PLANAR`);break;case V.PROJECTION_MODE:s.setReflectionMode(`REFLECTIONMAP_PROJECTION`);break;case V.SKYBOX_MODE:s.setReflectionMode(`REFLECTIONMAP_SKYBOX`);break;case V.SPHERICAL_MODE:s.setReflectionMode(`REFLECTIONMAP_SPHERICAL`);break;case V.EQUIRECTANGULAR_MODE:s.setReflectionMode(`REFLECTIONMAP_EQUIRECTANGULAR`);break;case V.FIXED_EQUIRECTANGULAR_MODE:s.setReflectionMode(`REFLECTIONMAP_EQUIRECTANGULAR_FIXED`);break;case V.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:s.setReflectionMode(`REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED`);break;case V.CUBIC_MODE:case V.INVCUBIC_MODE:default:s.setReflectionMode(`REFLECTIONMAP_CUBIC`)}s.USE_LOCAL_REFLECTIONMAP_CUBIC=!!this._reflectionTexture.boundingBoxSize}else return!1}else s.REFLECTION=!1,s.REFLECTIONMAP_OPPOSITEZ=!1;if(this._emissiveTexture&&e.EmissiveTextureEnabled){if(this._emissiveTexture.isReadyOrNotBlocking())M.PrepareDefinesForMergedUV(this._emissiveTexture,s,`EMISSIVE`);else return!1}else s.EMISSIVE=!1;if(this._lightmapTexture&&e.LightmapTextureEnabled){if(this._lightmapTexture.isReadyOrNotBlocking())M.PrepareDefinesForMergedUV(this._lightmapTexture,s,`LIGHTMAP`),s.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,s.RGBDLIGHTMAP=this._lightmapTexture.isRGBD;else return!1}else s.LIGHTMAP=!1;if(this._specularTexture&&e.SpecularTextureEnabled){if(this._specularTexture.isReadyOrNotBlocking())M.PrepareDefinesForMergedUV(this._specularTexture,s,`SPECULAR`),s.GLOSSINESS=this._useGlossinessFromSpecularMapAlpha;else return!1}else s.SPECULAR=!1;if(o.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&e.BumpTextureEnabled){if(this._bumpTexture.isReady())M.PrepareDefinesForMergedUV(this._bumpTexture,s,`BUMP`),s.PARALLAX=this._useParallax,s.PARALLAXOCCLUSION=this._useParallaxOcclusion;else return!1;s.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap}else s.BUMP=!1,s.PARALLAX=!1,s.PARALLAXOCCLUSION=!1;if(this._refractionTexture&&e.RefractionTextureEnabled){if(this._refractionTexture.isReadyOrNotBlocking())s._needUVs=!0,s.REFRACTION=!0,s.REFRACTIONMAP_3D=this._refractionTexture.isCube,s.RGBDREFRACTION=this._refractionTexture.isRGBD,s.USE_LOCAL_REFRACTIONMAP_CUBIC=!!this._refractionTexture.boundingBoxSize;else return!1}else s.REFRACTION=!1;s.TWOSIDEDLIGHTING=!this._backFaceCulling&&this._twoSidedLighting}else s.DIFFUSE=!1,s.AMBIENT=!1,s.OPACITY=!1,s.REFLECTION=!1,s.EMISSIVE=!1,s.LIGHTMAP=!1,s.BUMP=!1,s.REFRACTION=!1;s.ALPHAFROMDIFFUSE=this._shouldUseAlphaFromDiffuseTexture(),s.EMISSIVEASILLUMINATION=this._useEmissiveAsIllumination,s.LINKEMISSIVEWITHDIFFUSE=this._linkEmissiveWithDiffuse,s.SPECULAROVERALPHA=this._useSpecularOverAlpha,s.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,s.ALPHATEST_AFTERALLALPHACOMPUTATIONS=this.transparencyMode!==null,s.ALPHABLEND=this.transparencyMode===null||this.needAlphaBlendingForMesh(n)}if(this._eventInfo.isReadyForSubMesh=!0,this._eventInfo.defines=s,this._eventInfo.subMesh=i,this._callbackPluginEventIsReadyForSubMesh(this._eventInfo),!this._eventInfo.isReadyForSubMesh)return!1;if(s._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(s),s.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,s.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}s._areFresnelDirty&&(e.FresnelEnabled?(this._diffuseFresnelParameters||this._opacityFresnelParameters||this._emissiveFresnelParameters||this._refractionFresnelParameters||this._reflectionFresnelParameters)&&(s.DIFFUSEFRESNEL=this._diffuseFresnelParameters&&this._diffuseFresnelParameters.isEnabled,s.OPACITYFRESNEL=this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled,s.REFLECTIONFRESNEL=this._reflectionFresnelParameters&&this._reflectionFresnelParameters.isEnabled,s.REFLECTIONFRESNELFROMSPECULAR=this._useReflectionFresnelFromSpecular,s.REFRACTIONFRESNEL=this._refractionFresnelParameters&&this._refractionFresnelParameters.isEnabled,s.EMISSIVEFRESNEL=this._emissiveFresnelParameters&&this._emissiveFresnelParameters.isEnabled,s._needNormals=!0,s.FRESNEL=!0):s.FRESNEL=!1),M.PrepareDefinesForMisc(n,o,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(n)||this._forceAlphaTest,s),M.PrepareDefinesForFrameBoundValues(o,c,this,s,a,null,i.getRenderingMesh().hasThinInstances),this._eventInfo.defines=s,this._eventInfo.mesh=n,this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo),M.PrepareDefinesForAttributes(n,s,!0,!0,!0),this._callbackPluginEventPrepareDefines(this._eventInfo);let u=!1;if(s.isDirty){let e=s._areLightsDisposed;s.markAsProcessed();let a=new It;s.REFLECTION&&a.addFallback(0,`REFLECTION`),s.SPECULAR&&a.addFallback(0,`SPECULAR`),s.BUMP&&a.addFallback(0,`BUMP`),s.PARALLAX&&a.addFallback(1,`PARALLAX`),s.PARALLAXOCCLUSION&&a.addFallback(0,`PARALLAXOCCLUSION`),s.SPECULAROVERALPHA&&a.addFallback(0,`SPECULAROVERALPHA`),s.FOG&&a.addFallback(1,`FOG`),s.POINTSIZE&&a.addFallback(0,`POINTSIZE`),s.LOGARITHMICDEPTH&&a.addFallback(0,`LOGARITHMICDEPTH`),M.HandleFallbacksForShadows(s,a,this._maxSimultaneousLights),s.SPECULARTERM&&a.addFallback(0,`SPECULARTERM`),s.DIFFUSEFRESNEL&&a.addFallback(1,`DIFFUSEFRESNEL`),s.OPACITYFRESNEL&&a.addFallback(2,`OPACITYFRESNEL`),s.REFLECTIONFRESNEL&&a.addFallback(3,`REFLECTIONFRESNEL`),s.EMISSIVEFRESNEL&&a.addFallback(4,`EMISSIVEFRESNEL`),s.FRESNEL&&a.addFallback(4,`FRESNEL`),s.MULTIVIEW&&a.addFallback(0,`MULTIVIEW`);let l=[r.PositionKind];s.NORMAL&&l.push(r.NormalKind),s.TANGENT&&l.push(r.TangentKind);for(let e=1;e<=6;++e)s[`UV`+e]&&l.push(`uv${e===1?``:e}`);s.VERTEXCOLOR&&l.push(r.ColorKind),M.PrepareAttributesForBones(l,n,s,a),M.PrepareAttributesForInstances(l,s),M.PrepareAttributesForMorphTargets(l,n,s),M.PrepareAttributesForBakedVertexAnimation(l,n,s);let d=`default`,f=`world.view.viewProjection.vEyePosition.vLightsType.vAmbientColor.vDiffuseColor.vSpecularColor.vEmissiveColor.visibility.vFogInfos.vFogColor.pointSize.vDiffuseInfos.vAmbientInfos.vOpacityInfos.vReflectionInfos.vEmissiveInfos.vSpecularInfos.vBumpInfos.vLightmapInfos.vRefractionInfos.mBones.diffuseMatrix.ambientMatrix.opacityMatrix.reflectionMatrix.emissiveMatrix.specularMatrix.bumpMatrix.normalMatrix.lightmapMatrix.refractionMatrix.diffuseLeftColor.diffuseRightColor.opacityParts.reflectionLeftColor.reflectionRightColor.emissiveLeftColor.emissiveRightColor.refractionLeftColor.refractionRightColor.vReflectionPosition.vReflectionSize.vRefractionPosition.vRefractionSize.logarithmicDepthConstant.vTangentSpaceParams.alphaCutOff.boneTextureWidth.morphTargetTextureInfo.morphTargetTextureIndices`.split(`.`),p=[`diffuseSampler`,`ambientSampler`,`opacitySampler`,`reflectionCubeSampler`,`reflection2DSampler`,`emissiveSampler`,`specularSampler`,`bumpSampler`,`lightmapSampler`,`refractionCubeSampler`,`refraction2DSampler`,`boneSampler`,`morphTargets`,`oitDepthSampler`,`oitFrontColorSampler`],m=[`Material`,`Scene`,`Mesh`];this._eventInfo.fallbacks=a,this._eventInfo.fallbackRank=0,this._eventInfo.defines=s,this._eventInfo.uniforms=f,this._eventInfo.attributes=l,this._eventInfo.samplers=p,this._eventInfo.uniformBuffersNames=m,this._eventInfo.customCode=void 0,this._eventInfo.mesh=n,this._callbackPluginEventGeneric(t.PrepareEffect,this._eventInfo),dr.AddUniforms(f),S&&(S.PrepareUniforms(f,s),S.PrepareSamplers(p,s)),M.PrepareUniformsAndSamplersList({uniformsNames:f,uniformBuffersNames:m,samplers:p,defines:s,maxSimultaneousLights:this._maxSimultaneousLights}),_(f);let h={};this.customShaderNameResolve&&(d=this.customShaderNameResolve(d,f,m,p,s,l,h));let g=s.toString(),v=i.effect,y=o.getEngine().createEffect(d,{attributes:l,uniformsNames:f,uniformBuffersNames:m,samplers:p,defines:g,fallbacks:a,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:s.NUM_MORPH_INFLUENCERS},processFinalCode:h.processFinalCode,processCodeAfterIncludes:this._eventInfo.customCode,multiTarget:s.PREPASS},c);if(this._eventInfo.customCode=void 0,y){if(this._onEffectCreatedObservable&&(na.effect=y,na.subMesh=i,this._onEffectCreatedObservable.notifyObservers(na)),this.allowShaderHotSwapping&&v&&!y.isReady()){if(y=v,s.markAsUnprocessed(),u=this.isFrozen,e)return s._areLightsDisposed=!0,!1}else o.resetCachedMaterial(),i.setEffect(y,s,this._materialContext)}}return!i.effect||!i.effect.isReady()?!1:(s._renderId=o.getRenderId(),i.effect._wasPreviouslyReady=!u,i.effect._wasPreviouslyUsingInstances=a,this._checkScenePerformancePriority(),!0)}buildUniformLayout(){let e=this._uniformBuffer;e.addUniform(`diffuseLeftColor`,4),e.addUniform(`diffuseRightColor`,4),e.addUniform(`opacityParts`,4),e.addUniform(`reflectionLeftColor`,4),e.addUniform(`reflectionRightColor`,4),e.addUniform(`refractionLeftColor`,4),e.addUniform(`refractionRightColor`,4),e.addUniform(`emissiveLeftColor`,4),e.addUniform(`emissiveRightColor`,4),e.addUniform(`vDiffuseInfos`,2),e.addUniform(`vAmbientInfos`,2),e.addUniform(`vOpacityInfos`,2),e.addUniform(`vReflectionInfos`,2),e.addUniform(`vReflectionPosition`,3),e.addUniform(`vReflectionSize`,3),e.addUniform(`vEmissiveInfos`,2),e.addUniform(`vLightmapInfos`,2),e.addUniform(`vSpecularInfos`,2),e.addUniform(`vBumpInfos`,3),e.addUniform(`diffuseMatrix`,16),e.addUniform(`ambientMatrix`,16),e.addUniform(`opacityMatrix`,16),e.addUniform(`reflectionMatrix`,16),e.addUniform(`emissiveMatrix`,16),e.addUniform(`lightmapMatrix`,16),e.addUniform(`specularMatrix`,16),e.addUniform(`bumpMatrix`,16),e.addUniform(`vTangentSpaceParams`,2),e.addUniform(`pointSize`,1),e.addUniform(`alphaCutOff`,1),e.addUniform(`refractionMatrix`,16),e.addUniform(`vRefractionInfos`,4),e.addUniform(`vRefractionPosition`,3),e.addUniform(`vRefractionSize`,3),e.addUniform(`vSpecularColor`,4),e.addUniform(`vEmissiveColor`,3),e.addUniform(`vDiffuseColor`,4),e.addUniform(`vAmbientColor`,3),super.buildUniformLayout()}bindForSubMesh(t,n,r){var i;let a=this.getScene(),o=r.materialDefines;if(!o)return;let s=r.effect;if(!s)return;this._activeEffect=s,n.getMeshUniformBuffer().bindToEffect(s,`Mesh`),n.transferToEffect(t),this._uniformBuffer.bindToEffect(s,`Material`),this.prePassConfiguration.bindForSubMesh(this._activeEffect,a,n,t,this.isFrozen),this._eventInfo.subMesh=r,this._callbackPluginEventHardBindForSubMesh(this._eventInfo),o.OBJECTSPACE_NORMALMAP&&(t.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));let c=s._forceRebindOnNextCall||this._mustRebind(a,s,n.visibility);M.BindBonesParameters(n,s);let l=this._uniformBuffer;if(c){if(this.bindViewProjection(s),!l.useUbo||!this.isFrozen||!l.isSync||s._forceRebindOnNextCall){if(e.FresnelEnabled&&o.FRESNEL&&(this.diffuseFresnelParameters&&this.diffuseFresnelParameters.isEnabled&&(l.updateColor4(`diffuseLeftColor`,this.diffuseFresnelParameters.leftColor,this.diffuseFresnelParameters.power),l.updateColor4(`diffuseRightColor`,this.diffuseFresnelParameters.rightColor,this.diffuseFresnelParameters.bias)),this.opacityFresnelParameters&&this.opacityFresnelParameters.isEnabled&&l.updateColor4(`opacityParts`,new N(this.opacityFresnelParameters.leftColor.toLuminance(),this.opacityFresnelParameters.rightColor.toLuminance(),this.opacityFresnelParameters.bias),this.opacityFresnelParameters.power),this.reflectionFresnelParameters&&this.reflectionFresnelParameters.isEnabled&&(l.updateColor4(`reflectionLeftColor`,this.reflectionFresnelParameters.leftColor,this.reflectionFresnelParameters.power),l.updateColor4(`reflectionRightColor`,this.reflectionFresnelParameters.rightColor,this.reflectionFresnelParameters.bias)),this.refractionFresnelParameters&&this.refractionFresnelParameters.isEnabled&&(l.updateColor4(`refractionLeftColor`,this.refractionFresnelParameters.leftColor,this.refractionFresnelParameters.power),l.updateColor4(`refractionRightColor`,this.refractionFresnelParameters.rightColor,this.refractionFresnelParameters.bias)),this.emissiveFresnelParameters&&this.emissiveFresnelParameters.isEnabled&&(l.updateColor4(`emissiveLeftColor`,this.emissiveFresnelParameters.leftColor,this.emissiveFresnelParameters.power),l.updateColor4(`emissiveRightColor`,this.emissiveFresnelParameters.rightColor,this.emissiveFresnelParameters.bias))),a.texturesEnabled){if(this._diffuseTexture&&e.DiffuseTextureEnabled&&(l.updateFloat2(`vDiffuseInfos`,this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),M.BindTextureMatrix(this._diffuseTexture,l,`diffuse`)),this._ambientTexture&&e.AmbientTextureEnabled&&(l.updateFloat2(`vAmbientInfos`,this._ambientTexture.coordinatesIndex,this._ambientTexture.level),M.BindTextureMatrix(this._ambientTexture,l,`ambient`)),this._opacityTexture&&e.OpacityTextureEnabled&&(l.updateFloat2(`vOpacityInfos`,this._opacityTexture.coordinatesIndex,this._opacityTexture.level),M.BindTextureMatrix(this._opacityTexture,l,`opacity`)),this._hasAlphaChannel()&&l.updateFloat(`alphaCutOff`,this.alphaCutOff),this._reflectionTexture&&e.ReflectionTextureEnabled&&(l.updateFloat2(`vReflectionInfos`,this._reflectionTexture.level,this.roughness),l.updateMatrix(`reflectionMatrix`,this._reflectionTexture.getReflectionTextureMatrix()),this._reflectionTexture.boundingBoxSize)){let e=this._reflectionTexture;l.updateVector3(`vReflectionPosition`,e.boundingBoxPosition),l.updateVector3(`vReflectionSize`,e.boundingBoxSize)}if(this._emissiveTexture&&e.EmissiveTextureEnabled&&(l.updateFloat2(`vEmissiveInfos`,this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),M.BindTextureMatrix(this._emissiveTexture,l,`emissive`)),this._lightmapTexture&&e.LightmapTextureEnabled&&(l.updateFloat2(`vLightmapInfos`,this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),M.BindTextureMatrix(this._lightmapTexture,l,`lightmap`)),this._specularTexture&&e.SpecularTextureEnabled&&(l.updateFloat2(`vSpecularInfos`,this._specularTexture.coordinatesIndex,this._specularTexture.level),M.BindTextureMatrix(this._specularTexture,l,`specular`)),this._bumpTexture&&a.getEngine().getCaps().standardDerivatives&&e.BumpTextureEnabled&&(l.updateFloat3(`vBumpInfos`,this._bumpTexture.coordinatesIndex,1/this._bumpTexture.level,this.parallaxScaleBias),M.BindTextureMatrix(this._bumpTexture,l,`bump`),a._mirroredCameraPosition?l.updateFloat2(`vTangentSpaceParams`,this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):l.updateFloat2(`vTangentSpaceParams`,this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1)),this._refractionTexture&&e.RefractionTextureEnabled){let e=1;if(this._refractionTexture.isCube||(l.updateMatrix(`refractionMatrix`,this._refractionTexture.getReflectionTextureMatrix()),this._refractionTexture.depth&&(e=this._refractionTexture.depth)),l.updateFloat4(`vRefractionInfos`,this._refractionTexture.level,this.indexOfRefraction,e,this.invertRefractionY?-1:1),this._refractionTexture.boundingBoxSize){let e=this._refractionTexture;l.updateVector3(`vRefractionPosition`,e.boundingBoxPosition),l.updateVector3(`vRefractionSize`,e.boundingBoxSize)}}}this.pointsCloud&&l.updateFloat(`pointSize`,this.pointSize),o.SPECULARTERM&&l.updateColor4(`vSpecularColor`,this.specularColor,this.specularPower),l.updateColor3(`vEmissiveColor`,e.EmissiveTextureEnabled?this.emissiveColor:N.BlackReadOnly),l.updateColor4(`vDiffuseColor`,this.diffuseColor,this.alpha),a.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor),l.updateColor3(`vAmbientColor`,this._globalAmbientColor)}a.texturesEnabled&&(this._diffuseTexture&&e.DiffuseTextureEnabled&&s.setTexture(`diffuseSampler`,this._diffuseTexture),this._ambientTexture&&e.AmbientTextureEnabled&&s.setTexture(`ambientSampler`,this._ambientTexture),this._opacityTexture&&e.OpacityTextureEnabled&&s.setTexture(`opacitySampler`,this._opacityTexture),this._reflectionTexture&&e.ReflectionTextureEnabled&&(this._reflectionTexture.isCube?s.setTexture(`reflectionCubeSampler`,this._reflectionTexture):s.setTexture(`reflection2DSampler`,this._reflectionTexture)),this._emissiveTexture&&e.EmissiveTextureEnabled&&s.setTexture(`emissiveSampler`,this._emissiveTexture),this._lightmapTexture&&e.LightmapTextureEnabled&&s.setTexture(`lightmapSampler`,this._lightmapTexture),this._specularTexture&&e.SpecularTextureEnabled&&s.setTexture(`specularSampler`,this._specularTexture),this._bumpTexture&&a.getEngine().getCaps().standardDerivatives&&e.BumpTextureEnabled&&s.setTexture(`bumpSampler`,this._bumpTexture),this._refractionTexture&&e.RefractionTextureEnabled&&(this._refractionTexture.isCube?s.setTexture(`refractionCubeSampler`,this._refractionTexture):s.setTexture(`refraction2DSampler`,this._refractionTexture))),this.getScene().useOrderIndependentTransparency&&this.needAlphaBlendingForMesh(n)&&this.getScene().depthPeelingRenderer.bind(s),this._eventInfo.subMesh=r,this._callbackPluginEventBindForSubMesh(this._eventInfo),ne(s,this,a),this.bindEyePosition(s)}else a.getEngine()._features.needToAlwaysBindUniformBuffers&&(this._needToBindSceneUbo=!0);(c||!this.isFrozen)&&(a.lightsEnabled&&!this._disableLighting&&M.BindLights(a,n,s,o,this._maxSimultaneousLights),(a.fogEnabled&&n.applyFog&&a.fogMode!==g.FOGMODE_NONE||this._reflectionTexture||this._refractionTexture||n.receiveShadows||o.PREPASS)&&this.bindView(s),M.BindFogParameters(a,n,s),o.NUM_MORPH_INFLUENCERS&&M.BindMorphTargetParameters(n,s),o.BAKED_VERTEX_ANIMATION_TEXTURE&&((i=n.bakedVertexAnimationManager)==null||i.bind(s,o.INSTANCES)),this.useLogarithmicDepth&&M.BindLogDepth(o,s,a),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect)),this._afterBind(n,this._activeEffect),l.update()}getAnimatables(){let e=super.getAnimatables();return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&e.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&e.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&e.push(this._emissiveTexture),this._specularTexture&&this._specularTexture.animations&&this._specularTexture.animations.length>0&&e.push(this._specularTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&e.push(this._lightmapTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&e.push(this._refractionTexture),e}getActiveTextures(){let e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),this._ambientTexture&&e.push(this._ambientTexture),this._opacityTexture&&e.push(this._opacityTexture),this._reflectionTexture&&e.push(this._reflectionTexture),this._emissiveTexture&&e.push(this._emissiveTexture),this._specularTexture&&e.push(this._specularTexture),this._bumpTexture&&e.push(this._bumpTexture),this._lightmapTexture&&e.push(this._lightmapTexture),this._refractionTexture&&e.push(this._refractionTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._diffuseTexture===e||this._ambientTexture===e||this._opacityTexture===e||this._reflectionTexture===e||this._emissiveTexture===e||this._specularTexture===e||this._bumpTexture===e||this._lightmapTexture===e||this._refractionTexture===e)}dispose(e,t){var n,r,i,a,o,s,c,l,u;t&&((n=this._diffuseTexture)==null||n.dispose(),(r=this._ambientTexture)==null||r.dispose(),(i=this._opacityTexture)==null||i.dispose(),(a=this._reflectionTexture)==null||a.dispose(),(o=this._emissiveTexture)==null||o.dispose(),(s=this._specularTexture)==null||s.dispose(),(c=this._bumpTexture)==null||c.dispose(),(l=this._lightmapTexture)==null||l.dispose(),(u=this._refractionTexture)==null||u.dispose()),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),super.dispose(e,t)}clone(t){let n=f.Clone(()=>new e(t,this.getScene()),this);return n.name=t,n.id=t,this.stencil.copyTo(n.stencil),n}static Parse(t,n,r){let i=f.Parse(()=>new e(t.name,n),t,n,r);return t.stencil&&i.stencil.parse(t.stencil,n,r),i}static get DiffuseTextureEnabled(){return G.DiffuseTextureEnabled}static set DiffuseTextureEnabled(e){G.DiffuseTextureEnabled=e}static get DetailTextureEnabled(){return G.DetailTextureEnabled}static set DetailTextureEnabled(e){G.DetailTextureEnabled=e}static get AmbientTextureEnabled(){return G.AmbientTextureEnabled}static set AmbientTextureEnabled(e){G.AmbientTextureEnabled=e}static get OpacityTextureEnabled(){return G.OpacityTextureEnabled}static set OpacityTextureEnabled(e){G.OpacityTextureEnabled=e}static get ReflectionTextureEnabled(){return G.ReflectionTextureEnabled}static set ReflectionTextureEnabled(e){G.ReflectionTextureEnabled=e}static get EmissiveTextureEnabled(){return G.EmissiveTextureEnabled}static set EmissiveTextureEnabled(e){G.EmissiveTextureEnabled=e}static get SpecularTextureEnabled(){return G.SpecularTextureEnabled}static set SpecularTextureEnabled(e){G.SpecularTextureEnabled=e}static get BumpTextureEnabled(){return G.BumpTextureEnabled}static set BumpTextureEnabled(e){G.BumpTextureEnabled=e}static get LightmapTextureEnabled(){return G.LightmapTextureEnabled}static set LightmapTextureEnabled(e){G.LightmapTextureEnabled=e}static get RefractionTextureEnabled(){return G.RefractionTextureEnabled}static set RefractionTextureEnabled(e){G.RefractionTextureEnabled=e}static get ColorGradingTextureEnabled(){return G.ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(e){G.ColorGradingTextureEnabled=e}static get FresnelEnabled(){return G.FresnelEnabled}static set FresnelEnabled(e){G.FresnelEnabled=e}};E([T(`diffuseTexture`)],K.prototype,`_diffuseTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesAndMiscDirty`)],K.prototype,`diffuseTexture`,void 0),E([T(`ambientTexture`)],K.prototype,`_ambientTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`ambientTexture`,void 0),E([T(`opacityTexture`)],K.prototype,`_opacityTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesAndMiscDirty`)],K.prototype,`opacityTexture`,void 0),E([T(`reflectionTexture`)],K.prototype,`_reflectionTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`reflectionTexture`,void 0),E([T(`emissiveTexture`)],K.prototype,`_emissiveTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`emissiveTexture`,void 0),E([T(`specularTexture`)],K.prototype,`_specularTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`specularTexture`,void 0),E([T(`bumpTexture`)],K.prototype,`_bumpTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`bumpTexture`,void 0),E([T(`lightmapTexture`)],K.prototype,`_lightmapTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`lightmapTexture`,void 0),E([T(`refractionTexture`)],K.prototype,`_refractionTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`refractionTexture`,void 0),E([le(`ambient`)],K.prototype,`ambientColor`,void 0),E([le(`diffuse`)],K.prototype,`diffuseColor`,void 0),E([le(`specular`)],K.prototype,`specularColor`,void 0),E([le(`emissive`)],K.prototype,`emissiveColor`,void 0),E([k()],K.prototype,`specularPower`,void 0),E([k(`useAlphaFromDiffuseTexture`)],K.prototype,`_useAlphaFromDiffuseTexture`,void 0),E([O(`_markAllSubMeshesAsTexturesAndMiscDirty`)],K.prototype,`useAlphaFromDiffuseTexture`,void 0),E([k(`useEmissiveAsIllumination`)],K.prototype,`_useEmissiveAsIllumination`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useEmissiveAsIllumination`,void 0),E([k(`linkEmissiveWithDiffuse`)],K.prototype,`_linkEmissiveWithDiffuse`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`linkEmissiveWithDiffuse`,void 0),E([k(`useSpecularOverAlpha`)],K.prototype,`_useSpecularOverAlpha`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useSpecularOverAlpha`,void 0),E([k(`useReflectionOverAlpha`)],K.prototype,`_useReflectionOverAlpha`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useReflectionOverAlpha`,void 0),E([k(`disableLighting`)],K.prototype,`_disableLighting`,void 0),E([O(`_markAllSubMeshesAsLightsDirty`)],K.prototype,`disableLighting`,void 0),E([k(`useObjectSpaceNormalMap`)],K.prototype,`_useObjectSpaceNormalMap`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useObjectSpaceNormalMap`,void 0),E([k(`useParallax`)],K.prototype,`_useParallax`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useParallax`,void 0),E([k(`useParallaxOcclusion`)],K.prototype,`_useParallaxOcclusion`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useParallaxOcclusion`,void 0),E([k()],K.prototype,`parallaxScaleBias`,void 0),E([k(`roughness`)],K.prototype,`_roughness`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`roughness`,void 0),E([k()],K.prototype,`indexOfRefraction`,void 0),E([k()],K.prototype,`invertRefractionY`,void 0),E([k()],K.prototype,`alphaCutOff`,void 0),E([k(`useLightmapAsShadowmap`)],K.prototype,`_useLightmapAsShadowmap`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useLightmapAsShadowmap`,void 0),E([x(`diffuseFresnelParameters`)],K.prototype,`_diffuseFresnelParameters`,void 0),E([O(`_markAllSubMeshesAsFresnelDirty`)],K.prototype,`diffuseFresnelParameters`,void 0),E([x(`opacityFresnelParameters`)],K.prototype,`_opacityFresnelParameters`,void 0),E([O(`_markAllSubMeshesAsFresnelAndMiscDirty`)],K.prototype,`opacityFresnelParameters`,void 0),E([x(`reflectionFresnelParameters`)],K.prototype,`_reflectionFresnelParameters`,void 0),E([O(`_markAllSubMeshesAsFresnelDirty`)],K.prototype,`reflectionFresnelParameters`,void 0),E([x(`refractionFresnelParameters`)],K.prototype,`_refractionFresnelParameters`,void 0),E([O(`_markAllSubMeshesAsFresnelDirty`)],K.prototype,`refractionFresnelParameters`,void 0),E([x(`emissiveFresnelParameters`)],K.prototype,`_emissiveFresnelParameters`,void 0),E([O(`_markAllSubMeshesAsFresnelDirty`)],K.prototype,`emissiveFresnelParameters`,void 0),E([k(`useReflectionFresnelFromSpecular`)],K.prototype,`_useReflectionFresnelFromSpecular`,void 0),E([O(`_markAllSubMeshesAsFresnelDirty`)],K.prototype,`useReflectionFresnelFromSpecular`,void 0),E([k(`useGlossinessFromSpecularMapAlpha`)],K.prototype,`_useGlossinessFromSpecularMapAlpha`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`useGlossinessFromSpecularMapAlpha`,void 0),E([k(`maxSimultaneousLights`)],K.prototype,`_maxSimultaneousLights`,void 0),E([O(`_markAllSubMeshesAsLightsDirty`)],K.prototype,`maxSimultaneousLights`,void 0),E([k(`invertNormalMapX`)],K.prototype,`_invertNormalMapX`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`invertNormalMapX`,void 0),E([k(`invertNormalMapY`)],K.prototype,`_invertNormalMapY`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`invertNormalMapY`,void 0),E([k(`twoSidedLighting`)],K.prototype,`_twoSidedLighting`,void 0),E([O(`_markAllSubMeshesAsTexturesDirty`)],K.prototype,`twoSidedLighting`,void 0),E([k()],K.prototype,`useLogarithmicDepth`,null),te(`BABYLON.StandardMaterial`,K),g.DefaultMaterialFactory=e=>new K(`default material`,e);var ia=`imageProcessingCompatibility`,aa=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;c.IncludesShadersStore[ia]=aa;var oa=`shadowOnlyPixelShader`,sa=`precision highp float;
uniform vec4 vEyePosition;
uniform float alpha;
uniform vec3 shadowColor;
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
float shadow=1.;
float glossiness=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;c.ShadersStore[oa]=sa;var ca=`shadowOnlyVertexShader`,la=`precision highp float;
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;
uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
gl_Position=viewProjection*worldPos;
vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;c.ShadersStore[ca]=la;var ua=class extends ze{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}},da=class e extends fr{constructor(e,t){super(e,t),this._needAlphaBlending=!0,this.shadowColor=N.Black()}needAlphaBlending(){return this._needAlphaBlending}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}get activeLight(){return this._activeLight}set activeLight(e){this._activeLight=e}_getFirstShadowLightForMesh(e){for(let t of e.lightSources)if(t.shadowEnabled)return t;return null}isReadyForSubMesh(e,t,n){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===n)return!0;t.materialDefines||=new ua;let i=t.materialDefines,a=this.getScene();if(this._isReadyForSubMesh(t))return!0;let o=a.getEngine();if(this._activeLight){for(let t of e.lightSources)if(t.shadowEnabled){if(this._activeLight===t)break;let n=e.lightSources.indexOf(this._activeLight);n!==-1&&(e.lightSources.splice(n,1),e.lightSources.splice(0,0,this._activeLight));break}}M.PrepareDefinesForFrameBoundValues(a,o,this,i,!!n),M.PrepareDefinesForMisc(e,a,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=M.PrepareDefinesForLights(a,e,i,!1,1);let s=this._getFirstShadowLightForMesh(e)?.getShadowGenerator();if(this._needAlphaBlending=!0,s&&s.getClassName&&s.getClassName()===`CascadedShadowGenerator`){let e=s;this._needAlphaBlending=!e.autoCalcDepthBounds}if(M.PrepareDefinesForAttributes(e,i,!1,!0),i.isDirty){i.markAsProcessed(),a.resetCachedMaterial();let n=new It;i.FOG&&n.addFallback(1,`FOG`),M.HandleFallbacksForShadows(i,n,1),i.NUM_BONE_INFLUENCERS>0&&n.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=a.imageProcessingConfiguration.applyByPostProcess;let s=[r.PositionKind];i.NORMAL&&s.push(r.NormalKind),M.PrepareAttributesForBones(s,e,i,n),M.PrepareAttributesForInstances(s,i);let c=i.toString(),l=[`world`,`view`,`viewProjection`,`vEyePosition`,`vLightsType`,`vFogInfos`,`vFogColor`,`pointSize`,`alpha`,`shadowColor`,`mBones`],u=[],d=[];_(l),M.PrepareUniformsAndSamplersList({uniformsNames:l,uniformBuffersNames:d,samplers:u,defines:i,maxSimultaneousLights:1}),t.setEffect(a.getEngine().createEffect(`shadowOnly`,{attributes:s,uniformsNames:l,uniformBuffersNames:d,samplers:u,defines:c,fallbacks:n,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},o),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=a.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!n,!0)}bindForSubMesh(e,t,n){let r=this.getScene(),i=n.materialDefines;if(!i)return;let a=n.effect;if(a){if(this._activeEffect=a,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix(`viewProjection`,r.getTransformMatrix()),M.BindBonesParameters(t,this._activeEffect),this._mustRebind(r,a)&&(ne(a,this,r),this.pointsCloud&&this._activeEffect.setFloat(`pointSize`,this.pointSize),this._activeEffect.setFloat(`alpha`,this.alpha),this._activeEffect.setColor3(`shadowColor`,this.shadowColor),r.bindEyePosition(a)),r.lightsEnabled){M.BindLights(r,t,this._activeEffect,i,1);let e=this._getFirstShadowLightForMesh(t);e&&(e._renderId=-1)}(r.fogEnabled&&t.applyFog&&r.fogMode!==g.FOGMODE_NONE||i.SHADOWCSM0)&&this._activeEffect.setMatrix(`view`,r.getViewMatrix()),M.BindFogParameters(r,t,this._activeEffect),this._afterBind(t,this._activeEffect)}}clone(t){return f.Clone(()=>new e(t,this.getScene()),this)}serialize(){let e=super.serialize();return e.customType=`BABYLON.ShadowOnlyMaterial`,e}getClassName(){return`ShadowOnlyMaterial`}static Parse(t,n,r){return f.Parse(()=>new e(t.name,n),t,n,r)}};te(`BABYLON.ShadowOnlyMaterial`,da);var fa={aspect:2,enableDebugging:!1,enableShadows:!0},pa=class{constructor(e){Fe(this,`size`,9.5),this.config={...fa,...e},this.create()}create(e){this.destroy(),Object.assign(this.config,e);let{aspect:t,enableDebugging:n,enableShadows:r}=this.config;this.box=new _e(`diceBox`);let i=new da(`shadowOnly`,this.config.scene);i.alpha=+!!r,n&&(i=new K(`diceBox_material`),i.alpha=.7,i.diffuseColor=new N(1,1,0));let a=ur(`ground`,{width:this.size*2,height:1,depth:this.size*2},this.config.scene);if(a.scaling=new j(t,1,1),a.material=i,a.receiveShadows=!0,a.setParent(this.box),n){let e=ur(`wallTop`,{width:this.size,height:30,depth:1},this.config.scene);e.position.y=15,e.position.z=this.size/-2,e.scaling=new j(t,1,1),e.material=i,e.setParent(this.box);let n=ur(`wallRight`,{width:1,height:30,depth:this.size},this.config.scene);n.position.x=this.size*t/2,n.position.y=15,n.material=i,n.setParent(this.box);let r=ur(`wallBottom`,{width:this.size,height:30,depth:1},this.config.scene);r.position.y=15,r.position.z=this.size/2,r.scaling=new j(t,1,1),r.material=i,r.setParent(this.box);let a=ur(`wallLeft`,{width:1,height:30,depth:this.size},this.config.scene);a.position.x=this.size*t/-2,a.position.y=15,a.material=i,a.setParent(this.box)}}destroy(){this.box&&this.box.dispose()}},ma=class{constructor(){}},ha=class e extends K{AttachAfterBind(e,t){if(this._newUniformInstances)for(let e in this._newUniformInstances){let n=e.toString().split(`-`);n[0]==`vec2`?t.setVector2(n[1],this._newUniformInstances[e]):n[0]==`vec3`?t.setVector3(n[1],this._newUniformInstances[e]):n[0]==`vec4`?t.setVector4(n[1],this._newUniformInstances[e]):n[0]==`mat4`?t.setMatrix(n[1],this._newUniformInstances[e]):n[0]==`float`&&t.setFloat(n[1],this._newUniformInstances[e])}if(this._newSamplerInstances)for(let e in this._newSamplerInstances){let n=e.toString().split(`-`);n[0]==`sampler2D`&&this._newSamplerInstances[e].isReady&&this._newSamplerInstances[e].isReady()&&t.setTexture(n[1],this._newSamplerInstances[e])}}ReviewUniform(e,t){if(e==`uniform`&&this._newUniforms)for(let e=0;e<this._newUniforms.length;e++)this._customUniform[e].indexOf(`sampler`)==-1&&t.push(this._newUniforms[e].replace(/\[\d*\]/g,``));if(e==`sampler`&&this._newUniforms)for(let e=0;e<this._newUniforms.length;e++)this._customUniform[e].indexOf(`sampler`)!=-1&&t.push(this._newUniforms[e].replace(/\[\d*\]/g,``));return t}Builder(t,n,r,i,a,o){if(o&&this._customAttributes&&this._customAttributes.length>0&&o.push(...this._customAttributes),this.ReviewUniform(`uniform`,n),this.ReviewUniform(`sampler`,i),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,e.ShaderIndexer++;let s=`custom_`+e.ShaderIndexer,c=this._afterBind.bind(this);return this._afterBind=(e,t)=>{if(t){this.AttachAfterBind(e,t);try{c(e,t)}catch{}}},C.ShadersStore[s+`VertexShader`]=this.VertexShader.replace(`#define CUSTOM_VERTEX_BEGIN`,this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:``).replace(`#define CUSTOM_VERTEX_DEFINITIONS`,(this._customUniform?this._customUniform.join(`
`):``)+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:``)).replace(`#define CUSTOM_VERTEX_MAIN_BEGIN`,this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:``).replace(`#define CUSTOM_VERTEX_UPDATE_POSITION`,this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:``).replace(`#define CUSTOM_VERTEX_UPDATE_NORMAL`,this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:``).replace(`#define CUSTOM_VERTEX_MAIN_END`,this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:``),this.CustomParts.Vertex_After_WorldPosComputed&&(C.ShadersStore[s+`VertexShader`]=C.ShadersStore[s+`VertexShader`].replace(`#define CUSTOM_VERTEX_UPDATE_WORLDPOS`,this.CustomParts.Vertex_After_WorldPosComputed)),C.ShadersStore[s+`PixelShader`]=this.FragmentShader.replace(`#define CUSTOM_FRAGMENT_BEGIN`,this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:``).replace(`#define CUSTOM_FRAGMENT_MAIN_BEGIN`,this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:``).replace(`#define CUSTOM_FRAGMENT_DEFINITIONS`,(this._customUniform?this._customUniform.join(`
`):``)+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:``)).replace(`#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE`,this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:``).replace(`#define CUSTOM_FRAGMENT_UPDATE_ALPHA`,this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:``).replace(`#define CUSTOM_FRAGMENT_BEFORE_LIGHTS`,this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:``).replace(`#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR`,this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:``).replace(`#define CUSTOM_FRAGMENT_MAIN_END`,this.CustomParts.Fragment_MainEnd?this.CustomParts.Fragment_MainEnd:``),this.CustomParts.Fragment_Before_Fog&&(C.ShadersStore[s+`PixelShader`]=C.ShadersStore[s+`PixelShader`].replace(`#define CUSTOM_FRAGMENT_BEFORE_FOG`,this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=s,s}constructor(e,t){super(e,t),this.CustomParts=new ma,this.customShaderNameResolve=this.Builder,this.FragmentShader=C.ShadersStore.defaultPixelShader,this.VertexShader=C.ShadersStore.defaultVertexShader}AddUniform(e,t,n){return this._customUniform||(this._customUniform=[],this._newUniforms=[],this._newSamplerInstances={},this._newUniformInstances={}),n&&(t.indexOf(`sampler`)==-1?this._newUniformInstances[t+`-`+e]=n:this._newSamplerInstances[t+`-`+e]=n),this._customUniform.push(`uniform `+t+` `+e+`;`),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||=[],this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Fragment_Custom_Diffuse(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace(`result`,`diffuseColor`),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace(`result`,`alpha`),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace(`result`,`color`),this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace(`result`,`positionUpdated`),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace(`result`,`normalUpdated`),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}};ha.ShaderIndexer=1,te(`BABYLON.CustomMaterial`,ha),ha.prototype.clone=function(e){let t=this,n=f.Clone(()=>new ha(e,this.getScene()),this);return n.name=e,n.id=e,n.CustomParts.Fragment_Begin=t.CustomParts.Fragment_Begin,n.CustomParts.Fragment_Definitions=t.CustomParts.Fragment_Definitions,n.CustomParts.Fragment_MainBegin=t.CustomParts.Fragment_MainBegin,n.CustomParts.Fragment_Custom_Diffuse=t.CustomParts.Fragment_Custom_Diffuse,n.CustomParts.Fragment_Before_Lights=t.CustomParts.Fragment_Before_Lights,n.CustomParts.Fragment_Before_Fog=t.CustomParts.Fragment_Before_Fog,n.CustomParts.Fragment_Custom_Alpha=t.CustomParts.Fragment_Custom_Alpha,n.CustomParts.Fragment_Before_FragColor=t.CustomParts.Fragment_Before_FragColor,n.CustomParts.Vertex_Begin=t.CustomParts.Vertex_Begin,n.CustomParts.Vertex_Definitions=t.CustomParts.Vertex_Definitions,n.CustomParts.Vertex_MainBegin=t.CustomParts.Vertex_MainBegin,n.CustomParts.Vertex_Before_PositionUpdated=t.CustomParts.Vertex_Before_PositionUpdated,n.CustomParts.Vertex_Before_NormalUpdated=t.CustomParts.Vertex_Before_NormalUpdated,n.CustomParts.Vertex_After_WorldPosComputed=t.CustomParts.Vertex_After_WorldPosComputed,n.CustomParts.Vertex_MainEnd=t.CustomParts.Vertex_MainEnd,n};var ga=class{constructor(e){Fe(this,`loadedThemes`,{}),Fe(this,`themeData`,{}),this.scene=e.scene}async loadStandardMaterial(e){let{theme:t,material:n}=e,r=new K(t,this.scene);n.diffuseTexture&&(r.diffuseTexture=await this.getTexture(`diffuse`,e)),n.bumpTexture&&(r.bumpTexture=await this.getTexture(`bump`,e)),n.specularTexture&&(r.specularTexture=await this.getTexture(`specular`,e)),r.allowShaderHotSwapping=!1}async loadColorMaterial(t){let{theme:n,material:r}=t,i=new ha(n+`_light`,this.scene),a=e(t);r.diffuseTexture&&r.diffuseTexture.light&&(a.material.diffuseTexture=t.material.diffuseTexture.light,i.diffuseTexture=await this.getTexture(`diffuse`,a)),r.bumpTexture&&(i.bumpTexture=await this.getTexture(`bump`,t)),r.specularTexture&&(i.specularTexture=await this.getTexture(`specular`,t)),i.allowShaderHotSwapping=!1,i.Vertex_Definitions(`
      attribute vec3 customColor;
      varying vec3 vColor;
    `).Vertex_MainEnd(`
      vColor = customColor;
    `).Fragment_Definitions(`
      varying vec3 vColor;
    `).Fragment_Custom_Diffuse(`
      baseColor.rgb = mix(vColor.rgb, baseColor.rgb, baseColor.a);
    `),i.AddAttribute(`customColor`);let o=i.clone(n+`_dark`);r.diffuseTexture&&r.diffuseTexture.dark&&(a.material.diffuseTexture=t.material.diffuseTexture.dark,o.diffuseTexture=await this.getTexture(`diffuse`,a)),o.AddAttribute(`customColor`)}async getTexture(e,t){let{basePath:n,material:r,theme:i}=t,a,o=e+`Level`,s=e+`Texture`;try{switch(e){case`diffuse`:a=await this.importTextureAsync(`${n}/${r[s]}`,i),r[o]&&(a.level=r[o]);break;case`bump`:a=await this.importTextureAsync(`${n}/${r[s]}`,i),r[o]&&(a.level=r[o]);break;case`specular`:a=await this.importTextureAsync(`${n}/${r[s]}`,i),r.specularPower&&(a.specularPower=r.specularPower);break;default:throw Error(`Texture type: ${e} is not supported`)}}catch(e){console.error(e)}return a}async importTextureAsync(e,t){return new Promise((n,r)=>{let i=e.match(/^(.*\/)(.*)$/),a=new V(e,this.scene,void 0,!0,void 0,()=>n(a),()=>r(`Unable to load texture '${i[2]}' for theme: '${t}'. Check that your assetPath is configured correctly and that the files exist at path: '${i[1]}'`))}).catch(e=>console.error(e))}async load(e){let{material:t}=e;t.type===`color`?await this.loadColorMaterial(e):t.type===`standard`?await this.loadStandardMaterial(e):console.error(`Material type: ${t.type} not supported`)}},q,_a,J,va,Y,X,Z,ya,Q,ba,xa,$,Sa,Ca,wa,Ta=class{constructor(e){I(this,Ca),Fe(this,`config`),Fe(this,`initialized`,!1),I(this,q,{}),I(this,_a,0),I(this,J,0),I(this,va,[]),I(this,Y,void 0),I(this,X,void 0),I(this,Z,void 0),I(this,ya,void 0),I(this,Q,void 0),I(this,ba,void 0),I(this,xa,void 0),I(this,$,void 0),I(this,Sa,{}),Fe(this,`noop`,()=>{}),Fe(this,`diceBufferView`,new Float32Array(8e3)),this.onInitComplete=e.onInitComplete||this.noop,this.onThemeLoaded=e.onThemeLoaded||this.noop,this.onRollResult=e.onRollResult||this.noop,this.onRollComplete=e.onRollComplete||this.noop,this.onDieRemoved=e.onDieRemoved||this.noop,this.initialized=this.initScene(e)}async initScene(e){L(this,Y,e.canvas),F(this,Y).width=e.width,F(this,Y).height=e.height,this.config=e.options,L(this,X,Be(F(this,Y))),L(this,Z,$e({engine:F(this,X)})),L(this,ya,tt({engine:F(this,X),scene:F(this,Z)})),L(this,Q,cr({enableShadows:this.config.enableShadows,shadowTransparency:this.config.shadowTransparency,intensity:this.config.lightIntensity,scene:F(this,Z)})),L(this,ba,new pa({enableShadows:this.config.enableShadows,aspect:F(this,Y).width/F(this,Y).height,lights:F(this,Q),scene:F(this,Z)})),L(this,xa,new ga({scene:F(this,Z)})),this.onInitComplete()}connect(e){L(this,$,e),F(this,$).postMessage({action:`initBuffer`,diceBuffer:this.diceBufferView.buffer},[this.diceBufferView.buffer]),F(this,$).onmessage=e=>{switch(e.data.action){case`updates`:this.updatesFromPhysics(e.data.diceBuffer);break;default:console.error(`action from physicsWorker not found in offscreen worker`)}}}updateConfig(e){let t=this.config;this.config=e,t.enableShadows!==this.config.enableShadows&&(Object.values(F(this,Q)).forEach(e=>e.dispose()),L(this,Q,cr({enableShadows:this.config.enableShadows,shadowTransparency:this.config.shadowTransparency,intensity:this.config.lightIntensity,scene:F(this,Z)}))),t.scale!==this.config.scale&&Object.values(F(this,q)).forEach(({mesh:e})=>{if(e){let{x:t=1,y:n=1,z:r=1}=e?.metadata?.baseScale;e.scaling=new j(this.config.scale*t,this.config.scale*n,this.config.scale*r)}}),t.shadowTransparency!==this.config.shadowTransparency&&(F(this,Q).directional.shadowGenerator.darkness=this.config.shadowTransparency),t.lightIntensity!==this.config.lightIntensity&&(F(this,Q).directional.intensity=.65*this.config.lightIntensity,F(this,Q).hemispheric.intensity=.4*this.config.lightIntensity)}render(e){F(this,X).runRenderLoop(this.renderLoop.bind(this)),F(this,$).postMessage({action:`resumeSimulation`,newStartPoint:e})}renderLoop(){F(this,J)&&F(this,J)===Object.keys(F(this,q)).length?(F(this,X).stopRenderLoop(),F(this,$).postMessage({action:`stopSimulation`}),this.onRollComplete()):F(this,Z).render()}async loadTheme(e){let{theme:t,basePath:n,material:r,meshFilePath:i,meshName:a}=e;if(await F(this,xa).load({theme:t,basePath:n,material:r}),!Object.keys(F(this,Sa)).includes(a)){F(this,Sa)[a]=i;let e=await d.loadModels({meshFilePath:i,meshName:a},F(this,Z));if(!e)throw Error(`No colliders returned from the 3D mesh file. Low poly colliders are expected to be in the same file as the high poly dice and the mesh name contains the word 'collider'`);F(this,$).postMessage({action:`loadModels`,options:{colliders:e,meshName:a}})}this.onThemeLoaded({id:t})}clear(){!Object.keys(F(this,q)).length&&!F(this,J)||(this.diceBufferView.byteLength&&this.diceBufferView.fill(0),F(this,va).forEach(e=>clearTimeout(e)),F(this,X).stopRenderLoop(),Object.values(F(this,q)).forEach(e=>{e.mesh&&e.mesh.dispose()}),L(this,q,{}),L(this,_a,0),L(this,J,0),F(this,Z).render())}add(e){d.loadDie(e,F(this,Z)).then(e=>{F(this,va).push(setTimeout(()=>{Re(this,Ca,wa).call(this,e)},Le(this,_a)._++*this.config.delay))})}addNonDie(e){F(this,X).activeRenderLoops.length===0&&this.render(!1);let{id:t,value:n,...r}=e,i={id:t,value:n,config:r};F(this,q)[t]=i,setTimeout(()=>{F(this,va).push(setTimeout(()=>{this.handleAsleep(i)},Le(this,_a)._++*this.config.delay))},10)}remove(e){let t=F(this,q)[e.id];t.hasOwnProperty(`d10Instance`)&&(F(this,q)[t.d10Instance.id].mesh&&(F(this,q)[t.d10Instance.id].mesh.dispose(),F(this,$).postMessage({action:`removeDie`,id:t.d10Instance.id})),delete F(this,q)[t.d10Instance.id],Le(this,J)._--),F(this,q)[e.id].mesh&&F(this,q)[e.id].mesh.dispose(),delete F(this,q)[e.id],Le(this,J)._--,F(this,Z).render(),this.onDieRemoved(e.rollId)}updatesFromPhysics(e){this.diceBufferView=new Float32Array(e);let t=1;for(let e=0,n=this.diceBufferView[0];e<n;e++){if(!Object.keys(F(this,q)).length)continue;let e=F(this,q)[`${this.diceBufferView[t]}`];if(!e){console.log(`Error: die not available in scene to animate`);break}if(this.diceBufferView[t+1]===-1)this.handleAsleep(e);else{let n=this.diceBufferView[t+1],r=this.diceBufferView[t+2],i=this.diceBufferView[t+3],a=this.diceBufferView[t+4],o=this.diceBufferView[t+5],s=this.diceBufferView[t+6],c=this.diceBufferView[t+7];e.mesh.position.set(n,r,i),e.mesh.rotationQuaternion.set(a,o,s,c)}t+=8}requestAnimationFrame(()=>{F(this,$).postMessage({action:`stepSimulation`,diceBuffer:this.diceBufferView.buffer},[this.diceBufferView.buffer])})}async handleAsleep(e){var t,n;if(e.asleep=!0,await d.getRollResult(e,F(this,Z)),e.d10Instance||e.dieParent){if((t=e?.d10Instance)!=null&&t.asleep||(n=e?.dieParent)!=null&&n.asleep){let t=e.config.sides===100?e:e.dieParent,n=e.config.sides===10?e:e.d10Instance;t.rawValue&&(t.value=t.rawValue),t.rawValue=t.value,t.value+=n.value,this.onRollResult({rollId:t.config.rollId,value:t.value})}}else e.config.sides===10&&e.value===0&&(e.value=10),this.onRollResult({rollId:e.config.rollId,value:e.value});Le(this,J)._++}resize(e){let t=F(this,Y).width=e.width,n=F(this,Y).height=e.height;F(this,ba).create({aspect:t/n}),F(this,X).resize()}};q=new WeakMap,_a=new WeakMap,J=new WeakMap,va=new WeakMap,Y=new WeakMap,X=new WeakMap,Z=new WeakMap,ya=new WeakMap,Q=new WeakMap,ba=new WeakMap,xa=new WeakMap,$=new WeakMap,Sa=new WeakMap,Ca=new WeakSet,wa=async function(e){F(this,X).activeRenderLoops.length===0&&this.render(e.newStartPoint);let t={...e,assetPath:this.config.assetPath,enableShadows:this.config.enableShadows,scale:this.config.scale,lights:F(this,Q)},n=new d(t,F(this,Z));return F(this,q)[n.id]=n,F(this,$).postMessage({action:`addDie`,options:{sides:e.sides,scale:this.config.scale,id:n.id,newStartPoint:e.newStartPoint,theme:e.theme,meshName:e.meshName}}),e.sides===100&&e.data!==`single`&&(n.d10Instance=await d.loadDie({...t,dieType:`d10`,sides:10,id:n.id+1e4},F(this,Z)).then(e=>{let t=new d(e,F(this,Z));return t.dieParent=n,t}),F(this,q)[`${n.d10Instance.id}`]=n.d10Instance,F(this,$).postMessage({action:`addDie`,options:{sides:10,scale:this.config.scale,id:n.d10Instance.id,theme:e.theme,meshName:e.meshName}})),n};export{Ta as default};