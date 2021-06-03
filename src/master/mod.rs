/*
 * mCaptcha - A proof of work based DoS protection system
 * Copyright © 2021 Aravinth Manivannan <realravinth@batsense.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
//! [Master] actor module that manages [MCaptcha] actors
use std::sync::mpsc::Receiver;

use actix::dev::*;

pub mod embedded;

/// Describes actor handler trait impls that are required by a cache implementation
pub trait Counter: actix::Actor + actix::Handler<AddVisitor> {}

/// Message to add visitor to an [MCaptcha] actor
#[derive(Message)]
#[rtype(result = "Option<Receiver<crate::mcaptcha::AddVisitorResult>>")]
pub struct AddVisitor(pub String);