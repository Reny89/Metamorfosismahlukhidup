﻿window.globalProvideData('slide', '{"title":"latihan 5","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":13,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide13","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5lWknfcxuuu","actionGroups":{"ReviewInt_6l3AcdOWtNW":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5XC12z1hAl9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6NdtlypXufc"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EIUad4xwI7"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6po1t25kaN7.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6l3AcdOWtNW_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6l3AcdOWtNW_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6l3AcdOWtNW","typea":"var","valueb":"5kVWdC6QGj5","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5kVWdC6QGj5.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6l3AcdOWtNW"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5kVWdC6QGj5.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6l3AcdOWtNW"}]}]}]},"ReviewIntCorrectIncorrect_6l3AcdOWtNW":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5XC12z1hAl9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6NdtlypXufc"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EIUad4xwI7"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6l3AcdOWtNW":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6l3AcdOWtNW"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_6l3AcdOWtNW":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5XC12z1hAl9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6NdtlypXufc"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EIUad4xwI7"},"enabled":{"type":"boolean","value":false}}]},"6l3AcdOWtNW_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6po1t25kaN7.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5kVWdC6QGj5.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6l3AcdOWtNW"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6po1t25kaN7.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6po1t25kaN7.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6l3AcdOWtNW"}]}]}]}]},"SetLayout_pxabnsnfns00001100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"NavigationRestrictionNextSlide_5lWknfcxuuu":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6WBJnkG8zOr"}}]},"NavigationRestrictionPreviousSlide_5lWknfcxuuu":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6jszWlmTZhP","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6jszWlmTZhP","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6l3AcdOWtNW","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6l3AcdOWtNW"}],"elseActions":[{"kind":"exe_actiongroup","id":"6l3AcdOWtNW_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6l3AcdOWtNW","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6l3AcdOWtNW","typea":"var","valueb":"5kVWdC6QGj5","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5kVWdC6QGj5"},"completed_slide_ref":{"type":"string","value":"_player.6k3QwE7VOB3.6WBJnkG8zOr"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6l3AcdOWtNW","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6l3AcdOWtNW","typea":"var","valueb":"5kVWdC6QGj5","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5kVWdC6QGj5"},"completed_slide_ref":{"type":"string","value":"_player.6k3QwE7VOB3.6WBJnkG8zOr"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5lWknfcxuuu"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5lWknfcxuuu"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"651sZyfvios"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EIUad4xwI7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5yLRs3OpSNZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XC12z1hAl9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pN5thBw5OU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NdtlypXufc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6eE3TsqEnQ1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6QTUAzvIPVC"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6j9ADJnWd1f"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6XbfZa3TPl5"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":44,"id":"01","url":"story_content/5hIvJJYsXqJ.png","type":"normal","altText":"METAMORFOSIS SEMPURNA DAN TIDAK SEMPURNA (6).png","width":1280,"height":720,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"METAMORFOSIS SEMPURNA DAN TIDAK SEMPURNA (6).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"651sZyfvios"},{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":58,"id":"01","url":"story_content/6iPPwKZjRDd_P_201_60_242_222.png","type":"normal","altText":"capung.png","width":242,"height":222,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":448,"yPos":248,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":161.5,"rotateYPos":148,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":323,"bottom":296,"altText":"capung.png","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":0,"yPos":0,"width":323,"height":296,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":6,"bottom":5,"altText":"capung.png","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":0,"yPos":0,"width":6,"height":5,"strokewidth":0}}}],"width":323,"height":296,"resume":true,"useHandCursor":true,"id":"6EIUad4xwI7","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5XC12z1hAl9.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5XC12z1hAl9._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5XC12z1hAl9"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6NdtlypXufc.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6NdtlypXufc._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6NdtlypXufc"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":59,"id":"01","url":"story_content/5rpeImLZkHu_P_191_57_306_317.png","type":"normal","altText":"nyamuk.png","width":306,"height":318,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":976,"yPos":200,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":131,"rotateYPos":136,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":262,"bottom":272,"altText":"nyamuk.png","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":0,"yPos":0,"width":262,"height":272,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":10,"bottom":10,"altText":"nyamuk.png","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":0,"yPos":0,"width":10,"height":10,"strokewidth":0}}}],"width":262,"height":272,"resume":true,"useHandCursor":true,"id":"5XC12z1hAl9","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6EIUad4xwI7.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6EIUad4xwI7._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6EIUad4xwI7"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6NdtlypXufc.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6NdtlypXufc._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6NdtlypXufc"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":60,"id":"01","url":"story_content/5wYvMifMbfH_P_170_85_340_233.png","type":"normal","altText":"belalang.png","width":340,"height":234,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":16,"yPos":216,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":151.5,"rotateYPos":104,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":303,"bottom":208,"altText":"belalang.png","pngfb":false,"pr":{"l":"Lib","i":93}},"html5data":{"xPos":0,"yPos":0,"width":303,"height":208,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":20,"bottom":14,"altText":"belalang.png","pngfb":false,"pr":{"l":"Lib","i":94}},"html5data":{"xPos":0,"yPos":0,"width":20,"height":14,"strokewidth":0}}}],"width":303,"height":208,"resume":true,"useHandCursor":true,"id":"6NdtlypXufc","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6EIUad4xwI7.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6EIUad4xwI7._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6EIUad4xwI7"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5XC12z1hAl9.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5XC12z1hAl9._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5XC12z1hAl9"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5yLRs3OpSNZ_1339809691","id":"01","linkId":"txt__default_5yLRs3OpSNZ","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":948,"height":45,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Hewan yang mengalami metamorfosis sempurna yaitu …","style":{"fontFamily":"\\"Comic Sans MSBold CBoldF0BE571E\\",\\"Comic Sans MS\\"","fontSize":24,"fontIsBold":false,"ascent":35.266,"descent":9.328,"leading":0,"underlinePosition":-4.25,"underlineThickness":2.734,"xHeight":17.266}}],"style":{"justification":"left","tagType":"P"},"runs":[{"idx":0,"len":50,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":862,"bottom":50,"pngfb":false,"pr":{"l":"Lib","i":95}}}],"shapemaskId":"","xPos":176,"yPos":112,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":484,"rotateYPos":27.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":968,"bottom":55,"altText":"Hewan yang mengalami metamorfosis sempurna yaitu …","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":0,"yPos":0,"width":968,"height":55,"strokewidth":0}},"width":968,"height":55,"resume":true,"useHandCursor":true,"id":"5yLRs3OpSNZ"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":61,"id":"01","url":"story_content/6k12m6kh4tV_P_205_99_248_128.png","type":"normal","altText":"tombol submit.png","width":248,"height":128,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":552,"yPos":560,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":85,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":170,"bottom":88,"altText":"tombol submit.png","pngfb":false,"pr":{"l":"Lib","i":96}},"html5data":{"xPos":0,"yPos":0,"width":170,"height":88,"strokewidth":0}},"width":170,"height":88,"resume":true,"useHandCursor":true,"id":"6pN5thBw5OU","events":[{"kind":"onrelease","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.5XC12z1hAl9.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6NdtlypXufc.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6EIUad4xwI7.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6po1t25kaN7"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6jszWlmTZhP.InvalidPromptSlide"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":10,"id":"01","url":"story_content/5kUyOwkTQHP_FFFFFF_P_149_29_989_479.png","type":"normal","altText":"2.png","width":990,"height":480,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":16,"yPos":536,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":132,"rotateYPos":64,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":264,"bottom":128,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":0,"yPos":0,"width":264,"height":128,"strokewidth":0}},"width":264,"height":128,"resume":true,"useHandCursor":true,"id":"6eE3TsqEnQ1"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"txt__default_6QTUAzvIPVC","type":"richvartext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":180,"height":22,"device":true,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"%_player.namalengkap%","style":{"fontSize":12,"foregroundColor":"#D9D9D9","linkColor":"#D9D9D9","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"justification":"left","tagType":"P"},"runs":[{"idx":0,"len":21,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"}}],"shapemaskId":"","xPos":56,"yPos":592,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":100,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":200,"bottom":32,"altText":"%_player.namalengkap%","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":200,"height":32,"strokewidth":0}},"width":200,"height":32,"resume":true,"useHandCursor":true,"id":"6QTUAzvIPVC"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"txt__default_6j9ADJnWd1f","type":"richvartext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":180,"height":19,"device":true,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"%_player.asalsekolah%","style":{"fontSize":10,"foregroundColor":"#D9D9D9","linkColor":"#D9D9D9","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":14.251,"descent":3.906,"leading":0,"underlinePosition":-1.003,"underlineThickness":0.664,"xHeight":7.135}}],"style":{"justification":"left","tagType":"P"},"runs":[{"idx":0,"len":21,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"}}],"shapemaskId":"","xPos":64,"yPos":624,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":100,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":200,"bottom":29,"altText":"%_player.asalsekolah%","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":200,"height":29,"strokewidth":0}},"width":200,"height":29,"resume":true,"useHandCursor":true,"id":"6j9ADJnWd1f"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6XbfZa3TPl5_-1319251685","id":"01","linkId":"txt__default_6XbfZa3TPl5","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":788,"height":45,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Pilihlah salah satu hewan yang kamu anggap benar!","style":{"fontFamily":"\\"Comic Sans MSBold CBoldF0BE571E\\",\\"Comic Sans MS\\"","fontSize":24,"fontIsBold":false,"foregroundColor":"#984807","linkColor":"#984807","ascent":35.266,"descent":9.328,"leading":0,"underlinePosition":-4.25,"underlineThickness":2.734,"xHeight":17.266}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":49,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":797,"bottom":50,"pngfb":false,"pr":{"l":"Lib","i":61}}}],"shapemaskId":"","xPos":208,"yPos":40,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":404,"rotateYPos":27.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":808,"bottom":55,"altText":"Pilihlah salah satu hewan yang kamu anggap benar!","pngfb":false,"pr":{"l":"Lib","i":60}},"html5data":{"xPos":0,"yPos":0,"width":808,"height":55,"strokewidth":0}},"width":808,"height":55,"resume":true,"useHandCursor":true,"id":"6XbfZa3TPl5"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6l3AcdOWtNW_CorrectReview","id":"01","linkId":"6l3AcdOWtNW_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":63}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":62}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6l3AcdOWtNW_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6l3AcdOWtNW_IncorrectReview","id":"01","linkId":"6l3AcdOWtNW_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":65}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":64}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6l3AcdOWtNW_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');