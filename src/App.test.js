import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // เปลี่ยนข้อความที่ค้นหาจาก "learn react" เป็น "To-do List"
  const linkElement = screen.getByText(/To-do List/i);
  expect(linkElement).toBeInTheDocument();
});

