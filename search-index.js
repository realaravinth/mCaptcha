var searchIndex = JSON.parse('{\
"mCaptcha_browser":{"doc":"mCaptcha is a proof of work based Denaial-of-Service …","i":[[5,"gen_pow","mCaptcha_browser","",null,[[["string",3]],["string",3]]],[5,"__wasm_bindgen_generated_gen_pow","","",null,[[]]]],"p":[]},\
"m_captcha":{"doc":"mCaptcha is a proof of work based Denaial-of-Service …","i":[[0,"defense","m_captcha","Defense datatypes",null,null],[3,"Level","m_captcha::defense","Level struct that describes threshold-difficulty factor …",null,null],[3,"LevelBuilder","","Bulder struct for [Level] to describe …",null,null],[11,"visitor_threshold","","set visitor count for level",0,[[]]],[11,"difficulty_factor","","set difficulty factor for level. difficulty_factor can\'t …",0,[[],["captcharesult",6]]],[11,"build","","build Level struct",0,[[],[["captcharesult",6],["level",3]]]],[3,"Defense","","struct describes all the different [Level]s at which an …",null,null],[3,"DefenseBuilder","","Builder struct for [Defense]",null,null],[11,"add_level","","add a level to [Defense]",1,[[["level",3]],["captcharesult",6]]],[11,"build","","Build [Defense]",1,[[],[["defense",3],["captcharesult",6]]]],[11,"get_difficulty","","! Difficulty is calculated as: ! …",2,[[]]],[11,"tighten_up","","tighten up defense. Increases defense level by a factor …",2,[[]]],[11,"loosen_up","","Loosen up defense. Decreases defense level by a factor of …",2,[[]]],[11,"max_defense","","Set defense to maximum level",2,[[]]],[11,"min_defense","","Set defense to minimum level",2,[[]]],[11,"visitor_threshold","","Get current level\'s  visitor threshold",2,[[]]],[0,"errors","m_captcha","Errors and Result module",null,null],[4,"CaptchaError","m_captcha::errors","Error datatype",null,null],[13,"LevelEmpty","","When configuring m_captcha, [DefenseBuilder][…",3,null],[13,"DifficultyFactorZero","","Visitor count must be a whole number(zero and above). …",3,null],[13,"SetDifficultyFactor","","Difficulty factor must be set",3,null],[13,"SetVisitorThreshold","","Visitor threshold must be set",3,null],[13,"DuplicateVisitorCount","","Visitor count must be Unique",3,null],[13,"DecreaseingDifficultyFactor","","Difficulty factor should increase with level",3,null],[13,"MailboxError","","Difficulty factor should increase with level",3,null],[6,"CaptchaResult","","[Result] datatype for m_captcha",null,null],[0,"mcaptcha","m_captcha","MCaptcha actor module that manages defense levels",null,null],[3,"MCaptcha","m_captcha::mcaptcha","This struct represents the mCaptcha state and is used to …",null,null],[3,"MCaptchaBuilder","","Builder for <code>MCaptcha</code>.",null,null],[11,"defense","","",4,[[["defense",3]]]],[11,"duration","","",4,[[]]],[11,"cache","","",4,[[["addr",3]]]],[11,"build","","Builds a new <code>MCaptcha</code>.",4,[[],[["result",4],["mcaptcha",3],["string",3]]]],[11,"add_visitor","","incerment visiotr count by one",5,[[]]],[11,"decrement_visiotr","","deccerment visiotr count by one",5,[[]]],[11,"get_difficulty","","get current difficulty factor",5,[[]]],[3,"Visitor","","Message to increment the visitor count",null,null],[3,"VerifyPoW","","Message to decrement the visitor count",null,null],[0,"message","m_captcha","message datatypes to interact with [MCaptcha] actor",null,null],[0,"cache","","message datatypes to interact with [MCaptcha] actor",null,null],[0,"hashcache","m_captcha::cache","",null,null],[3,"HashCache","m_captcha::cache::hashcache","",null,null],[0,"messages","m_captcha::cache","",null,null],[3,"Cache","m_captcha::cache::messages","Message to decrement the visitor count",null,null],[12,"0","","",6,null],[3,"Retrive","","Message to decrement the visitor count",null,null],[12,"0","","",7,null],[3,"PoWConfig","","PoW Config that will be sent to clients for generating PoW",null,null],[12,"string","","",8,null],[12,"difficulty_factor","","",8,null],[11,"new","","",8,[[["mcaptcha",3]]]],[8,"Save","m_captcha::cache","",null,null],[11,"from","m_captcha::defense","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","m_captcha::errors","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","m_captcha::mcaptcha","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","m_captcha::cache::hashcache","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","m_captcha::cache::messages","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"clone","m_captcha::defense","",9,[[],["level",3]]],[11,"clone","","",0,[[],["levelbuilder",3]]],[11,"clone","","",2,[[],["defense",3]]],[11,"clone","","",1,[[],["defensebuilder",3]]],[11,"clone","m_captcha::errors","",3,[[],["captchaerror",4]]],[11,"clone","m_captcha::mcaptcha","",5,[[],["mcaptcha",3]]],[11,"clone","","",4,[[],["mcaptchabuilder",3]]],[11,"clone","m_captcha::cache::hashcache","",12,[[],["hashcache",3]]],[11,"clone","m_captcha::cache::messages","",8,[[],["powconfig",3]]],[11,"default","m_captcha::defense","",9,[[]]],[11,"default","","",0,[[]]],[11,"default","","",1,[[]]],[11,"default","","",2,[[]]],[11,"default","m_captcha::mcaptcha","",4,[[],["mcaptchabuilder",3]]],[11,"default","m_captcha::cache::hashcache","",12,[[],["hashcache",3]]],[11,"eq","m_captcha::defense","",9,[[["level",3]]]],[11,"ne","","",9,[[["level",3]]]],[11,"eq","","",0,[[["levelbuilder",3]]]],[11,"ne","","",0,[[["levelbuilder",3]]]],[11,"eq","","",2,[[["defense",3]]]],[11,"ne","","",2,[[["defense",3]]]],[11,"eq","","",1,[[["defensebuilder",3]]]],[11,"ne","","",1,[[["defensebuilder",3]]]],[11,"eq","m_captcha::errors","",3,[[["captchaerror",4]]]],[11,"fmt","m_captcha::defense","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::errors","",3,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::cache::messages","",8,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::errors","",3,[[["formatter",3]],["result",6]]],[11,"handle","m_captcha::mcaptcha","",5,[[["visitor",3]]]],[11,"handle","","",5,[[["verifypow",3]]]],[11,"handle","m_captcha::cache::hashcache","",12,[[["cache",3]]]],[11,"handle","","",12,[[["retrive",3]]]],[11,"deserialize","m_captcha::mcaptcha","",11,[[],["result",4]]],[11,"serialize","m_captcha::cache::messages","",8,[[],["result",4]]]],"p":[[3,"LevelBuilder"],[3,"DefenseBuilder"],[3,"Defense"],[4,"CaptchaError"],[3,"MCaptchaBuilder"],[3,"MCaptcha"],[3,"Cache"],[3,"Retrive"],[3,"PoWConfig"],[3,"Level"],[3,"Visitor"],[3,"VerifyPoW"],[3,"HashCache"]]},\
"mcaptcha_cli":{"doc":"","i":[[5,"main","mcaptcha_cli","",null,[[]]]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);