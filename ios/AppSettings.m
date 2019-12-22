//
//  AppSettings.m
//  ReactNativeApp
//
//  Created by Terry Wong on 15/11/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "AppSettings.h"

@implementation AppSettings

- (NSDictionary *)constantsToExport
{
  NSString *appVersion = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
  NSString *serverEnvironment = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"SERVER_ENVIRONMENT"];

  return
  @{
    @"appVersion": appVersion,
    @"serverEnvironment": serverEnvironment,
  };
}

+ (BOOL) requiresMainQueueSetup {
  return YES;
}

RCT_EXPORT_MODULE()

@end
