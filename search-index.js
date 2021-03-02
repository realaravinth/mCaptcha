var searchIndex = JSON.parse('{\
"browser":{"doc":"","i":[[5,"gen_pow","browser","",null,[[["string",3]],["string",3]]],[5,"__wasm_bindgen_generated_gen_pow","","",null,[[]]]],"p":[]},\
"m_captcha":{"doc":"mCaptcha is a proof of work based Denaial-of-Service …","i":[[0,"counter","m_captcha","MCaptcha actor module that manages defense levels",null,null],[3,"Visitor","m_captcha::counter","Message to increment the visitor count",null,null],[3,"MCaptcha","","This struct represents the mCaptcha state and is used to …",null,null],[3,"MCaptchaBuilder","","Builder for <code>MCaptcha</code>.",null,null],[11,"defense","","",0,[[["defense",3]]]],[11,"duration","","",0,[[]]],[11,"build","","Builds a new <code>MCaptcha</code>.",0,[[],[["result",4],["mcaptcha",3],["string",3]]]],[11,"add_visitor","","incerment visiotr count by one",1,[[]]],[11,"decrement_visiotr","","deccerment visiotr count by one",1,[[]]],[11,"get_difficulty","","get current difficulty factor",1,[[]]],[0,"defense","m_captcha","Defense datatypes",null,null],[3,"Level","m_captcha::defense","Level struct that describes threshold-difficulty factor …",null,null],[3,"LevelBuilder","","Bulder struct for [Level] to describe …",null,null],[11,"visitor_threshold","","set visitor count for level",2,[[]]],[11,"difficulty_factor","","set difficulty factor for level. difficulty_factor can\'t …",2,[[],["captcharesult",6]]],[11,"build","","build Level struct",2,[[],[["level",3],["captcharesult",6]]]],[3,"Defense","","struct describes all the different [Level]s at which an …",null,null],[3,"DefenseBuilder","","Builder struct for [Defense]",null,null],[11,"add_level","","add a level to [Defense]",3,[[["level",3]],["captcharesult",6]]],[11,"build","","Build [Defense]",3,[[],[["captcharesult",6],["defense",3]]]],[11,"get_difficulty","","! Difficulty is calculated as: ! …",4,[[]]],[11,"tighten_up","","tighten up defense. Increases defense level by a factor …",4,[[]]],[11,"loosen_up","","Loosen up defense. Decreases defense level by a factor of …",4,[[]]],[11,"max_defense","","Set defense to maximum level",4,[[]]],[11,"min_defense","","Set defense to minimum level",4,[[]]],[11,"visitor_threshold","","Get current level\'s  visitor threshold",4,[[]]],[0,"errors","m_captcha","Errors and Result module",null,null],[4,"CaptchaError","m_captcha::errors","Error datatype",null,null],[13,"LevelEmpty","","When configuring m_captcha, [DefenseBuilder][…",5,null],[13,"DifficultyFactorZero","","Visitor count must be a whole number(zero and above). …",5,null],[13,"SetDifficultyFactor","","Difficulty factor must be set",5,null],[13,"SetVisitorThreshold","","Visitor threshold must be set",5,null],[13,"DuplicateVisitorCount","","Visitor count must be Unique",5,null],[13,"DecreaseingDifficultyFactor","","Difficulty factor should increase with level",5,null],[6,"CaptchaResult","","[Result] datatype for m_captcha",null,null],[0,"message","m_captcha","message datatypes to interact with [MCaptcha] actor",null,null],[11,"from","m_captcha::counter","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","m_captcha::defense","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","m_captcha::errors","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"clone","m_captcha::counter","",0,[[],["mcaptchabuilder",3]]],[11,"clone","m_captcha::defense","",7,[[],["level",3]]],[11,"clone","","",2,[[],["levelbuilder",3]]],[11,"clone","","",4,[[],["defense",3]]],[11,"clone","","",3,[[],["defensebuilder",3]]],[11,"clone","m_captcha::errors","",5,[[],["captchaerror",4]]],[11,"default","m_captcha::counter","",0,[[],["mcaptchabuilder",3]]],[11,"default","m_captcha::defense","",7,[[]]],[11,"default","","",2,[[]]],[11,"default","","",3,[[]]],[11,"default","","",4,[[]]],[11,"eq","","",7,[[["level",3]]]],[11,"ne","","",7,[[["level",3]]]],[11,"eq","","",2,[[["levelbuilder",3]]]],[11,"ne","","",2,[[["levelbuilder",3]]]],[11,"eq","","",4,[[["defense",3]]]],[11,"ne","","",4,[[["defense",3]]]],[11,"eq","","",3,[[["defensebuilder",3]]]],[11,"ne","","",3,[[["defensebuilder",3]]]],[11,"eq","m_captcha::errors","",5,[[["captchaerror",4]]]],[11,"fmt","m_captcha::defense","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","m_captcha::errors","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"handle","m_captcha::counter","",1,[[["visitor",3]]]]],"p":[[3,"MCaptchaBuilder"],[3,"MCaptcha"],[3,"LevelBuilder"],[3,"DefenseBuilder"],[3,"Defense"],[4,"CaptchaError"],[3,"Visitor"],[3,"Level"]]},\
"mcaptcha_cli":{"doc":"","i":[[5,"main","mcaptcha_cli","",null,[[]]]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);