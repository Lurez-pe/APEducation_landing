/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProgramPage } from './pages/ProgramPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programas/elementary-school" element={<ProgramPage programKey="elementary" />} />
        <Route path="programas/middle-school" element={<ProgramPage programKey="middle" />} />
        <Route path="programas/high-school" element={<ProgramPage programKey="high" />} />
        <Route path="programas/conversation-class" element={<ProgramPage programKey="conversation" />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}